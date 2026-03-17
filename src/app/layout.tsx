import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "macOS OneClick | Professional Deployment Tool",
  description: "The professional choice for macOS deployment. Engineered for experts, refined by the community.",
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
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
