import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  metadataBase: new URL("https://homelesschildandwidowfoundation.org"),
  title: {
    default: "Homeless Child & Widows Foundation | Mombasa, Kenya",
    template: "%s | Homeless Child & Widows Foundation",
  },
  description: "Rescuing Homeless Children & Empowering Widows in Kenya. We provide shelter, education, sustainable support, and run the Maweni Rescue Home.",
  keywords: ["Homeless Children Kenya", "Widows Empowerment", "Maweni Rescue Home", "NGO Mombasa", "Charity Kenya", "Donate M-PESA"],
  authors: [{ name: "Homeless Child & Widows Foundation" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://homelesschildandwidowfoundation.org",
    title: "Homeless Child & Widows Foundation",
    description: "Rescuing Homeless Children & Empowering Widows in Kenya.",
    siteName: "Homeless Child & Widows Foundation",
    images: [
      {
        url: "/assets/home.jpeg", // Make sure this image is at least 1200x630px
        width: 1200,
        height: 630,
        alt: "Children at the Maweni Rescue Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homeless Child & Widows Foundation",
    description: "Rescuing Homeless Children & Empowering Widows in Kenya.",
    images: ["/assets/home.jpeg"],
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// JSON-LD Structured Data for NGO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "Homeless Child & Widows Foundation",
  "url": "https://homelesschildandwidowfoundation.org",
  "logo": "https://homelesschildandwidowfoundation.org/assets/logo.jpeg",
  "description": "Rescuing Homeless Children & Empowering Widows in Kenya. We provide shelter, education, and sustainable support.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kongowea Maweni, Behind Sineno Primary School",
    "addressLocality": "Mombasa",
    "addressCountry": "KE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254712555336",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100050152284174",
    "https://www.youtube.com/@kongoweapalmtreeorphanscar1157"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} antialiased font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
