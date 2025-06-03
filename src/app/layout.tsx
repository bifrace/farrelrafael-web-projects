import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Secure Projects - Farrel Rafael",
  description: "Projects Web Aman dan Modern oleh Farrel Rafael.",
  openGraph: {
    title: "Secure WEB Projects - Farrel Rafael",
    description: "Projects web pribadi dengan keamanan dan desain terbaik.",
    url: "https://farrelrafael-web-projects.vercel.app",
    siteName: "FarrelRafael Portofolio",
    images: [
      {
        url: "./images/Og-title.png", // Ganti dengan nama gambar preview kamu
        width: 1200,
        height: 630,
        alt: "Secure Portofolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Portofolio - Farrel Rafael",
    description: "Portofolio web pribadi oleh Farrel Rafael.",
    images: ["/og-image.png"],
  },
};

// ✅ Tambahkan fungsi layout sebagai default export
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
