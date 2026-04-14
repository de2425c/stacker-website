import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getAdminDb } from "@/lib/firebase/admin";
import { verifyAuthToken } from "@/lib/invite/auth";
import { getCorsHeaders } from "@/lib/cors";
import { isValidUUID } from "@/lib/invite/validation";
import type { ClaimLatestInviteRequest, ClaimLatestInviteResponse } from "@/lib/invite/types";

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

  let body: ClaimLatestInviteRequest;
  try {
    body = (await request.json()) as ClaimLatestInviteRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400, headers: CORS_HEADERS });
  }

  if (body.token && typeof body.token === "string" && !isValidUUID(body.token)) {
    return NextResponse.json({ success: false, message: "Invalid token format" } as ClaimLatestInviteResponse, { status: 400, headers: CORS_HEADERS });
  }

  try {
    const db = getAdminDb();

    let inviteDoc: FirebaseFirestore.QueryDocumentSnapshot | FirebaseFirestore.DocumentSnapshot;
    let inviteData: FirebaseFirestore.DocumentData;

    if (body.token && typeof body.token === "string") {
      const tokenDoc = await db.collection("pending_invites").doc(body.token).get();
      if (!tokenDoc.exists) {
        return NextResponse.json({ success: false, message: "Invalid invite token" } as ClaimLatestInviteResponse, { status: 404, headers: CORS_HEADERS });
      }
      const tokenData = tokenDoc.data();
      if (!tokenData || tokenData.redeemed) {
        return NextResponse.json({ success: false, message: "Invite already redeemed" } as ClaimLatestInviteResponse, { status: 400, headers: CORS_HEADERS });
      }
      inviteDoc = tokenDoc;
      inviteData = tokenData;
    } else {
      const invitesSnapshot = await db
        .collection("pending_invites")
        .where("redeemed", "==", false)
        .where("source", "==", "web")
        .orderBy("createdAt", "desc")
        .limit(1)
        .get();

      if (invitesSnapshot.empty) {
        return NextResponse.json({ success: false, message: "No pending invite found" } as ClaimLatestInviteResponse, { status: 404, headers: CORS_HEADERS });
      }
      inviteDoc = invitesSnapshot.docs[0];
      inviteData = inviteDoc.data();
    }

    if (inviteData.expiresAt && inviteData.expiresAt.toDate() < new Date()) {
      return NextResponse.json({ success: false, message: "Invite has expired" } as ClaimLatestInviteResponse, { status: 400, headers: CORS_HEADERS });
    }

    if (inviteData.inviterUid === authenticatedUserId) {
      return NextResponse.json({ success: false, message: "Cannot claim your own invite" } as ClaimLatestInviteResponse, { status: 400, headers: CORS_HEADERS });
    }

    await inviteDoc.ref.update({
      redeemed: true,
      redeemedBy: authenticatedUserId,
      redeemedAt: FieldValue.serverTimestamp(),
    });

    const response: ClaimLatestInviteResponse = {
      success: true,
      inviterUsername: inviteData.inviterUsername || inviteData.inviterId,
      inviterUid: inviteData.inviterUid || null,
      token: inviteDoc.id,
    };

    return NextResponse.json(response, { headers: CORS_HEADERS });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "unknown";
    console.error("[INVITE] Error claiming invite:", errorMessage);
    return NextResponse.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
}
