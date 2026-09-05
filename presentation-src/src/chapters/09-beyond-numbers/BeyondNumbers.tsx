import type { ChapterStepProps } from "../../registry/types";
import "./BeyondNumbers.css";
import { narrations } from "./narrations";

export default function BeyondNumbers({ step }: ChapterStepProps) {
  if (step === 0) return <BN1 />;
  if (step === 1) return <BN2 />;
  if (step === 2) return <BN3 />;
  if (step === 3) return <BN4 />;
  return <BN5 />;
}

// Step 1: 10-K index page screenshot
function BN1() {
  return (
    <div className="bn-stage">
      <div className="bn-screenshot-wrap">
        <img
          src={`${import.meta.env.BASE_URL}assets/07-10k-index.png`}
          alt="Tesla 10-K Index Page"
          className="bn-screenshot"
        />
      </div>
      <div className="bn-narration"><p>{narrations[0]}</p></div>
    </div>
  );
}

// Step 2: Item 7 + Item 8
function BN2() {
  return (
    <div className="bn-stage">
      <div className="bn-two-items">
        <div className="bn-item-card bn-item-card--highlight">
          <div className="bn-item-card__num">Item 7</div>
          <div className="bn-item-card__name">MD&amp;A</div>
          <div className="bn-item-card__sub">Management Discussion &amp; Analysis</div>
        </div>
        <div className="bn-item-card bn-item-card--highlight">
          <div className="bn-item-card__num">Item 8</div>
          <div className="bn-item-card__name">Financial Statements</div>
          <div className="bn-item-card__sub">&amp; Supplementary Data</div>
        </div>
      </div>
      <div className="bn-narration"><p>{narrations[1]}</p></div>
    </div>
  );
}

// Step 3: Q2 questions
function BN3() {
  return (
    <div className="bn-stage">
      <div className="bn-questions">
        <div className="bn-questions__title">Q2 — Item 7 MD&amp;A</div>
        {[
          "How many subsections does Item 7 have, and what are they?",
          "In the 2026 Outlook subsection — what are the four opportunities or changes identified by management?",
        ].map((q, i) => (
          <div key={i} className="bn-question" style={{ animationDelay: `${i * 0.15}s` }}>
            <span className="bn-question__num">Q{i + 1}.</span>
            <span className="bn-question__text">{q}</span>
          </div>
        ))}
      </div>
      <div className="bn-narration"><p>{narrations[2]}</p></div>
    </div>
  );
}

// Step 4: Q3 questions
function BN4() {
  return (
    <div className="bn-stage">
      <div className="bn-questions">
        <div className="bn-questions__title">Q3 — Item 8 Auditor Report</div>
        {[
          "Which CPA firm is the current auditor, and when did it become Tesla's auditor?",
          "Is the opinion unqualified based on the auditor's report? Explain the reasons for your answer.",
        ].map((q, i) => (
          <div key={i} className="bn-question" style={{ animationDelay: `${i * 0.15}s` }}>
            <span className="bn-question__num">Q{i + 1}.</span>
            <span className="bn-question__text">{q}</span>
          </div>
        ))}
      </div>
      <div className="bn-narration"><p>{narrations[3]}</p></div>
    </div>
  );
}

// Step 5: Outro
function BN5() {
  return (
    <div className="bn-stage">
      <div className="bn-outro">
        <div className="bn-outro__rule" />
        <div className="bn-outro__text">
          Tags, sheet, verification, story.
        </div>
        <div className="bn-outro__sub">
          Do this once with Tesla —<br />
          and you can do it with any public company on EDGAR.
        </div>
        <div className="bn-outro__rule" />
      </div>
      <div className="bn-narration"><p>{narrations[4]}</p></div>
    </div>
  );
}
