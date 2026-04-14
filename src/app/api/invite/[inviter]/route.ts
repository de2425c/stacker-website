import { NextRequest, NextResponse } from "next/server";
import { FieldValue, Timestamp } from "firebase-admin/firestore";
import { randomUUID } from "crypto";
import { getAdminDb } from "@/lib/firebase/admin";
import { getClientIPFromHeaders, parseClientIP } from "@/lib/invite/ip-utils";
import { parseUserAgent } from "@/lib/invite/user-agent";
import { buildInvitePage, buildNotFoundPage } from "@/lib/invite/template";
import { isValidUsername } from "@/lib/invite/validation";
import type { InviteClaim } from "@/lib/invite/types";

export async function GET(request: NextRequest, { params }: { params: Promise<{ inviter: string }> }): Promise<NextResponse> {
  const { inviter: inviterUsername } = await params;

  if (!inviterUsername || !inviterUsername.trim()) {
    return new NextResponse(buildNotFoundPage(), {
      status: 400,
      headers: { "Content-Type": "text/html" },
    });
  }

  const trimmedUsername = inviterUsername.trim();

  if (!isValidUsername(trimmedUsername)) {
    return new NextResponse(buildNotFoundPage(), {
      status: 400,
      headers: { "Content-Type": "text/html" },
    });
  }

  try {
    const db = getAdminDb();
    const token = randomUUID();

    const usersSnapshot = await db.collection("users").where("username", "==", trimmedUsername).limit(1).get();

    if (usersSnapshot.empty) {
      return new NextResponse(buildNotFoundPage(), {
        status: 404,
        headers: { "Content-Type": "text/html" },
      });
    }

    const inviterUserId = usersSnapshot.docs[0].id;

    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);

    const userAgent = request.headers.get("user-agent") ?? "";
    const { iosMajorVersion, deviceType } = parseUserAgent(userAgent);
    const rawIP = await getClientIPFromHeaders();
    const { ipv4, ipv6 } = parseClientIP(rawIP);

    const inviteClaim: InviteClaim = {
      token,
      inviterUsername: trimmedUsername,
      inviterUserId,
      source: "web",
      createdAt: FieldValue.serverTimestamp(),
      expiresAt: Timestamp.fromDate(expiresAt),
      status: "pending",
      redeemedByUserId: null,
      redeemedAt: null,
      redeemerIPv4: ipv4,
      redeemerIPv6: ipv6,
      redeemerUserAgent: userAgent || null,
      redeemerIOSMajorVersion: iosMajorVersion,
      redeemerDeviceType: deviceType,
    };

    await db.collection("invite_claims").doc(token).set(inviteClaim);
    console.log(`[INVITE] Created claim - Token: ${token}, Inviter: ${trimmedUsername}, IPv4: ${ipv4}, Device: ${deviceType}`);

    const title = "Join me on Stacker!";
    const description = "Your friend invited you to Stacker - the poker session tracking app.";
    const ogImageUrl = "https://stackpokertracker.com/images/og-invite.png";

    const html = buildInvitePage({ inviterUsername: trimmedUsername, token, title, description, ogImageUrl });

    return new NextResponse(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "unknown";
    console.error("[INVITE] Error creating invite claim:", errorMessage);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
