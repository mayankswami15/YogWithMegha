import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://yogwithmegha.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YogWithMegha | Online Yoga Classes with Megha Swami",
    template: "%s | YogWithMegha",
  },
  description:
    "Join Megha Swami for personalized online yoga sessions. A BNYS student with 2+ years of teaching experience blending therapeutic yoga, traditional asana, and naturopathic wellness. Book a class today!",
  keywords: [
    "yoga classes online",
    "YogWithMegha",
    "Megha Swami yoga",
    "BNYS yoga",
    "therapeutic yoga",
    "naturopathic wellness",
    "traditional asana",
    "online yoga instructor",
    "holistic yoga",
    "yoga for beginners",
  ],
  authors: [{ name: "Megha Swami" }],
  creator: "Megha Swami",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "YogWithMegha",
    title: "YogWithMegha | Online Yoga Classes with Megha Swami",
    description:
      "Find Balance. Build Strength. Calm Your Mind. Join personalized online yoga sessions with Megha Swami — a BNYS student integrating naturopathy and yoga science.",
    images: [
      {
        url: "/megha.png",
        width: 800,
        height: 1000,
        alt: "Megha Swami — YogWithMegha Instructor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YogWithMegha | Online Yoga Classes",
    description:
      "Personalized online yoga sessions blending therapeutic yoga, traditional asana, and naturopathic wellness.",
    images: ["/megha.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
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
      className={`${inter.variable} ${poppins.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/megha.png" />
        <meta name="theme-color" content="#0F766E" />
      </head>
      <body className="flex flex-col font-sans relative" suppressHydrationWarning>{children}</body>
    </html>
  );
}
