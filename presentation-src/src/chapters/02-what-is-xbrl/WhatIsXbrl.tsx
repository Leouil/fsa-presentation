import type { ChapterStepProps } from "../../registry/types";
import "./WhatIsXbrl.css";
import { narrations } from "./narrations";

export default function WhatIsXbrl({ step }: ChapterStepProps) {
  if (step === 0) return <XS1 />;
  if (step === 1) return <XS2 />;
  if (step === 2) return <XS3 />;
  return <XS4 />;
}

// Step 1: Full name
function XS1() {
  return (
    <div className="xs-stage">
      <div className="xs-hero-title">
        <img
          src={`${import.meta.env.BASE_URL}assets/02-xbrl-acronym.png`}
          alt="XBRL full name"
          className="xs-xbrl-img"
        />
      </div>
      <div className="xs-narration"><p>{narrations[0]}</p></div>
    </div>
  );
}

// Step 2: XML / tagging concept
function XS2() {
  return (
    <div className="xs-stage">
      <div className="xs-xml-diagram">
        <div className="xs-xml-tag">&lt;Assets&gt;119,437&lt;/Assets&gt;</div>
        <div className="xs-xml-arrow">↓</div>
        <div className="xs-xml-label">Machine-readable</div>
        <div className="xs-xml-sublabel">XML · Structured Data</div>
      </div>
      <div className="xs-narration"><p>{narrations[1]}</p></div>
    </div>
  );
}

// Step 3: Every piece gets a tag
function XS3() {
  return (
    <div className="xs-stage">
      <div className="xs-tags-grid">
        {[
          ["Balance Sheet", "Assets", "AssetsCurrent"],
          ["Cash", "Cash", "CashAndCashEquivalents"],
          ["Revenue", "Revenues", "RevenueFromContracts"],
          ["Inventory", "Inventory", "InventoryNet"],
        ].map(([doc, tag, xbrl], i) => (
          <div key={i} className="xs-tag-card" style={{ animationDelay: `${i * 0.12}s` }}>
            <div className="xs-tag-card__doc">{doc}</div>
            <div className="xs-tag-card__arrow">→</div>
            <div className="xs-tag-card__tag">{tag}</div>
            <div className="xs-tag-card__xbrl">{xbrl}</div>
          </div>
        ))}
      </div>
      <div className="xs-narration"><p>{narrations[2]}</p></div>
    </div>
  );
}

// Step 4: Who uses it
function XS4() {
  return (
    <div className="xs-stage">
      <div className="xs-users">
        {[
          { icon: "📊", label: "Financial\nAnalysts", desc: "Valuation models" },
          { icon: "🏦", label: "Investors", desc: "Investment decisions" },
          { icon: "🔍", label: "Auditors", desc: "Error detection" },
          { icon: "⚖️", label: "Regulators", desc: "SEC · IRS compliance" },
        ].map((u, i) => (
          <div key={i} className="xs-user-card" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="xs-user-card__icon">{u.icon}</div>
            <div className="xs-user-card__label">{u.label}</div>
            <div className="xs-user-card__desc">{u.desc}</div>
          </div>
        ))}
      </div>
      <div className="xs-narration"><p>{narrations[3]}</p></div>
    </div>
  );
}
