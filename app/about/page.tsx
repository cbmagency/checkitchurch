"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/site.config";
import { Faq, PageHero, Photo } from "@/components/Blocks";

export default function About() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero src="/images/worship.jpg" pos="50% 40%" label="About Check It" title={<>Until all see<br /><span style={{ color: "#FF6B76" }}>His Kingdom.</span></>} sub="Proclaiming the Kingdom of God through the Word, worship and miracles.">
        <a className="pill p-white" href="#pastors">Meet Our Pastors</a>
        <a className="pill p-ghost" href="#prayer">Send a Prayer Request</a>
      </PageHero>

      {/* MISSION */}
      <section className="wrap section">
        <div className="grid g2" style={{ alignItems: "end" }}>
          <h2 className="d d-lg">One family.<br /><span className="red">Many nations.</span></h2>
          <p className="lead">From the Caribbean to the States and around the world, Check It is a house where people encounter God and find their people. In the room or online, you belong here.</p>
        </div>
        <div className="grid g3" style={{ marginTop: 40 }}>
          {[["Word.", "Bible teaching that's clear, practical and built for real life."], ["Worship.", "Spirit-filled, wholehearted, never on autopilot."], ["Miracles.", "We believe God still heals, delivers and breaks through."]].map(([t, d], i) => (
            <div key={t} className="card" style={{ padding: 26 }}>
              <p className={`d d-sm ${i === 2 ? "red" : ""}`}>{t}</p>
              <p className="body" style={{ marginTop: 10 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PASTORS */}
      <section id="pastors" className="wrap section">
        <div className="grid g2" style={{ marginBottom: 48 }}>
          <div style={{ position: "relative", aspectRatio: "4 / 5", maxWidth: 420 }}>
            <Image src="/images/pastor_white.jpg" alt="Pastor Isaac Samuel II" fill sizes="420px" style={{ objectFit: "contain", objectPosition: "50% 100%" }} />
          </div>
          <div>
            <p className="label">Our Pastors</p>
            <h2 className="d d-lg">Led with<br /><span className="red">fire and love.</span></h2>
            <p className="lead" style={{ marginTop: 18, maxWidth: 480 }}>Pastor Isaac and Minister Juna have given their lives to the Word, worship and miracles, and thousands have found hope, healing and purpose through this house.</p>
          </div>
        </div>
        <div className="grid g2" style={{ alignItems: "start" }}>
          {site.pastors.map((p) => (
            <div key={p.name}>
              <Photo src={p.image} alt={p.name} pos={p.pos} />
              <p className="d" style={{ marginTop: 20, fontSize: 24 }}>{p.name}</p>
              <p className="label red" style={{ marginTop: 8 }}>{p.title}</p>
              <p className="body">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BELIEFS */}
      <section className="wrap section">
        <div className="grid g2" style={{ alignItems: "start" }}>
          <div>
            <h2 className="d d-lg">What we<br /><span className="red">believe.</span></h2>
            <p className="lead" style={{ marginTop: 16 }}>The short version. Full statement of faith available on request.</p>
          </div>
          <Faq openFirst={false} items={[
            ["The Bible", "[Confirm wording] God's Word is true, alive and the foundation for everything we do."],
            ["Jesus", "[Confirm wording] Salvation is found in Jesus Christ alone, through His blood and His finished work."],
            ["The Holy Spirit", "[Confirm wording] The Spirit empowers believers today, with gifts, healing and miracles."],
            ["The Church", "[Confirm wording] We're called to be a family that worships, grows and serves together."],
          ]} />
        </div>
      </section>

      {/* FAMILY */}
      <section className="wrap section">
        <div className="grid g4">
          <Photo src="/images/family.jpg" alt="The Check It family" pos="50% 50%" />
          <Photo src="/images/team.jpg" alt="The Check It serve team" pos="50% 30%" />
          <Photo src="/images/highfive.jpg" alt="Members celebrating" pos="50% 30%" />
          <Photo src="/images/joy.jpg" alt="A member worshipping" pos="50% 25%" />
        </div>
      </section>

      {/* PRAYER */}
      <section id="prayer" className="wrap section">
        <div className="grid g2">
          <div>
            <p className="label">Prayer</p>
            <h2 className="d d-lg">You don&apos;t have to<br /><span className="red">carry it alone.</span></h2>
            <p className="lead" style={{ marginTop: 18, maxWidth: 440 }}>Send us your request. Our prayer team will stand with you.</p>
          </div>
          <div className="card" style={{ padding: 32 }}>
            {sent ? (
              <p className="d d-sm">We&apos;re praying with you.</p>
            ) : (
              <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <label className="field">Name<input name="name" required /></label>
                <label className="field">Email or phone<input name="contact" /></label>
                <label className="field">How can we pray for you?<textarea name="request" rows={4} required /></label>
                <button className="pill p-red" type="submit">Send Prayer Request</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
