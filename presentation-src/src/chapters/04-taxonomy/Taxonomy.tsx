import type { ChapterStepProps } from "../../registry/types";
import "./Taxonomy.css";
import { narrations } from "./narrations";

export default function Taxonomy({ step }: ChapterStepProps) {
  if (step === 0) return <T1 />;
  if (step === 1) return <T2 />;
  if (step === 2) return <T3 />;
  return <T4 />;
}

// Step 1: Taxonomy dictionary + tree image
function T1() {
  return (
    <div className="tx-stage">
      <div className="tx-hero">
        <img
          src={`${import.meta.env.BASE_URL}assets/03-taxonomy-tree.png`}
          alt="US GAAP Taxonomy"
          className="tx-taxonomy-img"
        />
        <div className="tx-taxonomy-label">
          US GAAP Financial Reporting Taxonomy
        </div>
      </div>
      <div className="tx-narration"><p>{narrations[0]}</p></div>
    </div>
  );
}

// Step 2: Relationship tree
function T2() {
  return (
    <div className="tx-stage">
      <div className="tx-tree">
        <div className="tx-tree__node tx-tree__node--root">Total Assets</div>
        <div className="tx-tree__branch">
          <div className="tx-tree__node tx-tree__node--mid">Current Assets</div>
          <div className="tx-tree__node tx-tree__node--leaf">Cash</div>
        </div>
      </div>
      <div className="tx-narration"><p>{narrations[1]}</p></div>
    </div>
  );
}

// Step 3: Cash tag definition
function T3() {
  return (
    <div className="tx-stage">
      <div className="tx-cash-card">
        <div className="tx-cash-card__tag">Cash</div>
        <div className="tx-cash-card__def">
          Amount of currency on hand as well as demand deposits with banks or financial institutions.
          Includes other kinds of accounts that have the general characteristics of demand deposits.
          Excludes cash and cash equivalent within disposal group and discontinued operation.
        </div>
        <div className="tx-cash-card__footnote">
          Separate tag for footnote disclosure: <em>CashAndCashEquivalentsFootnote</em>
        </div>
      </div>
      <div className="tx-narration"><p>{narrations[2]}</p></div>
    </div>
  );
}

// Step 4: Who uses tags
function T4() {
  return (
    <div className="tx-stage">
      <div className="tx-users">
        {[
          { label: "Analysts", desc: "Valuation models", icon: "📊" },
          { label: "Auditors", desc: "Error detection", icon: "🔍" },
          { label: "Regulators", desc: "SEC · IRS compliance", icon: "⚖️" },
        ].map((u, i) => (
          <div key={i} className="tx-user" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="tx-user__icon">{u.icon}</div>
            <div className="tx-user__label">{u.label}</div>
            <div className="tx-user__desc">{u.desc}</div>
          </div>
        ))}
      </div>
      <div className="tx-narration"><p>{narrations[3]}</p></div>
    </div>
  );
}
