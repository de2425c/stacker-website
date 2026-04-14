import type { FieldValue, Timestamp } from "firebase-admin/firestore";

export interface InviteClaim {
  token: string;
  inviterUsername: string;
  inviterUserId: string;
  source: "web" | "app";
  createdAt: FieldValue;
  expiresAt: Timestamp;
  status: "pending" | "redeemed" | "expired";
  redeemedByUserId: string | null;
  redeemedAt: FieldValue | null;
  redeemerIPv4: string | null;
  redeemerIPv6: string | null;
  redeemerUserAgent: string | null;
  redeemerIOSMajorVersion: string | null;
  redeemerDeviceType: string | null;
}

export interface PendingInvite {
  token: string;
  inviterUid: string;
  inviterUsername: string | null;
  createdAt: FieldValue;
  expiresAt: Timestamp;
  redeemed: boolean;
  redeemedBy: string | null;
  redeemedAt: FieldValue | null;
  source: "app" | "web";
}

export interface ClaimByFingerprintRequest {
  iosMajorVersion?: string;
  deviceType?: string;
}

export interface ClaimByFingerprintResponse {
  success: boolean;
  inviterUsername?: string;
  inviterUserId?: string;
  token?: string;
  message?: string;
}

export interface ClaimLatestInviteRequest {
  token?: string;
}

export interface ClaimLatestInviteResponse {
  success: boolean;
  inviterUsername?: string;
  inviterUid?: string | null;
  token?: string;
  message?: string;
}

export interface RedeemInviteRequest {
  inviterId: string;
}

export interface RedeemInviteResponse {
  success: boolean;
  inviterId?: string;
  message?: string;
}
