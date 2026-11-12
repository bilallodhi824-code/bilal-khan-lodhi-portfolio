import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://bilallodhi.dev"),
  alternates: {
    canonical: "/",
  },
  title: "Muhammad Bilal Khan Lodhi — Senior Full-Stack & Next.js Architect",
  description:
    "Professional portfolio of Muhammad Bilal Khan Lodhi (BK), Senior Full-Stack & Next.js Architect based in Karachi. Meta Certified Front-End Developer with 20+ production systems, React 19, TypeScript, and verified 100/100 Core Web Vitals.",
  keywords: [
    "Muhammad Bilal Khan Lodhi",
    "Bilal Khan",
    "BK Architecture",
    "Next.js Architect",
    "Senior Full Stack Developer",
    "Meta Certified Front End Developer",
    "Karachi Software Engineer",
    "React 19",
    "Next.js 15 App Router",
    "TypeScript",
    "Tailwind CSS",
    "ApexLuxe",
    "NexusCloud AI",
    "Green Life",
  ],
  authors: [{ name: "Muhammad Bilal Khan Lodhi", url: "https://github.com/bilallodhi824-code" }],
  creator: "Muhammad Bilal Khan Lodhi",
  openGraph: {
    title: "Muhammad Bilal Khan Lodhi — Senior Full-Stack & Next.js Architect",
    description:
      "Senior Full-Stack & Next.js Architect with 6+ years shipping high-performance production platforms, Meta Certified Front-End mastery, and 100/100 Core Web Vitals.",
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Bilal Khan Lodhi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bilal Khan Lodhi — Senior Full-Stack & Next.js Architect",
    description:
      "Senior Full-Stack & Next.js Architect with 6+ years shipping high-performance production platforms.",
    creator: "@bilallodhi",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#0C0D12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Bilal Khan Lodhi",
    jobTitle: "Senior Full-Stack & Next.js Architect",
    telephone: "+923001129959",
    email: "bilallodhi824@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malir Cantt, Karachi",
      addressCountry: "Pakistan",
    },
    url: "https://bilallodhi.dev",
    sameAs: [
      "https://github.com/bilallodhi824-code",
      "https://linkedin.com/in/bilallodhi",
      "https://x.com/bilallodhi",
      "https://facebook.com/bilallodhi",
    ],
    knowsAbout: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Flutter",
      "WebSockets",
      "Docker",
      "Core Web Vitals",
      "Meta Front-End Developer",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-ink font-sans text-zinc-100 antialiased selection:bg-burgundy selection:text-white">
        {children}
      </body>
    </html>
  );
}
