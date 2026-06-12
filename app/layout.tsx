import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumeneth | UI components for your next project",
  description: "Lumeneth, components for your next project. Components, blocks, templates.",
  keywords: ["Desarrollador Web", "Frontend", "Portafolio", "Arturo Perotto", "Arturo Benicio Perotto", "Desarrollador Frontend"],
  creator: "Arturo Perotto",
  publisher: "Arturo Perotto",
  applicationName: "Lumeneth",
  openGraph: {
    title: "Lumeneth | UI components for your next project",
    description: "Lumeneth, components for your next project. Components, blocks, templates.",
    url: "https://lumene.vercel.app/",
    siteName: "Lumeneth",
    images: [
      {
        url: "https://arturoperotto.vercel.app/og/bg-og.jpg",
        alt: "Lumeneth | UI components for your next project",
      },
    ],
    locale: "us_EN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumeneth | UI components for your next project",
    description: "Lumeneth, components for your next project. Components, blocks, templates.",
    site: "@Lumeneth",
    images: [
      {
        url: "https://arturoperotto.vercel.app/og/bg-og.jpg",
        alt: "Lumeneth | UI components for your next project",
      },
    ],
  },
  icons: {
    icon: "/icon.png",
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
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
