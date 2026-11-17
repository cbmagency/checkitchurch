import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/site.config";

type Ratio = "r-wide" | "r-video" | "r-land" | "r-port";

export function Photo({ src, alt = "", ratio = "r-port", pos = "50% 40%", priority, sizes = "(max-width: 768px) 100vw, 50vw", style }: {
  src: string; alt?: string; ratio?: Ratio; pos?: string; priority?: boolean; sizes?: string; style?: React.CSSProperties;
}) {
  return (
    <div className={`frame ${ratio}`} style={style}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={85} style={{ objectPosition: pos }} />
    </div>
  );
}

/** Inner-page header: same treatment as Home. Solid type on paper, one wide photo below. */
export function PageHero({ src, pos = "50% 40%", label, title, sub, children }: {
  src: string; pos?: string; label: string; title: ReactNode; sub: string; children?: ReactNode;
}) {
  return (
    <section className="wrap phead">
      <div className="head" style={{ marginBottom: 0 }}>
        <div>
          <p className="label red">{label}</p>
          <h1 className="d d-xl">{title}</h1>
        </div>
        <div style={{ maxWidth: 420 }}>
          <p className="lead">{sub}</p>
          {children && <div className="btns" style={{ marginTop: 18 }}>{children}</div>}
        </div>
      </div>
      <div className="frame r-wide drift" style={{ marginTop: "clamp(28px, 4vw, 48px)" }}>
        <Image src={src} alt="" fill priority quality={85} sizes="(max-width: 1280px) 100vw, 1232px" style={{ objectPosition: pos }} />
      </div>
    </section>
  );
}

/** True when a config value is real (not empty, "#", or a [placeholder]). Unfilled items hide themselves. */
export const has = (v?: string) => !!v && v !== "#" && !v.includes("[");

export function ServiceCards() {
  return (
    <div className="grid services">
      {site.services.map((s) => (
        <Link key={s.name} href="/watch" className="card service">
          <span className="d when" style={{ color: "featured" in s && s.featured ? "var(--primary)" : "var(--ink)" }}>
            {s.day} · {s.time}
          </span>
          <span className="d d-sm">{s.name}</span>
          <span className="where">{s.where}</span>
        </Link>
      ))}
    </div>
  );
}

export function PhotoCard({ src, pos = "50% 40%", label, title, href, cta, minHeight }: {
  src: string; pos?: string; label: string; title: ReactNode; href: string; cta: string; minHeight?: number;
}) {
  const external = href.startsWith("http");
  const inner = (
    <>
      <Image src={src} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectPosition: pos }} />
      <span style={{ fontSize: 14, fontWeight: 600 }}>{label}</span>
      <span className="d" style={{ fontSize: 26, lineHeight: 1.05 }}>{title}</span>
      <span className="d" style={{ marginTop: 8, fontSize: 12, letterSpacing: ".06em" }}>{cta} →</span>
    </>
  );
  return external ? (
    <a className="photo-card" href={href} target="_blank" rel="noreferrer" style={{ minHeight }}>{inner}</a>
  ) : (
    <Link className="photo-card" href={href} style={{ minHeight }}>{inner}</Link>
  );
}

export function Faq({ items, openFirst = true }: { items: [string, string][]; openFirst?: boolean }) {
  return (
    <div>
      {items.map(([q, a], i) => (
        <details key={q} open={openFirst && i === 0}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}

export function PlayIcon({ size = 78 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" aria-hidden="true">
      <circle cx="40" cy="40" r="39" fill="var(--primary)" />
      <path d="M33 27 L55 40 L33 53 Z" fill="#fff" />
    </svg>
  );
}

export function VideoTile({ src, pos, href, title, ratio = "r-video" }: { src: string; pos?: string; href: string; title?: string; ratio?: Ratio }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" style={{ display: "block", textDecoration: "none" }} aria-label={title ? `Play ${title}` : "Play video"}>
      <div style={{ position: "relative" }}>
        <Photo src={src} pos={pos} ratio={ratio} />
        <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}><PlayIcon size={64} /></span>
      </div>
      {title && <span className="d" style={{ display: "block", marginTop: 12, fontSize: 16 }}>{title}</span>}
    </a>
  );
}

export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const ytUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;

/** Echo-style row of recent sermons, pulled from site.sermons (YouTube ids). */
export function SermonGrid({ count = 4 }: { count?: number }) {
  return (
    <div className="sermons">
      {site.sermons.slice(0, count).map((s) => (
        <a key={s.id} className="sermon" href={ytUrl(s.id)} target="_blank" rel="noreferrer">
          <div className="frame r-video">
            <Image src={ytThumb(s.id)} alt="" fill sizes="(max-width: 768px) 100vw, 25vw" />
            <span className="play"><PlayIcon size={44} /></span>
          </div>
          <span className="tag">{s.tag}</span>
          <span className="t">{s.title}</span>
        </a>
      ))}
    </div>
  );
}
