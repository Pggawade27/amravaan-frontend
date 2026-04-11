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

export const metadata = {
  metadataBase: new URL("https://amravaan.in"),
  title: {
    default: "Amravaan | Buy Premium Devgad Alphonso Mangoes Online – Farm Fresh Hapus Delivered",
    template: "%s | Amravaan",
  },
  description:
    "Buy authentic GI-Tagged Devgad Alphonso (Hapus) mangoes online at Amravaan. Naturally ripened, chemical-free mangoes sourced directly from Konkan farms. Delivered to your doorstep within 24–48 hours across India.",
  keywords: [
    "Devgad Alphonso mangoes",
    "buy Alphonso mangoes online",
    "Hapus mangoes",
    "GI-tagged mangoes",
    "Amravaan",
    "Devgad mangoes",
    "naturally ripened mangoes",
    "Konkan mangoes",
    "organic Alphonso mangoes",
    "farm fresh mangoes India",
    "mango delivery India",
    "Devgad Hapus online",
    "chemical-free mangoes",
  ],
  authors: [{ name: "Amravaan", url: "https://amravaan.in" }],
  creator: "Amravaan",
  publisher: "Amravaan",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://amravaan.in",
    siteName: "Amravaan",
    title: "Amravaan | Premium Devgad Alphonso Mangoes – Farm Fresh Hapus Delivered",
    description:
      "Buy authentic GI-Tagged Devgad Alphonso (Hapus) mangoes online. Naturally ripened, chemical-free, sourced directly from Konkan farms. Delivered in 24–48 hours.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amravaan – Premium Devgad Alphonso Mangoes from Konkan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amravaan | Premium Devgad Alphonso Mangoes",
    description:
      "Buy authentic GI-Tagged Devgad Alphonso (Hapus) mangoes online. Farm-fresh, naturally ripened, chemical-free, delivered in 24–48 hours.",
    images: ["/assets/og-image.jpg"],
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
    canonical: "https://amravaan.in",
  },
  category: "food",
  icons: {
    icon: [
      { url: "/assets/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/assets/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/assets/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/assets/favicon/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
