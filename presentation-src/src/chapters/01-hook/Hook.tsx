import type { ChapterStepProps } from "../../registry/types";
import "./Hook.css";
import { narrations } from "./narrations";

// Real asset
const IMG_DOC = `${import.meta.env.BASE_URL}assets/01-hook-10k-mockup.png`;

export default function Hook({ step }: ChapterStepProps) {
  if (step === 0) return <HookS1 />;
  if (step === 1) return <HookS2 />;
  return <HookS3 />;
}

// ── Step 0 · ~7s ──────────────────────────────────────────────────────────
// 10-K document screenshot with animated XBRL tag dots overlaid
function HookS1() {
  return (
    <div className="hk-stage hk-stage--dark">
      <div className="hk-doc-wrap">
        {/* Real screenshot of Tesla 10-K balance sheet */}
        <img
          src={IMG_DOC}
          alt="Tesla 10-K Balance Sheet inline XBRL"
          className="hk-doc-img"
        />

        {/* Animated XBRL tag overlay dots — appear on top of specific numbers */}
        <span className="hk-tag-dot hk-tag-dot--1" />
        <span className="hk-tag-dot hk-tag-dot--2" />
        <span className="hk-tag-dot hk-tag-dot--3" />
      </div>

      <div className="hk-narration">
        <p className="hk-narration__text">{narrations[0]}</p>
      </div>
    </div>
  );
}

// ── Step 1 · ~4s ──────────────────────────────────────────────────────────
// XBRL full name revealed — use generated acronym image
function HookS2() {
  return (
    <div className="hk-stage hk-stage--dark">
      <div className="hk-xbrl-name">
        <img
          src={`${import.meta.env.BASE_URL}assets/02-xbrl-acronym.png`}
          alt="XBRL — eXtensible Business Reporting Language"
          className="hk-xbrl-img"
        />
      </div>
      <div className="hk-narration">
        <p className="hk-narration__text">{narrations[1]}</p>
      </div>
    </div>
  );
}

// ── Step 2 · ~4s ──────────────────────────────────────────────────────────
// Hero promise statement
function HookS3() {
  return (
    <div className="hk-stage hk-stage--dark">
      <div className="hk-hero">
        <div className="hk-hero__line hk-hero__line--1">
          <span className="hk-hero__word">One</span>
          <span className="hk-hero__word">click</span>
        </div>
        <div className="hk-hero__line hk-hero__line--2">
          <span className="hk-hero__word">per</span>
          <span className="hk-hero__word hk-hero__word--accent">number.</span>
        </div>
        <div className="hk-hero__rule" />
        <div className="hk-hero__line hk-hero__line--3">
          <span className="hk-hero__word hk-hero__word--muted">Five years of data.</span>
        </div>
        <div className="hk-hero__line hk-hero__line--4">
          <span className="hk-hero__word hk-hero__word--muted">No typing.</span>
        </div>
      </div>

      <div className="hk-narration hk-narration--bottom">
        <p className="hk-narration__text">{narrations[2]}</p>
      </div>
    </div>
  );
}
