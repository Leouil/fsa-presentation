import type { ChapterStepProps } from "../../registry/types";
import "./Verify.css";
import { narrations } from "./narrations";

export default function Verify({ step }: ChapterStepProps) {
  if (step === 0) return <VQ1 />;
  if (step === 1) return <VQ2 />;
  if (step === 2) return <VQSpoiler />;
  return <VQHint />;
}

function VQ1() {
  return (
    <div className="vq-stage">
      <div className="vq-equation vq-equation--pending">
        <div className="vq-equation__label">Equation 1</div>
        <div className="vq-equation__formula">
          Total Liabilities &amp; Equity <span className="vq-eq-q">?</span> Liabilities + Stockholders' Equity
        </div>
      </div>
      <div className="vq-narration"><p>{narrations[0]}</p></div>
    </div>
  );
}

function VQ2() {
  return (
    <div className="vq-stage">
      <div className="vq-equation vq-equation--check">
        <div className="vq-equation__label">Equation 2 ✓</div>
        <div className="vq-equation__formula">
          Gross Profit = Total Revenues − Total Cost of Revenues
        </div>
        <div className="vq-equation__status">Holds</div>
      </div>
      <div className="vq-narration"><p>{narrations[1]}</p></div>
    </div>
  );
}

function VQSpoiler() {
  return (
    <div className="vq-stage">
      <div className="vq-equation vq-equation--fail">
        <div className="vq-equation__label">Equation 1 ✗</div>
        <div className="vq-equation__formula">
          Total Liabilities &amp; Equity ≠ Liabilities + Stockholders' Equity
        </div>
        <div className="vq-equation__status">Fails — something sits in between</div>
      </div>
      <div className="vq-mezzanine">
        <div className="vq-mezzanine__label">? Something between</div>
        <div className="vq-mezzanine__blocks">
          <div className="vq-mezzanine__block vq-mezzanine__block--liab">Liabilities</div>
          <div className="vq-mezzanine__block vq-mezzanine__block--mid">Redeemable<br/>NCI</div>
          <div className="vq-mezzanine__block vq-mezzanine__block--equity">Stockholders'<br/>Equity</div>
        </div>
      </div>
      <div className="vq-narration"><p>{narrations[2]}</p></div>
    </div>
  );
}

function VQHint() {
  return (
    <div className="vq-stage">
      <div className="vq-hint">
        <div className="vq-hint__icon">🔍</div>
        <div className="vq-hint__text">
          Find it in Tesla's balance sheet.<br />
          And you've cracked Q1.
        </div>
      </div>
      <div className="vq-narration"><p>{narrations[3]}</p></div>
    </div>
  );
}
