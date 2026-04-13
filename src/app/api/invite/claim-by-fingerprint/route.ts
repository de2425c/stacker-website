import { NextRequest, NextResponse } from "next/server";
import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { getAdminDb } from "@/lib/firebase/admin";
import { verifyAuthToken } from "@/lib/invite/auth";
import { getClientIPFromHeaders, parseClientIP } from "@/lib/invite/ip-utils";
import { getCorsHeaders } from "@/lib/cors";
import { isValidDeviceType, isValidIOSVersion } from "@/lib/invite/validation";
import type { ClaimByFingerprintRequest, ClaimByFingerprintResponse } from "@/lib/invite/types";

export async function OPTIONS(request: NextRequest): Promise<NextResponse> {
  const CORS_HEADERS = getCorsHeaders(request.headers.get("origin"));
  return new NextResponse(null, { status: 200, headers: CORS_HEADERS });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const CORS_HEADERS = getCorsHeaders(request.headers.get("origin"));
  const authHeader = request.headers.get("authorization");
  const authenticatedUserId = await verifyAuthToken(authHeader);
  if (!authenticatedUserId) {
    return NextResponse.json({ error: "Missing or invalid Authorization header" }, { status: 401, headers: CORS_HEADERS });
  }

  let body: ClaimByFingerprintRequest;
  try {
    body = (await request.json()) as ClaimByFingerprintRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400, headers: CORS_HEADERS });
  }

  if (body.deviceType && !isValidDeviceType(body.deviceType)) {
    return NextResponse.json({ success: false, message: "Invalid device type" } as ClaimByFingerprintResponse, { status: 400, headers: CORS_HEADERS });
  }

  if (body.iosMajorVersion && !isValidIOSVersion(body.iosMajorVersion)) {
    return NextResponse.json({ success: false, message: "Invalid iOS version" } as ClaimByFingerprintResponse, { status: 400, headers: CORS_HEADERS });
  }

  const rawIP = await getClientIPFromHeaders();
  const { ipv4, ipv6 } = parseClientIP(rawIP);

  if (!ipv4 && !ipv6) {
    return NextResponse.json({ success: false, message: "Unable to determine client IP" } as ClaimByFingerprintResponse, { status: 400, headers: CORS_HEADERS });
  }

  try {
    const db = getAdminDb();
    const now = Timestamp.now();

    let query = db
      .collection("invite_claims")
      .where("status", "==", "pending")
      .where("expiresAt", ">", now) as FirebaseFirestore.Query;

    if (ipv4) {
      query = query.where("redeemerIPv4", "==", ipv4);
    } else if (ipv6) {
      query = query.where("redeemerIPv6", "==", ipv6);
    }

    if (body.deviceType) {
      query = query.where("redeemerDeviceType", "==", body.deviceType);
    }

    const claimsSnapshot = await query.orderBy("expiresAt", "asc").orderBy("createdAt", "desc").limit(5).get();

    if (claimsSnapshot.empty) {
      const response: ClaimByFingerprintResponse = { success: false, message: "No matching invite found" };
      return NextResponse.json(response, { status: 404, headers: CORS_HEADERS });
    }

    let matchedClaim: FirebaseFirestore.QueryDocumentSnapshot | null = null;

    for (const doc of claimsSnapshot.docs) {
      const claimData = doc.data();
      if (claimData.inviterUserId === authenticatedUserId) {
        continue;
      }
      if (body.iosMajorVersion && claimData.redeemerIOSMajorVersion) {
        if (claimData.redeemerIOSMajorVersion !== body.iosMajorVersion) {
          continue;
        }
      }
      matchedClaim = doc;
      break;
    }

    if (!matchedClaim) {
      const response: ClaimByFingerprintResponse = { success: false, message: "No matching invite found for your device" };
      return NextResponse.json(response, { status: 404, headers: CORS_HEADERS });
    }

    const claimData = matchedClaim.data();

    await matchedClaim.ref.update({
      status: "redeemed",
      redeemedByUserId: authenticatedUserId,
      redeemedAt: FieldValue.serverTimestamp(),
    });

    console.log(`[INVITE] Claimed by fingerprint - Token: ${matchedClaim.id}, Redeemer: ${authenticatedUserId}, IPv4: ${ipv4}`);

    const response: ClaimByFingerprintResponse = {
      success: true,
      inviterUsername: claimData.inviterUsername,
      inviterUserId: claimData.inviterUserId,
      token: matchedClaim.id,
    };

    return NextResponse.json(response, { headers: CORS_HEADERS });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "unknown";
    console.error("[INVITE] Error claiming invite:", errorMessage);
    return NextResponse.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
}
