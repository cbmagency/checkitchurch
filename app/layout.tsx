import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/site.config";
import { MemberProvider } from "@/components/Member";
import { Footer, Nav, Orbs } from "@/components/Chrome";

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const alt = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-alt", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.shortName}` },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: { title: site.name, description: site.description, images: ["/images/worship.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const t = site.theme;
  return (
    <html lang="en" className={`${body.variable} ${alt.variable}`}>
      <body style={{ ["--ink" as string]: t.ink, ["--primary" as string]: t.primary, ["--secondary" as string]: t.secondary, ["--bg" as string]: t.bg }}>
        <MemberProvider>
          <Orbs />
          <div className="page">
            <Nav />
            <main>{children}</main>
            <Footer />
          </div>
        </MemberProvider>
      </body>
    </html>
  );
}
