import type { ChapterStepProps } from "../../registry/types";
import "./HandsOnSetup.css";
import { narrations } from "./narrations";

export default function HandsOnSetup({ step }: ChapterStepProps) {
  if (step === 0) return <HS1 />;
  if (step === 1) return <HS2 />;
  if (step === 2) return <HS3 />;
  if (step === 3) return <HS4 />;
  if (step === 4) return <HS5 />;
  if (step === 5) return <HS6 />;
  return <HS7 />;
}

// Step 1: EDGAR inline viewer
function HS1() {
  return (
    <div className="hs-stage">
      <div className="hs-screenshot-wrap">
        <img src={`${import.meta.env.BASE_URL}assets/04-edgar-viewer.png`} alt="SEC EDGAR 10-K inline viewer" className="hs-screenshot" />
      </div>
      <div className="hs-narration"><p>{narrations[0]}</p></div>
    </div>
  );
}

// Step 2: Part II Item 8
function HS2() {
  return (
    <div className="hs-stage">
      <div className="hs-highlight-card">
        <div className="hs-highlight-card__label">Navigate to</div>
        <div className="hs-highlight-card__part">Part II, Item 8</div>
        <div className="hs-highlight-card__desc">Financial Statements &amp; Supplementary Data</div>
        <div className="hs-highlight-card__sub">Balance Sheet + Statements of Operations</div>
      </div>
      <div className="hs-narration"><p>{narrations[1]}</p></div>
    </div>
  );
}

// Step 3: Click a number → AssetsCurrent
function HS3() {
  return (
    <div className="hs-stage">
      <div className="hs-screenshot-wrap">
        <img
          src={`${import.meta.env.BASE_URL}assets/05-edgar-xbrl-popup.png`}
          alt="EDGAR 10-K: Total Current Assets with XBRL tag popup"
          className="hs-screenshot"
        />
      </div>
      <div className="hs-tag-callout">
        <span className="hs-tag-callout__tag">us-gaap:AssetsCurrent</span>
        <span className="hs-tag-callout__label">← the tag name</span>
      </div>
      <div className="hs-narration"><p>{narrations[2]}</p></div>
    </div>
  );
}

// Step 4: Open Google Sheet
function HS4() {
  return (
    <div className="hs-stage">
      <div className="hs-sheet-wrap">
        <img src={`${import.meta.env.BASE_URL}assets/05-sheet-mockup.png`} alt="Financial Statement Analysis Google Sheet" className="hs-screenshot" />
      </div>
      <div className="hs-narration"><p>{narrations[3]}</p></div>
    </div>
  );
}

// Step 5: File > Make a copy
function HS5() {
  return (
    <div className="hs-stage">
      <div className="hs-steps">
        <div className="hs-step-btn">File</div>
        <div className="hs-step-arrow">→</div>
        <div className="hs-step-btn hs-step-btn--highlight">Make a copy…</div>
      </div>
      <div className="hs-hint">Now it's yours to edit.</div>
      <div className="hs-narration"><p>{narrations[4]}</p></div>
    </div>
  );
}

// Step 6: Swap ticker MSFT → TSLA
function HS6() {
  return (
    <div className="hs-stage">
      <div className="hs-ticker-swap">
        <div className="hs-ticker hs-ticker--old">
          <div className="hs-ticker__label">Current</div>
          <div className="hs-ticker__value">MSFT</div>
        </div>
        <div className="hs-ticker-arrow">→</div>
        <div className="hs-ticker hs-ticker--new">
          <div className="hs-ticker__label">Tesla</div>
          <div className="hs-ticker__value hs-ticker__value--accent">TSLA</div>
        </div>
      </div>
      <div className="hs-year-row">
        <span className="hs-year-label">Year:</span>
        <span className="hs-year-value">2025</span>
        <span className="hs-year-sub">← auto-pulls 2021–2025</span>
      </div>
      <div className="hs-narration"><p>{narrations[5]}</p></div>
    </div>
  );
}

// Step 7: Data populates
function HS7() {
  return (
    <div className="hs-stage">
      <div className="hs-data-ready">
        <div className="hs-data-ready__icon">✓</div>
        <div className="hs-data-ready__text">
          Five years of Tesla data<br />
          <span className="hs-data-ready__years">2021 · 2022 · 2023 · 2024 · 2025</span>
        </div>
      </div>
      <div className="hs-narration"><p>{narrations[6]}</p></div>
    </div>
  );
}
