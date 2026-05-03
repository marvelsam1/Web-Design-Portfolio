import type { Metadata } from "next";
import { Inter, Work_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
});

export const metadata: Metadata = {
  title:
    "Marvellous | Premium Web Design, SEO & Full-Stack Development Services",
  description:
    "Expert web design and full-stack development services. I build high-converting, SEO-optimized websites, scalable web applications, and premium UI/UX experiences that drive business growth.",
  keywords: [
    "Web Design Services",
    "Full-Stack Development",
    "UI/UX Design",
    "Freelance Web Designer",
    "Shopify Developer",
    "Wix Developer",
    "Webflow Developer",
    "WordPress Expert",
    "React Developer",
    "Next.js Developer",
    "Conversion SEO",
    "Custom Web Applications",
  ],
  authors: [{ name: "Marvellous" }],
  openGraph: {
    title:
      "Marvellous | Premium Web Design, SEO & Full-Stack Development Services",
    description:
      "I build easy-to-use websites that turn visitors into paying customers. No complexity, no confusion, just results.",
    type: "website",
    locale: "en_US",
    siteName: "Marvellous Abiola",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marvellous | Premium Web Design Services",
    description:
      "Expert web design and full-stack development services that turn visitors into loyal customers.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://marvellousabiola.com"), // Update this with your actual live domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${workSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
