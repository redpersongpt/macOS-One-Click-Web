import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductProof from "@/components/ProductProof";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";
import PageBackdrop from "@/components/PageBackdrop";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "Review-first OpenCore planning for PC hardware, with validation, example reports, and explicit compatibility gates.",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "macOS OneClick",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Windows, Linux",
  description:
    "A hardware-aware OpenCore planning utility that generates review-first EFI notes and validation checkpoints before deployment.",
  author: {
    "@type": "Person",
    name: "Red Person",
  },
};

export default function Home() {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <PageBackdrop />
      <SiteHeader currentPath="/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <main id="content" className="relative min-h-screen">
        <Hero />
        <ProductProof />
        <Features />
        <Trust />
        <Footer />
      </main>
    </>
  );
}
