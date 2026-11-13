import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} | ${profile.headline}`;
const description =
  "Android Team Lead with 8+ years building Kotlin, Jetpack Compose and Compose Multiplatform apps used by 15M+ people in banking, payments, retail and healthcare.";

// Public address of the site, used to build absolute URLs for link previews.
const siteUrl = "https://aminshabani94.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title,
  description,
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "/",
    title,
    description,
    siteName: profile.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${profile.name}, ${profile.headline}` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#161826",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}${profile.portrait ?? ""}`,
  jobTitle: profile.headline,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["Android", "Kotlin", "Jetpack Compose", "Compose Multiplatform", "Kotlin Multiplatform", "NFC payments", "Mobile architecture"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Yazd University" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
