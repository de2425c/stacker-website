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
  "Track poker sessions, analyze 17+ performance metrics, manage your bankroll, and compete with friends. The session tracker built for serious players.";
const SITE_URL = "https://stackpokertracker.com";

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
    "poker session tracker",
    "poker bankroll",
    "poker analytics",
    "poker stats",
    "poker app",
    "session tracking",
    "bankroll management",
    "poker win rate",
    "poker hourly rate",
    "poker ROI",
    "poker leaderboard",
    "poker friends",
    "cash game tracker",
    "tournament tracker",
    "poker journal",
  ],
  authors: [{ name: "Stackflow Inc." }],
  creator: "Stackflow Inc.",
  publisher: "Stackflow Inc.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Poker Session Tracker`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    url: SITE_URL,
    images: [
      {
        url: "/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "Stacker - Poker Session Tracker",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} — Poker Session Tracker`,
    description: SITE_DESCRIPTION,
    images: ["/app-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Utilities",
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
