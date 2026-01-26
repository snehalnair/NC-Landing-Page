import type { Metadata } from "next";
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
  ],
  authors: [{ name: "NeuralConnexions" }],
  openGraph: {
    title: "NeuralConnexions | The World's First Cognitive Companion",
    description:
      "AI that understands human connection — guiding you from first contact to lifelong growth.",
    type: "website",
    locale: "en_GB",
    siteName: "NeuralConnexions",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralConnexions | The World's First Cognitive Companion",
    description:
      "AI that understands human connection — guiding you from first contact to lifelong growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
