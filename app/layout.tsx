import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "Homeless Child & Widows Foundation | Mombasa, Kenya",
  description: "Rescuing Homeless Children & Empowering Widows in Kenya. We provide shelter, education, and sustainable support to break cycles of poverty.",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: "Homeless Child & Widows Foundation",
    description: "Rescuing Homeless Children & Empowering Widows in Kenya. Support our mission today.",
    url: "https://homelesschildandwidowfoundation.netlify.app", // Update this when you get a custom domain
    siteName: "Homeless Child & Widows Foundation",
    images: [
      {
        url: "/assets/home.jpeg",
        width: 1200,
        height: 630,
        alt: "Children at Maweni Rescue Home",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
