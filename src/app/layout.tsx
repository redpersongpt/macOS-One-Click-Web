import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "OpCore-OneClick | Review-first OpenCore planning",
    template: "%s | OpCore-OneClick",
  },
  description:
    "OpCore-OneClick audits PC hardware, builds a review-first OpenCore plan, and keeps every kext, patch, and risk gate visible before anything writes to disk.",
  applicationName: "OpCore-OneClick",
  keywords: [
    "OpCore-OneClick",
    "OpenCore",
    "Hackintosh",
    "macOS installer",
    "EFI generator",
    "hardware compatibility",
  ],
  authors: [{ name: "Red Person" }],
  creator: "Red Person",
  publisher: "Red Person",
  category: "technology",
  ...(metadataBase ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    title: "OpCore-OneClick",
    description:
      "Review hardware, build an OpenCore plan, and verify blockers before any EFI work starts.",
    siteName: "OpCore-OneClick",
    locale: "en_US",
    type: "website",
    ...(metadataBase
      ? {
          url: "/",
          images: [
            {
              url: "/opcore-oneclick-social.png",
              width: 1200,
              height: 630,
              alt: "OpCore-OneClick social preview card",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    creator: "@redpersongpt",
    title: "OpCore-OneClick",
    description:
      "Hardware-aware OpenCore planning with validation, readable reports, and explicit risk gates.",
    ...(metadataBase
      ? {
          images: ["/opcore-oneclick-social.png"],
        }
      : {}),
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body className="bg-[var(--background)] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
