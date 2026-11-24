import type { Metadata } from "next";
import { site } from "@/site.config";
import { JoinButton } from "@/components/Member";
import { Faq, has, PageHero, Photo, ServiceCards } from "@/components/Blocks";

export const metadata: Metadata = { title: "New Here", description: "New to Check It Church? How to join us live online, service times, kids and membership." };

export default function NewHere() {
  return (
    <>
      <PageHero src="/images/groupred.jpg" pos="50% 55%" label="New Here" title={<>First time?<br /><span className="blue">Welcome home.</span></>} sub="Wherever you are, there's a place for you. Here's how to join us live.">
        <a className="pill" href="#visit">Join us live</a>
        <a className="pill" href="#membership">Become a member</a>
      </PageHero>

      {/* STEPS */}
      <section className="wrap section">
        <h2 className="d d-lg" style={{ marginBottom: 28 }}>Your first Sunday,<br /><span className="blue">from anywhere.</span></h2>
        <div className="grid g3">
          {[
            ["01", "Tune in.", "Sundays at 10 AM on YouTube or Facebook. Join a few minutes early.", "/images/hug.jpg", "50% 40%"],
            ["02", "Say hi.", "Drop your name and where you're watching from in the chat. We see you.", "/images/highfive.jpg", "50% 30%"],
            ["03", "Encounter God.", "Worship, the Word and prayer. Then make it official and register as a member.", "/images/preach.jpg", "45% 30%"],
          ].map(([n, t, d, img, pos]) => (
            <div key={n}>
              <Photo src={img} pos={pos} ratio="r-land" />
              <p className="d" style={{ marginTop: 18, fontSize: 22 }}><span className="blue">{n}</span> {t}</p>
              <p className="body" style={{ marginTop: 8 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="wrap section">
        <div className="card" style={{ padding: "clamp(22px, 3vw, 36px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "end", gap: 24 }}>
          <div style={{ maxWidth: 560 }}>
            <p className="label red" style={{ margin: "0 0 10px" }}>Join us live</p>
            <h2 className="d d-md">Sundays · 10 AM</h2>
            <p className="body" style={{ marginTop: 12 }}>Every service streams live. Bring your Bible, your family and your expectation. All times {site.contact.timezone}.</p>
          </div>
          <div className="btns"><a className="pill" href={site.links.youtube} target="_blank" rel="noreferrer">YouTube</a>{has(site.links.facebook) && <a className="pill" href={site.links.facebook} target="_blank" rel="noreferrer">Facebook</a>}</div>
        </div>
        <h2 className="d d-md" style={{ margin: "clamp(40px, 5vw, 64px) 0 20px" }}>Every <span className="blue">week.</span></h2>
        <ServiceCards />
      </section>

      {/* KIDS */}
      <section id="kids" className="wrap section">
        <div className="grid g2">
          <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <Photo src="/images/convention.jpg" alt="Check It family at Convention 2024" pos="50% 40%" />
            <Photo src="/images/balloons.jpg" alt="Community day with the Check It family" pos="40% 40%" />
          </div>
          <div>
            <p className="label blue">Check It Kids</p>
            <h2 className="d d-lg">Little hearts.<br /><span className="blue">Big faith.</span></h2>
            <p className="lead" style={{ margin: "18px 0 24px", maxWidth: 440 }}>Bible stories, worship and lessons made for kids, ready to watch together at home on the Check It Kids Channel.</p>
            <a className="pill" href={site.links.kidsChannel} target="_blank" rel="noreferrer">Check It Kids Channel</a>
          </div>
        </div>
      </section>

      {/* SERVE */}
      <section className="wrap section">
        <div className="phero" style={{ minHeight: 420, alignItems: "center" }}>
          <Photo src="/images/outreach1.jpg" ratio="r-wide" style={{ position: "absolute", inset: 0, aspectRatio: "auto", borderRadius: 0 }} />
          <div className="in" style={{ maxWidth: 600 }}>
            <p className="label" style={{ color: "rgba(255,255,255,.75)" }}>Serve</p>
            <h2 className="d d-lg">You were made for more than a seat.</h2>
            <p style={{ margin: "16px 0 22px", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.88)" }}>Pray, share the stream, show up on outreach days. There&apos;s a spot with your name on it.</p>
            <JoinButton className="pill">I want to serve</JoinButton>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP + FAQ */}
      <section id="membership" className="wrap section">
        <div className="grid g2" style={{ alignItems: "start" }}>
          <div className="member" style={{ display: "block" }}>
            <div className="pad">
              <p className="label" style={{ color: "rgba(255,255,255,.65)" }}>Membership</p>
              <h2 className="d d-lg">Make it<br /><span className="outline">official.</span></h2>
              <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,.82)" }}>For everyone genuinely committed to the ministry and connecting with us online, week after week.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 18, margin: "26px 0 28px" }}>
                {site.membershipSteps.map((s, i) => (
                  <div className="step" key={s.title}><span className="d n">{i + 1}</span><span><span className="d" style={{ display: "block", fontSize: 16 }}>{s.title}</span><p>{s.text}</p></span></div>
                ))}
              </div>
              <JoinButton>Register as a member</JoinButton>
            </div>
          </div>
          <div>
            <h2 className="d d-lg" style={{ marginBottom: 12 }}>Good questions.</h2>
            <Faq items={[
              ["What's the vibe?", "Warm, faith-filled and a little loud. Tune in a stranger, leave knowing somebody."],
              ["Where do I watch?", "YouTube or Facebook. Every service streams live, and past messages stay up on YouTube."],
              ["What about my kids?", "Check It Kids has its own YouTube channel with lessons and worship made for little ones."],
              ["Can I join from another country?", "Yes. Our family connects from the Caribbean, the States and around the world."],
              ["Who can become a member?", "Anyone genuinely committed to the ministry who consistently connects with us through our online platforms."],
              ["How do I stay a member?", "Stay active: join our online services regularly and stay connected with the ministry."],
              ["How do I update my details?", `Email ${site.contact.email} any time.`],
            ]} />
          </div>
        </div>
      </section>
    </>
  );
}
