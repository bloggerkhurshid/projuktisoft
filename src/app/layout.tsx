import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsentBanner from "@/components/CookieConsentBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#37B37F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://projuktisoft.com"),
  title: {
    default: "ProjuktiSoft | Software Development Studio in Assam — Learn Today, Lead Tomorrow",
    template: "%s | ProjuktiSoft",
  },
  description:
    "ProjuktiSoft is an independent software development studio run by a full-stack MERN developer in Kokrajhar, Assam. Creators of DailyAxom (5,000+ exam-prep learners). We build high-performance web applications, EdTech platforms, and custom digital tools.",
  keywords: [
    "ProjuktiSoft",
    "ProjuktiSoft Assam",
    "Software Studio Assam",
    "MERN Stack Developer Assam",
    "DailyAxom",
    "DailyAxom Exam Prep",
    "EdTech Assam",
    "Kokrajhar Software Developer",
    "Full Stack Web Development",
    "React Node.js Developer India",
    "Custom Web App Studio",
    "Unpaid Internship Content Writer Assam",
    "Junior Developer Intern Assam",
  ],
  authors: [{ name: "Khurshid Alom", url: "https://projuktisoft.com" }],
  creator: "ProjuktiSoft Studio",
  publisher: "ProjuktiSoft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
    canonical: "/",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "ProjuktiSoft — Software Development Studio | Creators of DailyAxom",
    description:
      "Independent software development studio engineering production-ready web apps, bilingual EdTech products, and business tools in Assam, India. Tagline: Learn Today, Lead Tomorrow.",
    url: "https://projuktisoft.com",
    siteName: "ProjuktiSoft",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 800,
        alt: "ProjuktiSoft Official Logo Emblem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProjuktiSoft — Software Development Studio",
    description:
      "Full-stack software studio engineering high-performance web applications and EdTech products like DailyAxom.",
    images: ["/logo.svg"],
    creator: "@projuktisoft",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Schema.org JSON-LD Data for Search Engines
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ProjuktiSoft",
    url: "https://projuktisoft.com",
    logo: "https://projuktisoft.com/logo.svg",
    slogan: "Learn Today, Lead Tomorrow.",
    description:
      "Software development studio specializing in MERN stack web applications, EdTech products (DailyAxom), and custom business tools in Assam, India.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kokrajhar",
      addressRegion: "Assam",
      postalCode: "783370",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7002820458",
      contactType: "customer service",
      email: "contact@projuktisoft.com",
      areaServed: "IN",
      availableLanguage: ["English", "Assamese"],
    },
    sameAs: [
      "https://github.com/bloggerkhurshid/projuktisoft",
      "https://dailyaxom.in",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fafafa] text-slate-900 selection:bg-[#37B37F] selection:text-white">
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
