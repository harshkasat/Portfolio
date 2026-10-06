import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { PostHogProvider } from "./providers";
import { RESUME_DATA } from "@/data/resume-data";

import "./globals.css";
import React from "react";

const SITE_URL = "https://whoisharsh.space";
const AVATAR_URL = "/pfp-image.png";
const TITLE = `${RESUME_DATA.name} | Infra & Backend Engineer at Freebuff (YC F24)`;
const DESCRIPTION =
  "Harsh Kasat builds sandbox infrastructure for AI coding agents at Freebuff (YC F24): Daytona and E2B fleets, Convex backends, Bun/TypeScript runner services. Ex-founding engineer at vly.ai. Remote from India.";
const KEYWORDS = [
  "Harsh Kasat",
  "Software Engineer",
  "Infrastructure Engineer",
  "Backend Engineer",
  "Freebuff",
  "Codebuff",
  "vly.ai",
  "Y Combinator",
  "AI coding agents",
  "Sandbox infrastructure",
  "Daytona",
  "E2B",
  "Convex",
  "Bun",
  "TypeScript",
  "Python",
  "Go",
  "FastAPI",
  "Django",
  "BullMQ",
  "Redis",
  "Docker",
  "Vercel",
  "Render",
  "Claude Code",
  "MCP",
  "LangChain",
  "SymPy contributor",
  "Remote developer India",
  "Surat",
  "Portfolio",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${RESUME_DATA.name}`,
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: RESUME_DATA.name, url: SITE_URL }],
  creator: RESUME_DATA.name,
  applicationName: `${RESUME_DATA.name} Portfolio`,
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: `${RESUME_DATA.name} Portfolio`,
    images: [{ url: AVATAR_URL, width: 512, height: 512, alt: RESUME_DATA.name }],
    firstName: "Harsh",
    lastName: "Kasat",
    username: "harshkasat",
  },
  twitter: {
    card: "summary",
    site: "@harsh__kasat",
    creator: "@harsh__kasat",
    title: TITLE,
    description: DESCRIPTION,
    images: [AVATAR_URL],
  },
  icons: { icon: "/favicon.ico" },
  appleWebApp: {
    capable: true,
    title: `${RESUME_DATA.name} Portfolio`,
    statusBarStyle: "black-translucent",
  },
  other: {
    "theme-color": "#18181b",
    "msapplication-TileColor": "#18181b",
  },
};

const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RESUME_DATA.name,
    url: SITE_URL,
    image: `${SITE_URL}${AVATAR_URL}`,
    sameAs: RESUME_DATA.contact.social.map((s) => s.url),
    email: `mailto:${RESUME_DATA.contact.email}`,
    jobTitle: "Software Engineer, Infrastructure",
    worksFor: {
      "@type": "Organization",
      name: "Freebuff",
      url: "https://freebuff.com/",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: RESUME_DATA.education[0].school,
    },
    knowsAbout: [
      "Sandbox infrastructure",
      "Daytona",
      "E2B",
      "Convex",
      "TypeScript",
      "Bun",
      "Python",
      "AI coding agents",
    ],
    description: DESCRIPTION,
    address: { "@type": "PostalAddress", addressCountry: "IN" },
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: SITE_URL,
    name: TITLE,
    description: DESCRIPTION,
    author: { "@type": "Person", name: RESUME_DATA.name },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange={false}
          >
            <div className="bg-background text-foreground">{children}</div>
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
