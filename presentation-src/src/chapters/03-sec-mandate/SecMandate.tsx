import type { ChapterStepProps } from "../../registry/types";
import "./SecMandate.css";
import { narrations } from "./narrations";

export default function SecMandate({ step }: ChapterStepProps) {
  if (step === 0) return <SM1 />;
  if (step === 1) return <SM2 />;
  if (step === 2) return <SM3 />;
  if (step === 3) return <SM4 />;
  if (step === 4) return <SM5 />;
  if (step === 5) return <SM6 />;
  if (step === 6) return <SM7 />;
  return <SM8 />;
}

// Step 0: June 2011 hero
function SM1() {
  return (
    <div className="sm-stage">
      <div className="sm-hero">
        <div className="sm-hero__since">Since</div>
        <div className="sm-hero__year">June 2011</div>
        <div className="sm-hero__sub">XBRL has been mandatory for every public company.</div>
      </div>
      <div className="sm-narration"><p>{narrations[0]}</p></div>
    </div>
  );
}

function SM2() { return <SMStatement index={0} text={narrations[1]} />; }
function SM3() { return <SMStatement index={1} text={narrations[2]} />; }
function SM4() { return <SMStatement index={2} text={narrations[3]} />; }
function SM5() { return <SMStatement index={3} text={narrations[4]} />; }
function SM6() { return <SMStatement index={4} text={narrations[5]} />; }

function SMStatement({ index, text }: { index: number; text: string }) {
  const ALL = [
    "Balance Sheet",
    "Income Statement",
    "Statement of Comprehensive Income",
    "Statement of Cash Flows",
    "Statement of Stockholders' Equity",
  ];
  return (
    <div className="sm-stage">
      <div className="sm-statements">
        {/* Already-revealed statements */}
        {ALL.slice(0, index).map((s, i) => (
          <div key={i} className="sm-stmt-row sm-stmt-row--done">{s}</div>
        ))}
        {/* Active statement — highlighted */}
        <div className="sm-stmt-row sm-stmt-row--active">
          <span className="sm-stmt-num">{index + 1}</span>
          {ALL[index]}
        </div>
        {/* Remaining statements — muted */}
        {ALL.slice(index + 1).map((s, i) => (
          <div key={i} className="sm-stmt-row sm-stmt-row--pending">{s}</div>
        ))}
      </div>
      <div className="sm-narration"><p>{text}</p></div>
    </div>
  );
}

// Step 7: Footnotes go deeper
function SM7() {
  return (
    <div className="sm-stage">
      <div className="sm-footnotes">
        <div className="sm-footnotes__icon">📋</div>
        <div className="sm-footnotes__title">Even the footnotes are tagged</div>
        <div className="sm-footnotes__tags">
          {["Facts", "Figures", "Years", "Percentages", "Text disclosure"].map((t, i) => (
            <span key={i} className="sm-footnote-tag" style={{ animationDelay: `${i * 0.1}s` }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="sm-narration"><p>{narrations[6]}</p></div>
    </div>
  );
}

// Step 8: Outro
function SM8() {
  return (
    <div className="sm-stage">
      <div className="sm-cta">
        <div className="sm-cta__rule" />
        <div className="sm-cta__text">
          Do this once with Tesla —<br />
          <span className="sm-cta__accent">and you can do it with any public company on EDGAR.</span>
        </div>
        <div className="sm-cta__rule" />
      </div>
    </div>
  );
}
