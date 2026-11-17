import Image from "next/image";
import Link from "next/link";
import { site } from "@/site.config";
import { JoinButton } from "@/components/Member";
import { Photo, PlayIcon, ServiceCards } from "@/components/Blocks";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="wrap hero">
        <div className="shot s1 frame drift r-land"><Image src="/images/worship.jpg" alt="The Check It congregation in worship" fill priority sizes="430px" /></div>
        <div className="shot s2 frame drift r-port"><Image src="/images/arms.jpg" alt="A member worshipping with arms raised" fill sizes="290px" style={{ objectPosition: "50% 25%" }} /></div>
        <h1 className="d d-hero" style={{ paddingTop: "clamp(40px, 8vw, 120px)" }}>Until all<br />see His<br /><span className="red">Kingdom.</span></h1>
        <div className="side" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 32, marginTop: 40 }}>
          <div className="btns">
            <Link className="pill" href="/new-here">Plan your visit</Link>
            <Link className="pill" href="/watch">Watch online</Link>
            <JoinButton className="pill">Become a member</JoinButton>
          </div>
          <a href={site.links.youtube} target="_blank" rel="noreferrer" style={{ width: "min(360px, 100%)", textDecoration: "none" }}>
            <p className="d red" style={{ fontSize: 26, letterSpacing: "-0.03em" }}>Latest message</p>
            <span className="pill" style={{ minHeight: 36, fontSize: 14 }}>Watch now ↗</span>
            <div style={{ position: "relative", marginTop: 10 }}>
              <Photo src="/images/preach.jpg" ratio="r-video" pos="45% 30%" sizes="360px" />
              <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}><PlayIcon size={56} /></span>
            </div>
          </a>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="wrap section">
        <div className="rule reveal" style={{ maxWidth: 1000 }}>
          <h2 className="d d-statement">Check It exists to <span className="red">proclaim the Kingdom of God</span> through the Word, worship and <span className="red">miracles.</span></h2>
          <div style={{ marginTop: 28 }}><Link className="pill" href="/about">More about Check It</Link></div>
        </div>
      </section>

      {/* SERVICE TIMES */}
      <section className="wrap section">
        <div className="head reveal">
          <h2 className="d d-lg">His presence.<br /><span className="red">His Kingdom.</span></h2>
          <p className="lead" style={{ maxWidth: 420 }}>Real worship. Real miracles. A seat with your name on it. All times {site.contact.timezone}.</p>
        </div>
        <ServiceCards />
      </section>

      {/* LIFE */}
      <section className="wrap section">
        <h2 className="d d-lg reveal" style={{ marginBottom: 28 }}>Life at <span className="red">Check It.</span></h2>
        <div className="grid g4">
          <Photo src="/images/family.jpg" alt="The Check It family together" pos="50% 50%" />
          <Photo src="/images/hug.jpg" alt="Members embracing" />
          <Photo src="/images/arms.jpg" alt="A member worshipping" pos="50% 25%" />
          <Photo src="/images/highfive.jpg" alt="Members celebrating" pos="50% 30%" />
        </div>
      </section>

      {/* CHECK IT KIDS */}
      <section className="kids" aria-labelledby="kids">
        <svg className="ribbons" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-40 420 C 260 180, 520 600, 820 360 S 1300 120, 1500 300" stroke="var(--secondary)" strokeWidth="46" fill="none" strokeLinecap="round" opacity=".9" />
          <path d="M-60 520 C 300 360, 700 640, 1040 470 S 1380 380, 1520 520" stroke="#111111" strokeWidth="34" fill="none" strokeLinecap="round" opacity=".85" />
          <path d="M120 120 C 360 40, 520 220, 760 150" stroke="#8FB0FF" strokeWidth="26" fill="none" strokeLinecap="round" opacity=".7" />
        </svg>
        <div className="wrap" style={{ position: "relative" }}>
          <div className="grid g2">
            <div style={{ position: "relative" }}>
              <Photo src="/images/kidsdance.jpg" alt="A volunteer dancing with a child" ratio="r-land" pos="50% 30%" style={{ border: "6px solid #fff", boxShadow: "0 20px 50px rgba(17,17,17,.18)" }} />
              <div className="sticker"><span className="d" style={{ display: "block", fontSize: 15, color: "var(--primary)" }}>Check It</span><span className="d blue" style={{ display: "block", fontSize: 34 }}>Kids</span></div>
            </div>
            <div className="card" style={{ padding: 36 }}>
              <p className="label blue">Children&apos;s Ministry</p>
              <h2 id="kids" className="d d-lg">Check It<br /><span className="blue">Kids</span></h2>
              <p className="lead" style={{ margin: "16px 0 22px" }}>Little hearts, big faith. Every Sunday, kids worship, play and learn the Bible in a way they&apos;ll remember.</p>
              <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginBottom: 24 }}>
                <div className="chip b"><span className="d blue" style={{ fontSize: 13 }}>Bible, made fun</span><p className="body" style={{ marginTop: 6, fontSize: 14 }}>Stories, crafts and games.</p></div>
                <div className="chip r"><span className="d" style={{ fontSize: 13 }}>Real friends</span><p className="body" style={{ marginTop: 6, fontSize: 14 }}>A crew that feels like family.</p></div>
                <div className="chip b"><span className="d blue" style={{ fontSize: 13 }}>Big worship</span><p className="body" style={{ marginTop: 6, fontSize: 14 }}>Singing, dancing, celebrating.</p></div>
              </div>
              <a className="pill p-navy" href={site.links.kidsChannel} target="_blank" rel="noreferrer">Watch the Check It Kids Channel</a>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="wrap section">
        <div className="member">
          <div className="pad">
            <p className="label" style={{ color: "rgba(255,255,255,.65)" }}>Membership</p>
            <h2 className="d d-lg">Make it<br /><span style={{ color: "#A9B4FF" }}>home.</span></h2>
            <p style={{ marginTop: 18, maxWidth: 440, fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.86)" }}>
              Membership is how you go from visiting to belonging. You&apos;re covered in prayer, connected to a church family, and invited to serve what God is building here.
            </p>
            <div className="btns" style={{ marginTop: 28 }}>
              <JoinButton className="pill p-white">Start My Membership</JoinButton>
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
            <h2 className="d d-lg">Led with<br /><span className="red">fire and love.</span></h2>
            <p className="lead" style={{ margin: "18px 0 26px", maxWidth: 460 }}>
              Pastor Isaac and Minister Juna have given their lives to spreading God&apos;s Word, worship and miracles, guiding thousands toward victorious, purposeful lives.
            </p>
            <Link className="pill p-out" href="/about">Meet Our Pastors</Link>
          </div>
        </div>
      </section>

      {/* WATCH */}
      <section className="wrap section">
        <div className="grid g2">
          <a href={site.links.youtube} target="_blank" rel="noreferrer" aria-label="Play the latest message" style={{ position: "relative", display: "block" }}>
            <Photo src="/images/preach.jpg" ratio="r-video" pos="45% 30%" />
            <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}><PlayIcon /></span>
          </a>
          <div>
            <p className="label">Latest message</p>
            <h2 className="d d-lg">Church goes<br />where you go.</h2>
            <p className="lead" style={{ margin: "18px 0 26px", maxWidth: 420 }}>Every service live. Every message on YouTube. Or take it with you on the Check It app.</p>
            <div className="btns"><Link className="pill p-red" href="/watch">Watch Live</Link><a className="pill p-out" href={site.links.youtube} target="_blank" rel="noreferrer">Past Sermons</a></div>
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section className="wrap section">
        <div className="head">
          <div><p className="label">Check It Shop</p><h2 className="d d-lg">Fashion rooted<br /><span className="red">in faith.</span></h2></div>
          <a className="pill p-navy" href={site.links.shop} target="_blank" rel="noreferrer">Shop the Collection</a>
        </div>
        <div className="grid g4">
          {[1, 2, 3, 4].map((i) => <div key={i} className="tbd r-port">Product photo {i}<br />from Check It Shop</div>)}
        </div>
      </section>

      {/* GIVE */}
      <section className="wrap section">
        <div className="card" style={{ padding: 40, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <div>
            <h2 className="d d-md">Sow into<br /><span className="red">the Kingdom.</span></h2>
            <p className="body" style={{ marginTop: 12 }}>Online, Zelle, Cash App, PayPal or by phone at {site.contact.phone}.</p>
          </div>
          <Link className="pill p-red" href="/give">Give Now</Link>
        </div>
      </section>
    </>
  );
}
