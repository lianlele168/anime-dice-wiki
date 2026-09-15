import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://animedice.robloxwikihub.com"),
  title: {
    default: "Anime Dice Wiki & Calculator - Codes, Traits Tier List, Units & Chrono Dice",
    template: "%s | Anime Dice Wiki"
  },
  description: "Comprehensive guide for Anime Dice on Roblox. Interactive Luck & Odds Calculator, September 2026 Redeem Codes, 13 Traits Tier List, Units Database, Chrono Dice stats & Rebirth multipliers.",
  keywords: [
    "anime dice roblox",
    "anime dice codes",
    "anime dice traits tier list",
    "anime dice transcendent",
    "anime dice calculator",
    "anime dice chrono dice",
    "anime dice grades",
    "anime dice wiki"
  ],
  authors: [{ name: "Anime Dice Community Wiki Team" }],
  creator: "Roblox Wiki Hub Network",
  publisher: "Roblox Wiki Hub Network",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://animedice.robloxwikihub.com/",
    siteName: "Anime Dice Wiki",
    title: "Anime Dice Wiki - Interactive Luck Calculator, Codes & Traits Database",
    description: "The ultimate database for Anime Dice on Roblox. Simulate roll odds, copy active codes, compare S-Tier traits & build optimal gacha setups.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anime Dice Wiki - Roblox Codes, Simulator & Traits",
    description: "Interactive tools and verified data for Anime Dice: Luck odds simulator, active codes, 13 traits, and full units database.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://animedice.robloxwikihub.com/#website",
        "url": "https://animedice.robloxwikihub.com/",
        "name": "Anime Dice Wiki",
        "description": "The definitive interactive encyclopedia for Anime Dice on Roblox.",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebApplication",
        "@id": "https://animedice.robloxwikihub.com/#webapp",
        "name": "Anime Dice Luck & Odds Simulator",
        "url": "https://animedice.robloxwikihub.com/calculator/",
        "applicationCategory": "GameApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript. Requires HTML5."
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#070b19] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
