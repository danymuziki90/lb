import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import ThemeProvider from "@/components/layout/ThemeProvider";
import { LanguageProvider } from "@/components/layout/LanguageProvider";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F172A" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lindajbauma.com"),
  title: {
    default:
      "Linda J. Bauma | Conseillère Stratégique et Diplomatique",
    template: "%s | Linda J. Bauma",
  },
  description:
    "Conseillère stratégique et diplomatique, experte en diplomatie publique, communication de crise, gouvernance, égalité de genre et localisation de l'aide humanitaire en Afrique centrale et au Sahel.",
  keywords: [
    "Linda J. Bauma",
    "diplomatie publique",
    "communication de crise",
    "gouvernance",
    "égalité de genre",
    "droits humains",
    "aide humanitaire",
    "Afrique centrale",
    "Sahel",
    "RDC",
    "conseil stratégique",
    "leadership féminin",
  ],
  authors: [{ name: "Linda J. Bauma" }],
  creator: "Linda J. Bauma",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lindajbauma.com",
    siteName: "Linda J. Bauma",
    title: "Linda J. Bauma | Conseillère Stratégique et Diplomatique",
    description:
      "Experte internationale en diplomatie publique, communication de crise, gouvernance et localisation de l'aide humanitaire.",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Linda J. Bauma - Conseillère Stratégique et Diplomatique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linda J. Bauma | Conseillère Stratégique et Diplomatique",
    description:
      "Experte en diplomatie publique, gouvernance et action humanitaire en Afrique centrale et au Sahel.",
    images: ["/images/og-image.svg"],
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
  alternates: {
    canonical: "https://lindajbauma.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <JsonLd />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
