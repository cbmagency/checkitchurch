"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/site.config";
import { JoinButton } from "./Member";
import { has } from "./Blocks";

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
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  return (
    <header className="wrap nav">
      <Link href="/" aria-label={`${site.name} home`}>
        <Image src="/images/logo.png" alt={site.name} width={158} height={48} priority style={{ height: 48, width: "auto" }} />
      </Link>
      <button className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <nav className={`nav-links${open ? " open" : ""}`} aria-label="Main">
        {site.nav.map((l) =>
          l.href.startsWith("http") ? (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
          ) : (
            <Link key={l.href} href={l.href} className={path === l.href ? "on" : ""}>{l.label}</Link>
          )
        )}
        <JoinButton style={{ minHeight: 44 }} />
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="fclose">
          <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
            <Image src="/images/logo.png" alt={site.name} width={158} height={48} style={{ height: 56, width: "auto" }} />
            <p className="d" style={{ fontSize: "clamp(22px, 2.6vw, 34px)", letterSpacing: "-0.02em" }}>Until all see <span className="blue">His Kingdom.</span></p>
          </div>
          <div className="btns">
            <a className="pill" href={site.links.youtube} target="_blank" rel="noreferrer">Watch live</a>
            <JoinButton />
          </div>
        </div>
        <div className="cols">
          <div>
            <p className="colh">Pages</p>
            <div className="col">
              <Link href="/">Home</Link>
              {site.nav.filter((l) => !l.href.startsWith("http")).map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="colh">Connect</p>
            <div className="col">
              <Link href="/new-here#membership">Become a member</Link>
              <Link href="/about#prayer">Prayer request</Link>
              <a href={site.links.shop} target="_blank" rel="noreferrer">Shop</a>
              {has(site.links.appStore) && <Link href="/watch#app">Get the app</Link>}
            </div>
          </div>
          <div>
            <p className="colh">Socials</p>
            <div className="col">
              <a href={site.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a href={site.links.tiktok} target="_blank" rel="noreferrer">TikTok</a>
              <a href={site.links.youtube} target="_blank" rel="noreferrer">YouTube</a>
              {has(site.links.facebook) && <a href={site.links.facebook} target="_blank" rel="noreferrer">Facebook</a>}
            </div>
          </div>
          <div>
            <p className="colh">Contact</p>
            <div className="col">
              <a href={site.contact.phoneHref}>{site.contact.phone}</a>
              <a href={`mailto:${site.contact.email}`} style={{ textTransform: "none" }}>{site.contact.email}</a>
              {has(site.contact.whatsapp) && <span>WhatsApp: {site.contact.whatsapp}</span>}
            </div>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} {site.name} · {site.slogan}</p>
      </div>
    </footer>
  );
}
