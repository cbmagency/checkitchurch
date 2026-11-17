"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const Ctx = createContext<{ open: () => void }>({ open: () => {} });

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
              <p className="label" style={{ color: "rgba(255,255,255,.65)" }}>Membership</p>
              <h2 id="memh" className="d" style={{ fontSize: 40 }}>Welcome home.</h2>
              <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,.85)" }}>
                One minute. Then someone from our team reaches out personally.
              </p>
            </div>
            {sent ? (
              <div style={{ padding: "40px 30px", display: "flex", flexDirection: "column", gap: 14 }}>
                <p className="d" style={{ fontSize: 28 }}>So glad you&apos;re here.</p>
                <p className="body">Someone from the Check It family will reach out soon.</p>
                <button className="pill p-out" style={{ alignSelf: "flex-start" }} onClick={() => setOpen(false)}>Back to the site</button>
              </div>
            ) : (
              <form
                style={{ padding: "28px 30px 36px", display: "flex", flexDirection: "column", gap: 14 }}
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
                  <label className="field">First name<input name="first" required /></label>
                  <label className="field">Last name<input name="last" required /></label>
                </div>
                <label className="field">Email<input type="email" name="email" required /></label>
                <label className="field">Phone<input type="tel" name="phone" /></label>
                <label className="field">How do you join us?
                  <select name="how"><option>In person</option><option>Online</option><option>Both</option></select>
                </label>
                <label style={{ display: "flex", gap: 10, fontSize: 14, lineHeight: 1.45, color: "var(--muted)" }}>
                  <input type="checkbox" name="updates" style={{ width: 20, height: 20, margin: 0, flex: "none", accentColor: "var(--primary)" }} />
                  Also send me ministry updates (optional)
                </label>
                <button className="pill p-red" type="submit" style={{ marginTop: 6 }}>Start My Membership</button>
              </form>
            )}
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}

export function JoinButton({ children = "Become a Member", className = "pill p-red", style }: { children?: ReactNode; className?: string; style?: React.CSSProperties }) {
  const { open } = useContext(Ctx);
  return (
    <button type="button" className={className} style={style} onClick={open}>
      {children}
    </button>
  );
}
