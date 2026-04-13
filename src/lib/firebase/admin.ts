import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let adminApp: App | undefined;

export const getAdminApp = (): App => {
  if (adminApp) return adminApp;

  const existingApps = getApps();
  if (existingApps.length > 0) {
    adminApp = existingApps[0];
    return adminApp;
  }

  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountKey) {
    throw new Error("FIREBASE_SERVICE_ACCOUNT_KEY not configured");
  }

  const serviceAccount = JSON.parse(serviceAccountKey);
  adminApp = initializeApp({
    credential: cert(serviceAccount),
  });

  return adminApp;
};

export const getAdminDb = (): Firestore => {
  getAdminApp();
  return getFirestore();
};
