import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuralConnexions — The AI that helps you truly connect",
  description:
    "NeuralConnexions is your cognitive companion — understanding how you communicate and guiding you toward deeper, more meaningful relationships.",
  openGraph: {
    title: "NeuralConnexions — The AI that helps you truly connect",
    description:
      "NeuralConnexions is your cognitive companion — understanding how you communicate and guiding you toward deeper, more meaningful relationships.",
    type: "website",
    locale: "en_GB",
    siteName: "NeuralConnexions",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralConnexions — The AI that helps you truly connect",
    description:
      "Your cognitive companion for deeper, more meaningful relationships.",
  },
  themeColor: "#8CA3B0",
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
