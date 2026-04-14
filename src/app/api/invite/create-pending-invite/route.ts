import { NextRequest, NextResponse } from "next/server";
import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { randomUUID } from "crypto";
import { getAdminDb } from "@/lib/firebase/admin";
import { verifyAuthToken } from "@/lib/invite/auth";
import { getCorsHeaders } from "@/lib/cors";
import type { PendingInvite } from "@/lib/invite/types";

export async function OPTIONS(request: NextRequest): Promise<NextResponse> {
  const CORS_HEADERS = getCorsHeaders(request.headers.get("origin"));
  return new NextResponse(null, { status: 200, headers: CORS_HEADERS });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const CORS_HEADERS = getCorsHeaders(request.headers.get("origin"));
  const authHeader = request.headers.get("authorization");
  const inviterUid = await verifyAuthToken(authHeader);
  if (!inviterUid) {
    return NextResponse.json({ error: "Missing or invalid Authorization header" }, { status: 401, headers: CORS_HEADERS });
  }

  try {
    const db = getAdminDb();
    const token = randomUUID();

    const userDoc = await db.collection("users").doc(inviterUid).get();
    if (!userDoc.exists) {
      return NextResponse.json({ error: "User not found" }, { status: 404, headers: CORS_HEADERS });
    }

    const inviterUsername: string | null = userDoc.data()?.username || null;

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    const pendingInvite: PendingInvite = {
      token,
      inviterUid,
      inviterUsername,
      createdAt: FieldValue.serverTimestamp(),
      expiresAt: Timestamp.fromDate(expiresAt),
      redeemed: false,
      redeemedBy: null,
      redeemedAt: null,
      source: "app",
    };

    await db.collection("pending_invites").doc(token).set(pendingInvite);

    return NextResponse.json({ success: true, token, inviterUid, inviterUsername }, { headers: CORS_HEADERS });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "unknown";
    console.error("[INVITE] Error creating pending invite:", errorMessage);
    return NextResponse.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
}
