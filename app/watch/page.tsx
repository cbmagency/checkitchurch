import type { Metadata } from "next";
import { site } from "@/site.config";
import { Photo, PhotoCard, PlayIcon, ServiceCards, VideoTile } from "@/components/Blocks";

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
          <div className="btns"><a className="pill p-red" href={site.links.youtube} target="_blank" rel="noreferrer">YouTube Channel</a><a className="pill p-out" href="#app">Get the App</a></div>
        </div>
        <a href={site.links.youtube} target="_blank" rel="noreferrer" aria-label="Watch live" style={{ position: "relative", display: "block" }}>
          <Photo src="/images/preach.jpg" ratio="r-video" pos="45% 35%" priority sizes="100vw" />
          <span style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, zIndex: 2, color: "#fff" }}>
            <PlayIcon size={96} />
            <span className="d" style={{ fontSize: 13 }}>Live stream plays here</span>
          </span>
        </a>
      </section>

      {/* SCHEDULE */}
      <section className="wrap section">
        <h2 className="d d-lg" style={{ marginBottom: 24 }}>When we&apos;re live.</h2>
        <ServiceCards />
      </section>

      {/* SERIES */}
      <section id="sermons" className="wrap section">
        <div className="head">
          <div><h2 className="d d-lg">Catch up on<br /><span className="red">a series.</span></h2><p className="lead" style={{ marginTop: 14 }}>Every message lives on our YouTube channel.</p></div>
          <a className="pill p-navy" href={site.links.youtube} target="_blank" rel="noreferrer">All Past Sermons</a>
        </div>
        <div className="grid g4">
          {site.series.map((s) => <PhotoCard key={s.name} src={s.image} pos={s.pos} label="Series" title={s.name} href={site.links.youtube} cta="Watch" minHeight={380} />)}
        </div>
      </section>

      {/* CHECK IT KIDS */}
      <section id="kids" className="wrap section">
        <div className="head">
          <div><p className="label blue">Check It Kids</p><h2 className="d d-lg">Kids lessons.</h2><p className="lead" style={{ marginTop: 14 }}>Sunday children&apos;s church, ready to watch together at home.</p></div>
          <a className="pill p-navy" href={site.links.kidsChannel} target="_blank" rel="noreferrer">Check It Kids Channel</a>
        </div>
        <div className="grid g3">
          <VideoTile src="/images/kidsdance.jpg" href={site.links.kidsChannel} title="This Sunday's lesson" />
          <VideoTile src="/images/family.jpg" pos="48% 85%" href={site.links.kidsChannel} title="Last week" />
          <VideoTile src="/images/highfive.jpg" pos="50% 30%" href={site.links.kidsChannel} title="Two weeks ago" />
        </div>
      </section>

      {/* APP */}
      <section id="app" className="wrap section">
        <div className="member">
          <div className="pad">
            <p className="label" style={{ color: "rgba(255,255,255,.65)" }}>The Check It App</p>
            <h2 className="d d-lg">Take church<br /><span style={{ color: "#FF6B76" }}>in your pocket.</span></h2>
            <p style={{ margin: "16px 0 24px", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.88)" }}>Live services, past messages and Times of Refreshing, wherever you are.</p>
            <div className="btns"><a className="pill p-white" href={site.links.appStore}>App Store</a><a className="pill p-ghost" href={site.links.googlePlay}>Google Play</a></div>
          </div>
          <div style={{ position: "relative", minHeight: 320 }}>
            <Photo src="/images/joy.jpg" pos="50% 25%" style={{ position: "absolute", inset: 0, aspectRatio: "auto", borderRadius: 0 }} />
          </div>
        </div>
      </section>
    </>
  );
}
