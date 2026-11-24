"use client";

import { useState } from "react";
import { site } from "@/site.config";
import { Faq, PageHero, Photo } from "@/components/Blocks";
import { sendForm } from "@/components/Member";

const gallery: [string, string, string][] = [
  ["/images/women5.jpg", "Women of Check It", "50% 35%"],
  ["/images/outreach2.jpg", "Serving the neighborhood", "50% 50%"],
  ["/images/family.jpg", "The Check It family", "50% 50%"],
  ["/images/notebooks.jpg", "School supplies for local families", "50% 50%"],
  ["/images/highfive.jpg", "Convention 2024", "50% 30%"],
  ["/images/street.jpg", "Outreach on the block", "50% 50%"],
  ["/images/team.jpg", "The serve team", "50% 35%"],
  ["/images/balloons.jpg", "Community day", "50% 40%"],
];

export default function About() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero src="/images/joy.jpg" pos="50% 30%" label="About Check It" title={<>Word. Worship.<br /><span className="blue">Miracles.</span></>} sub="Proclaiming the Kingdom of God through the Word, worship and miracles.">
        <a className="pill" href="#pastors">Meet our pastors</a>
        <a className="pill" href="#prayer">Send a Prayer Request</a>
      </PageHero>

      {/* MISSION */}
      <section className="wrap section">
        <div className="grid g2" style={{ alignItems: "end" }}>
          <h2 className="d d-lg">One family.<br /><span className="blue">Many nations.</span></h2>
          <p className="lead">From the Caribbean to the States and around the world, Check It is a house where people encounter God and find their people. Wherever you are, you belong here.</p>
        </div>
        <div className="grid g3" style={{ marginTop: 40 }}>
          {[["Word.", "Bible teaching that's clear, practical and built for real life."], ["Worship.", "Spirit-filled, wholehearted, never on autopilot."], ["Miracles.", "We believe God still heals, delivers and breaks through."]].map(([t, d], i) => (
            <div key={t} className="card" style={{ padding: 26 }}>
              <p className={`d d-sm ${i === 2 ? "blue" : ""}`}>{t}</p>
              <p className="body" style={{ marginTop: 10 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PASTORS */}
      <section id="pastors" className="wrap section">
        <div className="head">
          <div>
            <p className="label">Our Pastors</p>
            <h2 className="d d-lg">Led with<br /><span className="blue">fire and love.</span></h2>
          </div>
          <p className="lead" style={{ maxWidth: 480 }}>Pastor Isaac and First Lady Juna have given their lives to the Word, worship and miracles. Thousands have found hope, healing and purpose through this house.</p>
        </div>
        <div className="grid g2" style={{ alignItems: "start" }}>
          {site.pastors.map((p) => (
            <div key={p.name}>
              <Photo src={p.aboutImage} alt={p.name} pos={p.aboutPos} />
              <p className="d" style={{ marginTop: 20, fontSize: 24 }}>{p.name}</p>
              {p.title ? <p className="label red" style={{ marginTop: 8 }}>{p.title}</p> : <div style={{ height: 8 }} />}
              <p className="body">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BELIEFS: shows once site.beliefs is filled in */}
      {site.beliefs.length > 0 && (
        <section className="wrap section">
          <div className="grid g2" style={{ alignItems: "start" }}>
            <div>
              <h2 className="d d-lg">What we<br /><span className="blue">believe.</span></h2>
              <p className="lead" style={{ marginTop: 16 }}>The short version. Full statement of faith available on request.</p>
            </div>
            <Faq openFirst={false} items={site.beliefs.map((b) => [b.q, b.a] as [string, string])} />
          </div>
        </section>
      )}

      {/* LIFE AT CHECK IT: slow photo strip, pauses on hover */}
      <section className="section">
        <div className="wrap"><h2 className="d d-lg" style={{ marginBottom: 28 }}>Life at <span className="blue">Check It.</span></h2></div>
        <div className="marquee" style={{ marginTop: 0 }}>
          <div className="track">
            {[...gallery, ...gallery].map(([src, alt, pos], i) => (
              <Photo key={i} src={src} alt={i < gallery.length ? alt : ""} pos={pos} sizes="300px" />
            ))}
          </div>
        </div>
      </section>

      {/* PRAYER */}
      <section id="prayer" className="wrap section">
        <div className="grid g2">
          <div>
            <p className="label">Prayer</p>
            <h2 className="d d-lg">You don&apos;t have to<br /><span className="blue">carry it alone.</span></h2>
            <p className="lead" style={{ marginTop: 18, maxWidth: 440 }}>Send us your request. Our prayer team will stand with you.</p>
          </div>
          <div className="card" style={{ padding: 32 }}>
            {sent ? (
              <p className="d d-sm">We&apos;re praying with you.</p>
            ) : (
              <form style={{ display: "flex", flexDirection: "column", gap: 14 }} onSubmit={async (e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
                if (site.forms.web3formsKey) await sendForm(site.forms.web3formsKey, "Prayer request: " + data.name, data);
                else window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent("Prayer request")}&body=${encodeURIComponent(Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n"))}`;
                setSent(true);
              }}>
                <label className="field">Name<input name="name" required /></label>
                <label className="field">Email or phone<input name="contact" /></label>
                <label className="field">How can we pray for you?<textarea name="request" rows={4} required /></label>
                <button className="pill" type="submit">Send Prayer Request</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
