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
  title: "ProjuktiSoft | Learn Today, Lead Tomorrow — Software Development Studio",
  description:
    "ProjuktiSoft is a full-stack software development studio run by a MERN stack developer in Assam, India. Creators of DailyAxom. Building high-performance web apps, EdTech platforms, and custom digital products.",
  keywords: [
    "ProjuktiSoft",
    "MERN Developer",
    "DailyAxom",
    "Software Studio Assam",
    "EdTech Assam",
    "Full Stack Web App Development",
    "React Node.js Developer",
    "Kokrajhar Developer",
  ],
  authors: [{ name: "Khurshid Alom", url: "https://projuktisoft.com" }],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "ProjuktiSoft — Learn Today, Lead Tomorrow",
    description:
      "Full-stack software development studio creating high-performance web apps, EdTech products like DailyAxom, and custom business tools.",
    url: "https://projuktisoft.com",
    siteName: "ProjuktiSoft",
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#fafafa] text-slate-900 selection:bg-[#37B37F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
