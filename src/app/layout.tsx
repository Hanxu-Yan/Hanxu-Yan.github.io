import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "@/resources/custom.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { home } from "@/resources/content";
import { baseURL } from "@/resources/site";

const bodyFont = Inter({ subsets: ["latin"], style: ["normal", "italic"], display: "swap", variable: "--font-body" });
const headingFont = EB_Garamond({ subsets: ["latin"], style: ["normal", "italic"], display: "swap", variable: "--font-heading" });

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: home.title,
  description: home.description,
  alternates: { canonical: "/" },
  icons: { icon: "/icon.png" },
  openGraph: { title: home.title, description: home.description, url: baseURL, type: "website", images: [{ url: "/opengraph.png", width: 1200, height: 630, alt: "Hanxu Yan — Academic Homepage" }] },
  twitter: { card: "summary_large_image", title: home.title, description: home.description, images: ["/opengraph.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body>
        <div className="App">
          <Header />
          <main id="main-content" className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
