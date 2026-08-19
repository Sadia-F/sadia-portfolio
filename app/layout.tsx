import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sadia Ferdous | Portfolio",
  description: "Computer Science student at NYIT specializing in AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream dark:bg-deep-slate text-dark-brown dark:text-cream transition-colors">
        {children}
      </body>
    </html>
  );
}