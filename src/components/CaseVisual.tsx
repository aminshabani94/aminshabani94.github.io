import Image from "next/image";
import type { CSSProperties } from "react";
import type { CaseStudy } from "@/content/profile";

export function CaseVisual({ visual, priority }: { visual: CaseStudy["visual"]; priority?: boolean }) {
  const style = { "--tint": visual.tint } as CSSProperties;

  if (visual.kind === "image") {
    const { shot } = visual;
    return (
      <div className="case-shot shot-image" style={style}>
        <Image src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} priority={priority} sizes="(max-width: 860px) 90vw, 420px" />
      </div>
    );
  }

  if (visual.kind === "stack") {
    return (
      <div className={`case-shot shot-stack n-${visual.shots.length}`} style={style}>
        {visual.shots.map((s, i) => (
          <figure key={s.src} className={`phone p-${i}`} style={{ aspectRatio: `${s.w} / ${s.h}` }}>
            <Image src={s.src} alt={s.alt} width={s.w} height={s.h} sizes="(max-width: 860px) 45vw, 200px" />
          </figure>
        ))}
      </div>
    );
  }

  if (visual.kind === "nfc") {
    // Kahroba tap-to-pay flow, drawn because the feature has no public screens.
    return (
      <div
        className="case-shot shot-nfc"
        style={style}
        role="img"
        aria-label="Tap-to-pay flow: the phone's HCE service answers the NFC terminal with a tokenized card and a limited-use key, and keys are replenished from the server"
      >
        <div className="nfc-row">
          <div className="nfc-phone">
            <span className="nfc-notch" />
            <span className="nfc-title">Kahroba</span>
            <span className="nfc-card">
              <span>•••• 4821</span>
              <small>token</small>
            </span>
            <span className="nfc-status">Hold near reader</span>
          </div>
          <div className="nfc-waves" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="nfc-pos">
            <span className="nfc-screen">Approved</span>
            <span className="nfc-keys">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>
        <ol className="nfc-steps">
          <li>
            <b>HCE</b> service answers the terminal
          </li>
          <li>
            <b>Token</b> replaces the card number
          </li>
          <li>
            <b>LUK</b> signs each payment, refreshed from the server
          </li>
        </ol>
      </div>
    );
  }

  // Compose Multiplatform module layout, drawn because the codebase isn't public.
  return (
    <div
      className="case-shot shot-modules"
      style={style}
      role="img"
      aria-label="Module diagram: Android, iOS and desktop web apps share a Kotlin core of UI state, domain and data, across 70+ modules"
    >
      <div className="mod-row">
        <div className="mod mod-platform">
          <span className="mod-label">androidApp</span>
          <span className="mod-sub">Compose</span>
        </div>
        <div className="mod mod-platform">
          <span className="mod-label">iosApp</span>
          <span className="mod-sub">CMP</span>
        </div>
        <div className="mod mod-platform">
          <span className="mod-label">desktopWeb</span>
          <span className="mod-sub">CMP</span>
        </div>
      </div>
      <svg className="mod-arrows" viewBox="0 0 300 36" preserveAspectRatio="none" aria-hidden="true">
        <path d="M50 2 L150 34 M150 2 L150 34 M250 2 L150 34" />
      </svg>
      <div className="mod mod-shared">
        <span className="mod-label">shared · commonMain</span>
        <div className="mod-layers">
          <span>ui-state · MVI</span>
          <span>domain</span>
          <span>data</span>
        </div>
      </div>
      <div className="mod-foot">
        <span>70+ modules</span>
        <span>convention plugins · Detekt</span>
      </div>
    </div>
  );
}
