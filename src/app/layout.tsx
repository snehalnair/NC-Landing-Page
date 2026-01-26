import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuralConnexions | The World's First Cognitive Companion",
  description:
    "AI that understands human connection — guiding you from first contact to lifelong growth. Find • Nurture • Sustain",
  keywords: [
    "AI",
    "relationship AI",
    "cognitive companion",
    "emotional intelligence",
    "human connection",
    "digital twin",
    "NeuralConnexions",
    "communication",
    "couples therapy",
    "relationship wellness",
  ],
  authors: [{ name: "NeuralConnexions" }],
  creator: "NeuralConnexions",
  publisher: "NeuralConnexions",
  openGraph: {
    title: "NeuralConnexions | The World's First Cognitive Companion",
    description:
      "AI that understands human connection — guiding you from first contact to lifelong growth.",
    type: "website",
    locale: "en_GB",
    siteName: "NeuralConnexions",
    url: "https://neuralconnexions.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralConnexions | The World's First Cognitive Companion",
    description:
      "AI that understands human connection — guiding you from first contact to lifelong growth.",
    creator: "@neuralconnexions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#8CA3B0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
