import type { Metadata } from "next";
import { site } from "@/site.config";
import { PageHero, PhotoCard } from "@/components/Blocks";

export const metadata: Metadata = { title: "Give", description: "Give to Check It Church Ministries online, by Zelle, Cash App, PayPal or phone. Shop the Check It collection." };

export default function Give() {
  return (
    <>
      <PageHero src="/images/team.jpg" pos="50% 30%" label="Give" title={<>Sow into<br /><span style={{ color: "#A9B4FF" }}>the Kingdom.</span></>} sub="Every gift helps people encounter God, here and around the world.">
        <a className="pill p-white" href={site.links.give} target="_blank" rel="noreferrer">Give Now</a>
        <a className="pill p-ghost" href="#shop">Shop the Collection</a>
      </PageHero>

      {/* WAYS */}
      <section id="ways" className="wrap section">
        <h2 className="d d-lg" style={{ marginBottom: 8 }}>Give your way.</h2>
        <p className="lead" style={{ marginBottom: 28 }}>Pick what&apos;s easiest. It all goes to the same place.</p>
        <div className="grid g3">
          {site.giveWays.map((w) => {
            const href = "href" in w ? w.href : undefined;
            const inner = (<><span className="d d-sm">{w.name}</span><span className="body">{w.detail}</span>{href && <span className="d red" style={{ fontSize: 12, marginTop: "auto" }}>Give →</span>}</>);
            return href ? (
              <a key={w.name} className="card" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ padding: 26, display: "flex", flexDirection: "column", gap: 10, minHeight: 150, textDecoration: "none" }}>{inner}</a>
            ) : (
              <div key={w.name} className="card" style={{ padding: 26, display: "flex", flexDirection: "column", gap: 10, minHeight: 150 }}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* WHERE IT GOES */}
      <section className="wrap section">
        <h2 className="d d-lg" style={{ marginBottom: 28 }}>Where your<br /><span className="red">gift goes.</span></h2>
        <div className="grid g3">
          <PhotoCard src="/images/worship.jpg" label="Worship" title="Sundays and the stream, every week." href={site.links.give} cta="Give" />
          <PhotoCard src="/images/outreach2.jpg" pos="50% 50%" label="Outreach" title="Showing up for the neighborhood." href={site.links.give} cta="Give" />
          <PhotoCard src="/images/kidsdance.jpg" pos="50% 30%" label="Next generation" title="Raising kids in the faith." href={site.links.give} cta="Give" />
        </div>
        <p className="body" style={{ marginTop: 16, fontSize: 14 }}>[Confirm how gifts are used before launch]</p>
      </section>

      {/* SHOP */}
      <section id="shop" className="wrap section">
        <div className="head">
          <div><p className="label">Check It Shop</p><h2 className="d d-lg">Fashion rooted<br /><span className="red">in faith.</span></h2><p className="lead" style={{ marginTop: 14, maxWidth: 480 }}>Apparel, accessories and books for adults and kids. Every purchase supports the ministry.</p></div>
          <a className="pill p-navy" href={site.links.shop} target="_blank" rel="noreferrer">Shop checkitcmshop.org</a>
        </div>
        <div className="grid g4">
          {[1, 2, 3, 4].map((i) => <div key={i} className="tbd r-port">Product photo {i}<br />from Check It Shop</div>)}
        </div>
      </section>
    </>
  );
}
