import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getAdminDb } from "@/lib/firebase/admin";
import { verifyAuthToken } from "@/lib/invite/auth";
import { getCorsHeaders } from "@/lib/cors";
import { isValidFirebaseUID } from "@/lib/invite/validation";
import type { RedeemInviteRequest, RedeemInviteResponse } from "@/lib/invite/types";

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

  let body: RedeemInviteRequest;
  try {
    body = (await request.json()) as RedeemInviteRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400, headers: CORS_HEADERS });
  }

  if (!body.inviterId || typeof body.inviterId !== "string") {
    return NextResponse.json({ error: "Missing inviterId" }, { status: 400, headers: CORS_HEADERS });
  }

  if (!isValidFirebaseUID(body.inviterId)) {
    return NextResponse.json({ error: "Invalid inviterId format" }, { status: 400, headers: CORS_HEADERS });
  }

  try {
    const db = getAdminDb();

    const inviterDoc = await db.collection("users").doc(body.inviterId).get();
    if (!inviterDoc.exists) {
      const response: RedeemInviteResponse = { success: false, message: "Inviter user not found" };
      return NextResponse.json(response, { status: 404, headers: CORS_HEADERS });
    }

    const existingRedemption = await db
      .collection("redeemed_invites")
      .where("userId", "==", authenticatedUserId)
      .limit(1)
      .get();

    if (!existingRedemption.empty) {
      const response: RedeemInviteResponse = { success: false, message: "User has already redeemed an invite" };
      return NextResponse.json(response, { status: 400, headers: CORS_HEADERS });
    }

    if (authenticatedUserId === body.inviterId) {
      const response: RedeemInviteResponse = { success: false, message: "Cannot redeem your own invite" };
      return NextResponse.json(response, { status: 400, headers: CORS_HEADERS });
    }

    await db.collection("redeemed_invites").add({
      userId: authenticatedUserId,
      inviterId: body.inviterId,
      redeemedAt: FieldValue.serverTimestamp(),
      source: "universal_link",
    });

    const response: RedeemInviteResponse = { success: true, inviterId: body.inviterId };
    return NextResponse.json(response, { headers: CORS_HEADERS });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "unknown";
    console.error("[INVITE] Error redeeming invite:", errorMessage);
    return NextResponse.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
}
