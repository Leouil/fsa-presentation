import type { ChapterStepProps } from "../../registry/types";
import "./IncomeStatement.css";
import { narrations } from "./narrations";

export default function IncomeStatement({ step }: ChapterStepProps) {
  if (step === 0) return <IS1 />;
  if (step === 1) return <ISRow label="Total revenues" tag="Revenues" step={step} />;
  if (step === 2) return <ISRow label="Total cost of revenues" tag="CostOfRevenue" step={step} />;
  if (step === 3) return <ISRow label="Gross profit" tag="GrossProfit" step={step} />;
  return <ISDone />;
}

function IS1() {
  return (
    <div className="is-stage">
      <div className="is-target">
        <div className="is-target__label">Income Statement</div>
        <div className="is-target__count">Three Numbers</div>
      </div>
      <div className="is-narration"><p>{narrations[0]}</p></div>
    </div>
  );
}

function ISRow({ label, tag, step }: { label: string; tag: string; step: number }) {
  return (
    <div className="is-stage">
      <div className="is-row">
        <div className="is-row__label">{label}</div>
        <div className="is-row__tag">{tag}</div>
      </div>
      <div className="is-narration"><p>{narrations[step]}</p></div>
    </div>
  );
}

function ISDone() {
  return (
    <div className="is-stage">
      <div className="is-done">
        <div className="is-done__years">2021 · 2022 · 2023 · 2024 · 2025</div>
        <div className="is-done__check">✓ All three income statement numbers filled</div>
      </div>
      <div className="is-narration"><p>{narrations[4]}</p></div>
    </div>
  );
}
