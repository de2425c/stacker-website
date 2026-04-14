import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_NAME = "Stacker";
const SITE_DESCRIPTION =
  "Track your poker sessions, analyze your performance, and improve your game with Stacker.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0F1114",
};

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Poker Session Tracker`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "poker tracker",
    "poker session",
    "bankroll tracking",
    "poker stats",
    "poker app",
    "session tracking",
  ],
  authors: [{ name: "Stackflow Inc." }],
  creator: "Stackflow Inc.",
  publisher: "Stackflow Inc.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://stackpokertracker.com",
  ),
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Poker Session Tracker`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} — Poker Session Tracker`,
    description: SITE_DESCRIPTION,
  },
  other: {
    "apple-itunes-app": "app-id=com.stackerpokertracker.stacker",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${inter.className} ${inter.variable} bg-[#0F1114] antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
