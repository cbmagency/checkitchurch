import type { Metadata } from "next";
import { site } from "@/site.config";
import { has, Photo, PlayIcon, SermonGrid, ServiceCards, VideoTile } from "@/components/Blocks";

export const metadata: Metadata = { title: "Watch", description: "Watch Check It Church live, catch up on past sermons and Check It Kids lessons." };

export default function Watch() {
  return (
    <>
      {/* LIVE */}
      <section className="wrap" style={{ paddingTop: 32 }}>
        <div className="head">
          <div>
            <p className="label red">● Next live: Sunday 10 AM {site.contact.timezone}</p>
            <h1 className="d d-xl">Church goes<br />where you go.</h1>
          </div>
          <div className="btns"><a className="pill" href={site.links.youtube} target="_blank" rel="noreferrer">YouTube Channel</a>{has(site.links.appStore) && <a className="pill" href="#app">Get the App</a>}</div>
        </div>
        <a href={site.links.youtube} target="_blank" rel="noreferrer" aria-label="Watch live" style={{ position: "relative", display: "block" }}>
          <Photo src="/images/preach.jpg" ratio="r-wide" pos="45% 35%" priority sizes="100vw" />
          <span style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, zIndex: 2, color: "#fff" }}>
            <PlayIcon size={96} />
            <span className="d" style={{ fontSize: 13 }}>Watch on YouTube</span>
          </span>
        </a>
      </section>

      {/* SCHEDULE */}
      <section className="wrap section">
        <h2 className="d d-lg" style={{ marginBottom: 24 }}>When we&apos;re live.</h2>
        <ServiceCards />
      </section>

      {/* RECENT SERMONS */}
      <section id="sermons" className="wrap section">
        <div className="head">
          <div><h2 className="d d-lg">Recent live<br /><span className="blue">services.</span></h2><p className="lead" style={{ marginTop: 14 }}>Every service, streamed live. Catch up on anything you missed.</p></div>
          <a className="pill" href={site.links.streams} target="_blank" rel="noreferrer">All live services</a>
        </div>
        <SermonGrid count={8} />
      </section>

      {/* CHECK IT KIDS */}
      <section id="kids" className="wrap section">
        <div className="head">
          <div><p className="label blue">Check It Kids</p><h2 className="d d-lg">Kids lessons.</h2><p className="lead" style={{ marginTop: 14 }}>Sunday children&apos;s church, ready to watch together at home.</p></div>
          <a className="pill" href={site.links.kidsChannel} target="_blank" rel="noreferrer">Check It Kids Channel</a>
        </div>
        <div className="kids grid g2">
          <VideoTile src="/images/kidsdance.jpg" pos="50% 30%" href={site.links.kidsChannel} title="Watch on the Kids Channel" />
          <div className="card" style={{ padding: 32 }}>
            <p className="d d-sm">Made for <span className="blue">little ones.</span></p>
            <p className="body" style={{ marginTop: 10 }}>Bible stories, worship and lessons made for kids, ready to watch together at home.</p>
          </div>
        </div>
      </section>

      {/* APP: only when real store links are set */}
      {(has(site.links.appStore) || has(site.links.googlePlay)) && (
        <>
      {/* APP */}
      <section id="app" className="wrap section">
        <div className="member">
          <div className="pad">
            <p className="label" style={{ color: "rgba(255,255,255,.65)" }}>The Check It App</p>
            <h2 className="d d-lg">Take church<br /><span className="outline">in your pocket.</span></h2>
            <p style={{ margin: "16px 0 24px", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.88)" }}>Live services, past messages and Times of Refreshing, wherever you are.</p>
            <div className="btns"><a className="pill" href={site.links.appStore}>App Store</a><a className="pill p-ghost" href={site.links.googlePlay}>Google Play</a></div>
          </div>
          <div style={{ position: "relative", minHeight: 320 }}>
            <Photo src="/images/street.jpg" pos="50% 50%" style={{ position: "absolute", inset: 0, aspectRatio: "auto", borderRadius: 0 }} />
          </div>
        </div>
      </section>
        </>
      )}
    </>
  );
}
