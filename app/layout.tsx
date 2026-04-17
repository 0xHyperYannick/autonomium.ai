import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import ScrollGradientBackground from "@/components/ui/ScrollGradientBackground";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://autonomium.ai"),
  title: "Autonomium",
  description:
    "Build businesses that compound without you. Autonomy engineering for operators who refuse to be the bottleneck.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    siteName: "Autonomium",
    title: "Autonomium",
    description:
      "Build businesses that compound without you. Autonomy engineering for operators who refuse to be the bottleneck.",
    url: "https://autonomium.ai",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "Autonomium" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-ink overflow-x-hidden">
        <ScrollGradientBackground />
        {children}
      </body>
    </html>
  );
}
