import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";
import { JoinButton } from "@/components/Member";
import { Photo, PlayIcon, SermonGrid, ServiceCards, ytThumb, ytUrl } from "@/components/Blocks";

// Gallery strip: every photo here appears nowhere else on this page.
const gallery: [string, string, string][] = [
  ["/images/women5.jpg", "Women of Check It", "50% 35%"],
  ["/images/street.jpg", "Outreach on the block", "50% 50%"],
  ["/images/family.jpg", "The Check It family", "50% 50%"],
  ["/images/balloons.jpg", "Community day", "50% 40%"],
  ["/images/highfive.jpg", "Convention 2024", "50% 30%"],
  ["/images/team.jpg", "The serve team", "50% 35%"],
];

export default function Home() {
  const latest = site.sermons[0];
  return (
    <>
      {/* HERO: type-led, photos set inside the words */}
      <section className="wrap hero">
        <h1 className="d">
          <span className="ln">Until<span className="inl frame drift"><Image src="/images/worship.jpg" alt="The Check It congregation in worship" fill priority sizes="260px" style={{ objectPosition: "50% 45%" }} /></span>all</span>
          <span className="ln"><span className="inl tall frame drift"><Image src="/images/arms.jpg" alt="A member worshipping with arms raised" fill sizes="160px" style={{ objectPosition: "28% 20%" }} /></span>see His</span>
          <span className="ln blue">Kingdom.</span>
        </h1>

        <a className="latest" href={ytUrl(latest.id)} target="_blank" rel="noreferrer">
          <p className="d" style={{ fontSize: 22, letterSpacing: "-0.03em" }}>Latest message</p>
          <span className="pill" style={{ minHeight: 34, fontSize: 13 }}>Watch now</span>
          <div className="frame r-video" style={{ marginTop: 8 }}>
            <Image src={ytThumb(latest.id)} alt="" fill sizes="340px" />
            <span style={{ position: "absolute", left: 12, bottom: 12, zIndex: 2 }}><PlayIcon size={44} /></span>
          </div>
          <p style={{ marginTop: 10, fontSize: 14, fontWeight: 600 }}>{latest.title}</p>
        </a>

        <div className="bar">
          <Link className="pill" href="/new-here">New here</Link>
          <Link className="pill" href="/watch">Watch live</Link>
          <JoinButton className="pill">Become a member</JoinButton>
          <Link className="pill" href="/give">Give</Link>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="wrap section">
        <div className="rule reveal" style={{ maxWidth: 1000 }}>
          <h2 className="d d-statement">Check It exists to <span className="blue">proclaim the Kingdom of God</span> through the Word, worship and <span className="blue">miracles.</span></h2>
          <div style={{ marginTop: 28 }}><Link className="pill" href="/about">More about Check It</Link></div>
        </div>
      </section>

      {/* GALLERY STRIP: slow drift, pauses on hover */}
      <div className="marquee" aria-label="Photos from the Check It family">
        <div className="track">
          {[...gallery, ...gallery].map(([src, alt, pos], i) => (
            <Photo key={i} src={src} alt={i < gallery.length ? alt : ""} pos={pos} sizes="300px" />
          ))}
        </div>
      </div>

      {/* OUR FAMILY */}
      <section className="wrap section">
        <h2 className="d d-xl center reveal" style={{ marginBottom: "clamp(32px, 5vw, 64px)" }}>Our <span className="blue">Family.</span></h2>
        <div className="family">
          <div className="side">
            <h3 className="d d-md">Community</h3>
            <p className="lead">Different islands. Different cities. One house. Prayer partners, sisters, brothers and a church that shows up for you.</p>
            <ul><li>Prayer every week</li><li>Outreach days</li><li>Women &amp; men of faith</li></ul>
            <JoinButton className="pill">Become a member</JoinButton>
          </div>

          <div className="collage" aria-hidden="true">
            <svg viewBox="0 0 120 60" style={{ left: "-6%", top: "6%", width: "26%" }}><path d="M4 40 C 20 6, 34 6, 34 30 S 52 58, 60 30 S 84 0, 92 28 S 110 50, 116 20" stroke="var(--primary)" strokeWidth="6" fill="none" strokeLinecap="round" /></svg>
            <svg viewBox="0 0 100 100" style={{ right: "-4%", top: "-2%", width: "18%" }}><path d="M50 8 L58 40 L92 50 L58 60 L50 92 L42 60 L8 50 L42 40 Z" fill="var(--secondary)" /></svg>
            <svg viewBox="0 0 140 40" style={{ right: "4%", bottom: "-6%", width: "30%" }}><path d="M4 20 L20 6 L36 34 L52 6 L68 34 L84 6 L100 34 L116 6 L136 22" stroke="var(--ink)" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <div className="cut c1"><Image src="/images/cut_joy.png" alt="" width={900} height={626} sizes="420px" /></div>
            <div className="cut c2"><Image src="/images/cut_solo.png" alt="" width={541} height={900} sizes="220px" /></div>
            <div className="cut c3"><Image src="/images/cut_kids.png" alt="" width={558} height={900} sizes="200px" /></div>
          </div>

          <div className="side">
            <h3 className="d d-md">Kids &amp; <span className="blue">Youth</span></h3>
            <p className="lead">Little hearts, big faith. Kids worship, play and learn the Bible in a way they&apos;ll remember.</p>
            <ul><li>Bible, made fun</li><li>Big worship</li><li>Lessons on the Kids Channel</li></ul>
            <a className="pill" href={site.links.kidsChannel} target="_blank" rel="noreferrer">Check It Kids Channel</a>
          </div>
        </div>
      </section>

      {/* SERVICE TIMES */}
      <section className="wrap section">
        <div className="head reveal">
          <h2 className="d d-lg">His presence.<br /><span className="blue">His Kingdom.</span></h2>
          <p className="lead" style={{ maxWidth: 420 }}>Real worship. Real miracles. Live every week. All times {site.contact.timezone}.</p>
        </div>
        <ServiceCards />
      </section>

      {/* RECENT SERMONS */}
      <section className="wrap section">
        <div className="head">
          <h2 className="d d-lg">Watch recent<br /><span className="blue">sermons.</span></h2>
          <a className="pill" href={site.links.youtube} target="_blank" rel="noreferrer">All sermons</a>
        </div>
        <SermonGrid count={4} />
      </section>

      {/* MEMBERSHIP */}
      <section className="wrap section">
        <div className="member">
          <div className="pad">
            <p className="label" style={{ color: "rgba(255,255,255,.65)" }}>Membership</p>
            <h2 className="d d-lg">Make it<br /><span className="outline">official.</span></h2>
            <p style={{ marginTop: 18, maxWidth: 460, fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.86)" }}>
              For everyone genuinely committed to the ministry and connecting with us online, week after week.
            </p>
            <div className="btns" style={{ marginTop: 28 }}>
              <JoinButton className="pill p-white">Register as a member</JoinButton>
              <Link className="pill p-ghost" href="/new-here#membership">Membership FAQ</Link>
            </div>
          </div>
          <div className="pad steps">
            {site.membershipSteps.map((s, i) => (
              <div className="step" key={s.title}>
                <span className="d n">{i + 1}</span>
                <span><span className="d" style={{ display: "block", fontSize: 18 }}>{s.title}</span><p>{s.text}</p></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PASTORS */}
      <section className="wrap section">
        <div className="grid g2">
          <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            {site.pastors.map((p) => (
              <div key={p.name}>
                <Photo src={p.image} alt={p.name} pos={p.pos} />
                <p className="d" style={{ marginTop: 14, fontSize: 15 }}>{p.name}</p>
                <p style={{ marginTop: 4, fontSize: 13, color: "var(--soft)" }}>{p.title}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="label">Our Pastors</p>
            <h2 className="d d-lg">Led with<br /><span className="blue">fire and love.</span></h2>
            <p className="lead" style={{ margin: "18px 0 26px", maxWidth: 460 }}>
              Pastor Isaac and Minister Juna have given their lives to spreading God&apos;s Word, worship and miracles, guiding thousands toward victorious, purposeful lives.
            </p>
            <Link className="pill" href="/about">Meet our pastors</Link>
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section className="wrap section">
        <div className="head">
          <div><p className="label">CHECKITCMSHOP</p><h2 className="d d-lg">Wear the<br /><span className="blue">Word.</span></h2></div>
          <a className="pill" href={site.links.shop} target="_blank" rel="noreferrer">Shop checkitcmshop.org</a>
        </div>
        <div className="grid g4">
          {[1, 2, 3, 4].map((i) => <div key={i} className="tbd r-port">Product photo {i}<br />from CHECKITCMSHOP</div>)}
        </div>
      </section>

      {/* GIVE */}
      <section className="wrap section">
        <div className="card" style={{ padding: 40, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <div>
            <h2 className="d d-md">Sow into<br /><span className="blue">the Kingdom.</span></h2>
            <p className="body" style={{ marginTop: 12 }}>Online, Zelle, Cash App, PayPal or by phone at {site.contact.phone}.</p>
          </div>
          <Link className="pill" href="/give">Give now</Link>
        </div>
      </section>
    </>
  );
}
