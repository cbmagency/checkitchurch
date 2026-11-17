import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";
import { JoinButton } from "@/components/Member";
import { Faq, PageHero, Photo, ServiceCards } from "@/components/Blocks";

export const metadata: Metadata = { title: "New Here", description: "Plan your first visit to Check It Church: service times, what to expect, kids and membership." };

export default function NewHere() {
  return (
    <>
      <PageHero src="/images/family.jpg" pos="50% 55%" label="New Here" title={<>First time?<br /><span style={{ color: "#FF6B76" }}>We saved you a seat.</span></>} sub="Everything you need to walk in like you've been coming for years.">
        <a className="pill p-white" href="#visit">Plan Your Visit</a>
        <Link className="pill p-ghost" href="/watch">Watch First</Link>
      </PageHero>

      {/* STEPS */}
      <section className="wrap section">
        <h2 className="d d-lg" style={{ marginBottom: 28 }}>Your first Sunday,<br /><span className="red">start to finish.</span></h2>
        <div className="grid g3">
          {[
            ["01", "Pull up.", "Easy parking, no city rush. Arrive a few minutes early and grab a seat.", "/images/worship.jpg", "50% 40%"],
            ["02", "Get welcomed.", "Someone meets you at the door, helps with the kids and finds you a seat.", "/images/hug.jpg", "50% 40%"],
            ["03", "Encounter God.", "Worship, the Word and prayer. Stay after and say hi. We'd love to meet you.", "/images/arms.jpg", "50% 25%"],
          ].map(([n, t, d, img, pos]) => (
            <div key={n}>
              <Photo src={img} pos={pos} ratio="r-land" />
              <p className="d" style={{ marginTop: 18, fontSize: 22 }}><span className="red">{n}</span> {t}</p>
              <p className="body" style={{ marginTop: 8 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="wrap section">
        <div className="grid g2" style={{ alignItems: "start" }}>
          <div className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
            <p className="label" style={{ margin: 0 }}>Visit us</p>
            <h2 className="d d-md">Sundays · 10 AM</h2>
            <p className="body">{site.contact.address}</p>
            <p style={{ fontSize: 15, fontWeight: 600 }}>Easy parking · Kids church every week</p>
            <div className="tbd r-video">Google Map</div>
            <div className="btns"><a className="pill p-red" href="#visit">Get Directions</a><Link className="pill p-out" href="/watch">Watch Online</Link></div>
          </div>
          <div>
            <h2 className="d d-md" style={{ marginBottom: 8 }}>Every week.</h2>
            <p className="body" style={{ marginBottom: 20 }}>In the room or on the stream. All times {site.contact.timezone}.</p>
            <ServiceCards />
          </div>
        </div>
      </section>

      {/* KIDS */}
      <section id="kids" className="wrap section">
        <div className="grid g2">
          <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <Photo src="/images/kidsdance.jpg" alt="A volunteer dancing with a child" />
            <Photo src="/images/family.jpg" alt="Kids at the Check It convention" pos="48% 80%" />
          </div>
          <div>
            <p className="label blue">Check It Kids</p>
            <h2 className="d d-lg">Little hearts.<br /><span className="blue">Big faith.</span></h2>
            <p className="lead" style={{ margin: "18px 0 24px", maxWidth: 440 }}>Every Sunday, kids worship, play and learn the Bible at their level. Safe, fun, and full of people who love them. [Confirm ages + check-in]</p>
            <a className="pill p-navy" href={site.links.kidsChannel} target="_blank" rel="noreferrer">Check It Kids Channel</a>
          </div>
        </div>
      </section>

      {/* SERVE */}
      <section className="wrap section">
        <div className="phero" style={{ minHeight: 420, alignItems: "center" }}>
          <Photo src="/images/outreach2.jpg" ratio="r-wide" style={{ position: "absolute", inset: 0, aspectRatio: "auto", borderRadius: 0 }} />
          <div className="in" style={{ maxWidth: 600 }}>
            <p className="label" style={{ color: "rgba(255,255,255,.75)" }}>Serve</p>
            <h2 className="d d-lg">You were made for more than a seat.</h2>
            <p style={{ margin: "16px 0 22px", fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,.88)" }}>Greet, help with kids, serve on outreach days. There&apos;s a spot with your name on it.</p>
            <JoinButton className="pill p-white">I Want to Serve</JoinButton>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP + FAQ */}
      <section id="membership" className="wrap section">
        <div className="grid g2" style={{ alignItems: "start" }}>
          <div className="member" style={{ display: "block" }}>
            <div className="pad">
              <p className="label" style={{ color: "rgba(255,255,255,.65)" }}>Membership</p>
              <h2 className="d d-lg">Make it<br /><span style={{ color: "#FF6B76" }}>home.</span></h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 18, margin: "26px 0 28px" }}>
                {site.membershipSteps.map((s, i) => (
                  <div className="step" key={s.title}><span className="d n">{i + 1}</span><span><span className="d" style={{ display: "block", fontSize: 16 }}>{s.title}</span><p>{s.text}</p></span></div>
                ))}
              </div>
              <JoinButton className="pill p-white">Start My Membership</JoinButton>
            </div>
          </div>
          <div>
            <h2 className="d d-lg" style={{ marginBottom: 12 }}>Good questions.</h2>
            <Faq items={[
              ["What's the vibe?", "Warm, faith-filled and a little loud. Walk in a stranger, leave knowing somebody."],
              ["What do I wear?", "Sunday best or sneakers. Come as you are."],
              ["How long is service?", "About [X] hours of worship, the Word and prayer."],
              ["What about my kids?", "Check It Kids runs every Sunday while you worship. [Confirm ages + check-in]"],
              ["Is parking easy?", "Yes. No circling the block, no meters. Pull in and walk right up. [Confirm lot details]"],
              ["Can I watch online first?", "Absolutely. Every service streams live. Come say hi when you're ready."],
              ["Who can become a member?", "[Confirm requirements: e.g. attending regularly, completing the membership class.]"],
            ]} />
          </div>
        </div>
      </section>
    </>
  );
}
