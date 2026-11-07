import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = localFont({ src: "./fonts/inter-latin.woff2", display: "swap", weight: "100 900", variable: "--inter" });
const title = "Armaan Zeyad — Product Engineer";
const description = "I build and grow consumer apps. Selected work in mobile engineering, subscription experiments, and AI.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://armaan.codes"),
  title, description,
  openGraph: { title, description, type: "website", images: [{ url: "/portfolio-preview.png", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/portfolio-preview.png"] },
  icons: { icon: "/az.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        {process.env.VERCEL === "1" && <Analytics />}
      </body>
    </html>
  );
}
