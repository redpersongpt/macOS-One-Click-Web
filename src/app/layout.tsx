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
    default: "macOS OneClick | EFI built for the hardware you actually have",
    template: "%s | macOS OneClick",
  },
  description:
    "Audit your PC hardware, generate a validated OpenCore plan, and review every kext, patch, and risk gate before anything writes to disk.",
  applicationName: "macOS OneClick",
  keywords: [
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
    title: "macOS OneClick",
    description:
      "Generate an OpenCore deployment plan that explains itself before anything touches your disk.",
    siteName: "macOS OneClick",
    locale: "en_US",
    type: "website",
    ...(metadataBase ? { url: "/" } : {}),
  },
  twitter: {
    card: "summary_large_image",
    creator: "@redpersongpt",
    title: "macOS OneClick",
    description:
      "Hardware-aware OpenCore planning with validation, reports, and explicit risk gates.",
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
