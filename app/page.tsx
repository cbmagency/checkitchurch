import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";
import { JoinButton } from "@/components/Member";
import { PlayIcon, SermonGrid, ytThumb, ytUrl } from "@/components/Blocks";

export default function Home() {
  const latest = site.sermons[0];
  return (
    <>
      {/* HERO: clean editorial grid */}
      <section className="wrap hero">
        <div className="top">
          <div>
            <h1 className="d">Until all<br />see His<br /><span className="blue">Kingdom.</span></h1>
            <div className="bar">
              <Link className="pill" href="/new-here">New here</Link>
              <Link className="pill" href="/watch">Watch live</Link>
              <JoinButton className="pill">Become a member</JoinButton>
            </div>
          </div>
          <a className="latest" href={ytUrl(latest.id)} target="_blank" rel="noreferrer">
            <div className="row">
              <span className="d blue" style={{ fontSize: 22, letterSpacing: "-0.02em" }}>Latest message</span>
              <span className="pill" style={{ minHeight: 30, fontSize: 13 }}>Watch now ↗</span>
            </div>
            <div className="frame r-video">
              <Image src={ytThumb(latest.id)} alt="" fill quality={85} sizes="(max-width: 760px) 100vw, 420px" />
              <span style={{ position: "absolute", left: 12, bottom: 12, zIndex: 2 }}><PlayIcon size={48} /></span>
            </div>
            <p className="t">{latest.title}</p>
          </a>
        </div>
        <div className="wide frame r-wide drift">
          <Image src="/images/worship.jpg" alt="The Check It family in worship" fill priority quality={85} sizes="(max-width: 1280px) 100vw, 1232px" style={{ objectPosition: "50% 45%" }} />
        </div>
      </section>

      {/* STATEMENT */}
      <section className="wrap section">
        <div className="rule reveal" style={{ maxWidth: 1000 }}>
          <h2 className="d d-statement">Check It exists to <span className="blue">proclaim the Kingdom of God</span> through the Word, worship and <span className="blue">miracles.</span></h2>
          <div style={{ marginTop: 28 }}><Link className="pill" href="/about">More about Check It</Link></div>
        </div>
      </section>

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
            <svg viewBox="0 0 100 100" style={{ right: "-4%", top: "-2%", width: "18%" }}><path d="M50 8 L58 40 L92 50 L58 60 L50 92 L42 60 L8 50 L42 40 Z" fill="var(--primary)" /></svg>
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

    </>
  );
}
