import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sadia Ferdous | Backend & AI Engineer",
  description: "Computer Science student at NYIT specializing in AI and backend engineering. Building REST APIs, AI-integrated pipelines, and scalable systems. Seeking 2027 internships in backend & AI engineering.",
  keywords: ["Sadia Ferdous", "Backend Engineer", "AI Engineer", "Computer Science", "NYIT", "Python", "Java", "Flask", "REST API", "Machine Learning", "Portfolio"],
  authors: [{ name: "Sadia Ferdous" }],
  creator: "Sadia Ferdous",
  openGraph: {
    title: "Sadia Ferdous | Backend & AI Engineer",
    description: "Computer Science student at NYIT specializing in AI and backend engineering. Building REST APIs, AI-integrated pipelines, and scalable systems.",
    url: "https://sadia-f.github.io/sadia-portfolio",
    siteName: "Sadia Ferdous Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sadia Ferdous | Backend & AI Engineer",
    description: "Computer Science student at NYIT specializing in AI and backend engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
  metadataBase: new URL("https://sadia-f.github.io/sadia-portfolio"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sadia Ferdous",
    email: "mailto:sadiaferdous003@gmail.com",
    url: "https://sadia-f.github.io/sadia-portfolio",
    jobTitle: "Backend & AI Engineer Intern",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "New York Institute of Technology"
    },
    knowsAbout: ["Backend Development", "Artificial Intelligence", "REST APIs", "Python", "Java", "Flask", "MongoDB", "PostgreSQL"],
    sameAs: [
      "https://github.com/Sadia-F",
      "https://www.linkedin.com/in/sadiaaferdous"
    ]
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(t===null&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-cream dark:bg-deep-slate text-dark-brown dark:text-cream transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}