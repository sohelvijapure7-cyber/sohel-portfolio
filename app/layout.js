import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Sohel Amar Vijapure | Frontend Developer",
  description: "Frontend Developer specializing in modern business websites, React, Next.js, responsive design, technical SEO, performance optimization and premium user experiences.",
  keywords: ["Frontend Developer", "Web Developer", "Next.js", "React", "Portfolio", "Sohel Vijapure"],
  openGraph: {
    title: "Sohel Amar Vijapure | Frontend Developer",
    description: "Frontend Developer specializing in modern business websites, React, Next.js, responsive design, technical SEO, performance optimization and premium user experiences.",
    url: "https://sohelvijapure.com",
    siteName: "Sohel Vijapure Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohel Amar Vijapure | Frontend Developer",
    description: "Frontend Developer specializing in modern business websites, React, Next.js, responsive design, technical SEO, performance optimization and premium user experiences.",
  },
  alternates: {
    canonical: "https://sohelvijapure.com",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-obsidian text-foreground antialiased selection:bg-gold selection:text-obsidian overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
