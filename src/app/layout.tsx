import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "@/resources/custom.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { home } from "@/resources/content";
import { baseURL } from "@/resources/site";

const bodyFont = Inter({ subsets: ["latin"], display: "swap", variable: "--font-body" });
const headingFont = EB_Garamond({ subsets: ["latin"], display: "swap", variable: "--font-heading" });

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: home.title,
  description: home.description,
  alternates: { canonical: "/" },
  openGraph: { title: home.title, description: home.description, url: baseURL, type: "website" },
  twitter: { card: "summary_large_image", title: home.title, description: home.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        <Header />
        <main id="main-content" className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
