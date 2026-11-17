import Image from "next/image";
import type { Metadata } from "next";
import { site } from "@/site.config";
import { has, PageHero, PhotoCard } from "@/components/Blocks";

export const metadata: Metadata = { title: "Give", description: "Give to Check It Church Ministries online, by Zelle, Cash App, PayPal or phone. Shop the Check It collection." };

export default function Give() {
  return (
    <>
      <PageHero src="/images/team.jpg" pos="50% 30%" label="Give" title={<>Sow into<br /><span className="blue">the Kingdom.</span></>} sub="Every gift helps people encounter God, here and around the world.">
        <a className="pill" href={site.links.give} target="_blank" rel="noreferrer">Give Now</a>
        <a className="pill" href="#shop">Shop now</a>
      </PageHero>

      {/* WAYS */}
      <section id="ways" className="wrap section">
        <h2 className="d d-lg" style={{ marginBottom: 8 }}>Give your way.</h2>
        <p className="lead" style={{ marginBottom: 28 }}>Pick what&apos;s easiest. It all goes to the same place.</p>
        <div className="grid g3">
          {site.giveWays.filter((w) => has(w.detail)).map((w) => {
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
        <h2 className="d d-lg" style={{ marginBottom: 28 }}>Where your<br /><span className="blue">gift goes.</span></h2>
        <div className="grid g3">
          <PhotoCard src="/images/worship.jpg" pos="50% 45%" label="Worship" title="Sundays and the stream, every week." href={site.links.give} cta="Give" />
          <PhotoCard src="/images/notebooks.jpg" pos="50% 50%" label="Outreach" title="Showing up for the neighborhood." href={site.links.give} cta="Give" />
          <PhotoCard src="/images/soloblue.jpg" pos="50% 30%" label="Ministry" title="Raising up leaders in the faith." href={site.links.give} cta="Give" />
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="wrap section shopsec">
        <div>
          <div><p className="label">CHECKITCMSHOP</p><h2 className="d d-lg">Wear the<br /><span className="blue">Word.</span></h2><p className="lead" style={{ marginTop: 14, maxWidth: 480 }}>Apparel, accessories and books for adults and kids. Every purchase supports the ministry.</p></div>
          <a className="pill" href={site.links.shop} target="_blank" rel="noreferrer">Shop now</a>
        </div>
        <div className="shop2">
          {site.shopProducts.map((p) => (
            <a key={p.name} className="product" href={p.href} target="_blank" rel="noreferrer">
              <div className="pimg"><Image src={p.image} alt={`${p.name} crewneck sweatshirt`} fill quality={85} sizes="(max-width: 760px) 50vw, 380px" /></div>
              <div className="pmeta"><span className="d" style={{ fontSize: 18 }}>{p.name}</span><span style={{ fontWeight: 600 }}>{p.price}</span></div>
              <span className="pill" style={{ minHeight: 30, fontSize: 13 }}>Shop now</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
