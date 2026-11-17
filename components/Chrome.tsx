"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/site.config";
import { JoinButton } from "./Member";

export function Orbs() {
  return (
    <div className="orbs" aria-hidden="true">
      <span className="orb o1" />
      <span className="orb o2" />
      <span className="orb o3" />
    </div>
  );
}

export function Nav() {
  const path = usePathname();
  return (
    <header className="wrap nav">
      <Link href="/" aria-label={`${site.name} home`}>
        <Image src="/images/logo.png" alt={site.name} width={158} height={48} priority style={{ height: 48, width: "auto" }} />
      </Link>
      <nav className="nav-links" aria-label="Main">
        {site.nav.map((l) => (
          <Link key={l.href} href={l.href} className={path === l.href ? "on" : ""}>
            {l.label}
          </Link>
        ))}
        <JoinButton style={{ minHeight: 44 }} />
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div className="col">
            <span className="logo-tile">
              <Image src="/images/logo.png" alt={site.name} width={132} height={40} style={{ height: 40, width: "auto", display: "block" }} />
            </span>
            <p className="dim" style={{ marginTop: 8 }}>{site.slogan}</p>
          </div>
          <div className="col">
            <p className="label">Pages</p>
            <Link href="/">Home</Link>
            {site.nav.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
          </div>
          <div className="col">
            <p className="label">More</p>
            <Link href="/about#prayer">Prayer Request</Link>
            <a href={site.links.shop} target="_blank" rel="noreferrer">Shop the Collection</a>
            <Link href="/watch#app">Get the App</Link>
          </div>
          <div className="col">
            <p className="label">Contact</p>
            <a href={site.contact.phoneHref}>{site.contact.phone}</a>
            <span className="dim">WhatsApp: {site.contact.whatsapp}</span>
            <span className="dim">
              <a href={site.links.instagram} target="_blank" rel="noreferrer">Instagram</a> ·{" "}
              <a href={site.links.tiktok} target="_blank" rel="noreferrer">TikTok</a> ·{" "}
              <a href={site.links.youtube} target="_blank" rel="noreferrer">YouTube</a>
            </span>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
