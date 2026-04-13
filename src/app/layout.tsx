import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Ember Studios — Igniting Digital Innovation",
  description:
    "We build cutting-edge web and mobile applications, seamless API integrations, and powerful AI solutions that transform businesses.",
  keywords: ["web development", "mobile apps", "AI solutions", "API integration", "digital agency", "Laravel", "Flutter", "React Native"],
  authors: [{ name: "Ember Studios" }],
  openGraph: {
    title: "Ember Studios — Igniting Digital Innovation",
    description: "Cutting-edge web, mobile, and AI solutions that transform businesses.",
    url: "https://ember-studios.com",
    siteName: "Ember Studios",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember Studios — Igniting Digital Innovation",
    description: "Cutting-edge web, mobile, and AI solutions that transform businesses.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
