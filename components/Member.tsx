"use client";

import { createContext, useContext, useEffect, useState, type FormEvent, type ReactNode } from "react";
import { site } from "@/site.config";

const Ctx = createContext<{ open: () => void }>({ open: () => {} });

function YesNo({ name, value, onChange }: { name: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="yn" role="radiogroup">
      {["Yes", "No"].map((v) => (
        <label key={v}><input type="radio" name={name} value={v} required checked={value === v} onChange={() => onChange(v)} />{v}</label>
      ))}
    </div>
  );
}

function MemberForm({ onDone }: { onDone: () => void }) {
  const [kids, setKids] = useState("");
  const [tithe, setTithe] = useState("");
  const [online, setOnline] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const endpoint = site.forms.membershipEndpoint;
    setBusy(true);
    try {
      if (endpoint) {
        await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ form: "membership", ...data }) });
      } else {
        // No webhook configured yet: hand off a pre-filled email to the church inbox.
        const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
        window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent("Membership registration: " + (data["Full name"] || ""))}&body=${encodeURIComponent(body)}`;
      }
      onDone();
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} style={{ padding: "26px 30px 40px", display: "flex", flexDirection: "column", gap: 26 }}>
      <fieldset className="fsec" style={{ border: 0, margin: 0, borderTop: "2px solid var(--ink)" }}>
        <p className="fh">Personal information</p>
        <label className="field">Full name<input name="Full name" required autoComplete="name" /></label>
        <div className="row2">
          <label className="field">Gender<select name="Gender" required defaultValue=""><option value="" disabled>Select</option><option>Female</option><option>Male</option></select></label>
          <label className="field">Date of birth<input type="date" name="Date of birth" required /></label>
        </div>
        <label className="field">Marital status<select name="Marital status" required defaultValue=""><option value="" disabled>Select</option><option>Single</option><option>Married</option><option>Engaged</option><option>Divorced</option><option>Widowed</option></select></label>
        <label className="field">Residential address<input name="Residential address" required autoComplete="street-address" /></label>
        <div className="row2">
          <label className="field">City<input name="City" required autoComplete="address-level2" /></label>
          <label className="field">Country of residence<input name="Country" required autoComplete="country-name" /></label>
        </div>
      </fieldset>

      <fieldset className="fsec" style={{ border: 0, margin: 0, borderTop: "2px solid var(--ink)" }}>
        <p className="fh">Contact information</p>
        <div className="row2">
          <label className="field">Contact / WhatsApp number<input type="tel" name="Phone / WhatsApp" required autoComplete="tel" /></label>
          <label className="field">Email address<input type="email" name="Email" required autoComplete="email" /></label>
        </div>
        <div className="row2">
          <label className="field">Social media name<input name="Social media username" placeholder="@yourname" /></label>
          <label className="field">Platform<select name="Social media platform" defaultValue=""><option value="">Select</option><option>Facebook</option><option>TikTok</option><option>Instagram</option><option>YouTube</option><option>Other</option></select></label>
        </div>
      </fieldset>

      <fieldset className="fsec" style={{ border: 0, margin: 0, borderTop: "2px solid var(--ink)" }}>
        <p className="fh">Family information</p>
        <div className="field">Do you have children?<YesNo name="Has children" value={kids} onChange={setKids} /></div>
        {kids === "Yes" && (
          <>
            <label className="field">How many?<input type="number" min={1} name="Number of children" required /></label>
            <label className="field">Children&apos;s names and ages<textarea name="Children names and ages" rows={3} placeholder="e.g. Grace, 7 · Daniel, 11" required /></label>
          </>
        )}
      </fieldset>

      <fieldset className="fsec" style={{ border: 0, margin: 0, borderTop: "2px solid var(--ink)" }}>
        <p className="fh">Church membership</p>
        <div className="field">Are you a regular virtual / online member?<YesNo name="Regular online member" value={online} onChange={setOnline} /></div>
        <label className="field">Which platform do you join our services on?<select name="Service platform" required defaultValue=""><option value="" disabled>Select</option><option>Facebook</option><option>YouTube</option><option>Both</option></select></label>
      </fieldset>

      <fieldset className="fsec" style={{ border: 0, margin: 0, borderTop: "2px solid var(--ink)" }}>
        <p className="fh">Tithes and giving</p>
        <div className="field">Do you pay your tithe?<YesNo name="Pays tithe" value={tithe} onChange={setTithe} /></div>
        {tithe === "Yes" && (
          <label className="field">Through which platform?<select name="Tithe platform" required defaultValue=""><option value="" disabled>Select</option><option>Bank Transfer</option><option>Church Website</option><option>Cash App</option><option>PayPal</option><option>Other</option></select></label>
        )}
      </fieldset>

      <div className="fsec">
        <p className="fh">Privacy and confidentiality</p>
        <p className="body" style={{ fontSize: 14 }}>
          All information provided will be treated confidentially and used for church membership administration. Thank you for your commitment, faithfulness, and continued support of the ministry. God bless you!
        </p>
        <label style={{ display: "flex", gap: 10, fontSize: 14, lineHeight: 1.45, color: "var(--muted)" }}>
          <input type="checkbox" required style={{ width: 20, height: 20, margin: 0, flex: "none", accentColor: "var(--primary)" }} />
          I confirm my information is accurate and up to date.
        </label>
      </div>

      <button className="pill" type="submit" disabled={busy}>{busy ? "Sending…" : "Submit registration"}</button>
    </form>
  );
}

export function MemberProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <Ctx.Provider value={{ open: () => { setSent(false); setOpen(true); } }}>
      {children}
      {isOpen && (
        <div className="drawer">
          <button className="scrim" aria-label="Close membership form" onClick={() => setOpen(false)} />
          <div className="panel" role="dialog" aria-modal="true" aria-labelledby="memh">
            <div className="top">
              <button className="close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
              <p className="label" style={{ color: "rgba(255,255,255,.65)" }}>Membership registration</p>
              <h2 id="memh" className="d" style={{ fontSize: 40 }}>Make it <span className="outline">official.</span></h2>
              <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,.85)" }}>
                This membership registration is strictly for individuals who are genuinely committed to the ministry and consistently connect with us through our online platforms. To maintain your membership, you are required to remain active, regularly participate in our online services, and stay connected with the ministry.
              </p>
              <p style={{ marginTop: 10, fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,.85)" }}>
                Please ensure all information is accurate and up to date. To update your details at any time, email <a href={`mailto:${site.contact.email}`} style={{ color: "#fff" }}>{site.contact.email}</a>.
              </p>
            </div>
            {sent ? (
              <div style={{ padding: "40px 30px", display: "flex", flexDirection: "column", gap: 14 }}>
                <p className="d" style={{ fontSize: 28 }}>Thank you. God bless you!</p>
                <p className="body">Your registration is on its way to the Check It team. Need a change later? Email {site.contact.email}.</p>
                <button className="pill" style={{ alignSelf: "flex-start" }} onClick={() => setOpen(false)}>Back to the site</button>
              </div>
            ) : (
              <MemberForm onDone={() => setSent(true)} />
            )}
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}

export function JoinButton({ children = "Become a member", className = "pill", style }: { children?: ReactNode; className?: string; style?: React.CSSProperties }) {
  const { open } = useContext(Ctx);
  return (
    <button type="button" className={className} style={style} onClick={open}>
      {children}
    </button>
  );
}
