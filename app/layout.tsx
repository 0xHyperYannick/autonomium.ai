import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import ScrollGradientBackground from "@/components/ui/ScrollGradientBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Autonomium",
  description:
    "Build businesses that compound without you. Autonomy engineering for operators who refuse to be the bottleneck.",
  icons: {
    icon: "/favicon.png",
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
