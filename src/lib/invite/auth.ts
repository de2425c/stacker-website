import { getAuth } from "firebase-admin/auth";
import { getAdminApp } from "@/lib/firebase/admin";

export const verifyAuthToken = async (authHeader: string | null): Promise<string | null> => {
  if (!authHeader?.startsWith("Bearer ")) {
    return null;
  }
  try {
    getAdminApp();
    const idToken = authHeader.slice(7);
    const decodedToken = await getAuth().verifyIdToken(idToken);
    return decodedToken.uid;
  } catch (err) {
    console.error("[INVITE] Auth error:", err);
    return null;
  }
};
