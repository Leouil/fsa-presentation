import { useEffect, useRef } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./BalanceSheet.css";
import { narrations } from "./narrations";

const ROWS = [
  "Total current assets",
  "Total assets",
  "Total current liabilities",
  "Total liabilities",
  "Total stockholders' equity",
  "Total liabilities and equity",
];

export default function BalanceSheet({ step, mode }: ChapterStepProps) {
  if (step === 0) return <BS1 />;
  if (step >= 1 && step <= 6) return <BSRows step={step} />;
  if (step === 7) return <BSAssetsCurrent />;
  if (step === 8) return <BSCopyTags />;
  return <BSVideo mode={mode} />;
}

function BS1() {
  return (
    <div className="bs-stage">
      <div className="bs-target">
        <div className="bs-target__label">Target:</div>
        <div className="bs-target__count">6 Balance Sheet Numbers</div>
      </div>
      <div className="bs-narration"><p>{narrations[0]}</p></div>
    </div>
  );
}

function BSRows({ step }: { step: number }) {
  const visibleCount = step;
  return (
    <div className="bs-stage">
      <div className="bs-screenshot-wrap">
        <img src={`${import.meta.env.BASE_URL}assets/06-bs-6rows.png`} alt="Balance Sheet" className="bs-screenshot" />
      </div>
      <div className="bs-highlight-overlay">
        {ROWS.slice(0, visibleCount).map((r, i) => (
          <div key={i} className="bs-highlight-row" style={{ animationDelay: `${i * 0.08}s` }}>
            {r}
          </div>
        ))}
      </div>
      <div className="bs-narration"><p>{narrations[step]}</p></div>
    </div>
  );
}

function BSAssetsCurrent() {
  return (
    <div className="bs-stage">
      <div className="bs-assetscurrent">
        <div className="bs-assetscurrent__row">
          <span className="bs-assetscurrent__label">Total current assets</span>
          <span className="bs-assetscurrent__tag">AssetsCurrent</span>
        </div>
        <div className="bs-assetscurrent__data">
          {["2021", "2022", "2023", "2024", "2025"].map((yr, i) => (
            <div key={i} className="bs-assetscurrent__cell" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="bs-assetscurrent__yr">{yr}</div>
              <div className="bs-assetscurrent__num">47,291</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bs-narration"><p>{narrations[7]}</p></div>
    </div>
  );
}

function BSCopyTags() {
  return (
    <div className="bs-stage">
      <div className="bs-copy-tags">
        <div className="bs-copy-tags__step">
          <div className="bs-copy-tags__num">1</div>
          <div className="bs-copy-tags__text">Go back to the 10-K</div>
        </div>
        <div className="bs-copy-tags__step">
          <div className="bs-copy-tags__num">2</div>
          <div className="bs-copy-tags__text">Click each line — copy the XBRL tag</div>
        </div>
        <div className="bs-copy-tags__step">
          <div className="bs-copy-tags__num">3</div>
          <div className="bs-copy-tags__text">Paste it in the Google Sheet</div>
        </div>
      </div>
      <div className="bs-narration"><p>{narrations[8]}</p></div>
    </div>
  );
}

function BSVideo({ mode }: { mode: "manual" | "audio" | "auto" }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onEnded = () => {
      window.dispatchEvent(new CustomEvent("presentation-video-ended"));
    };
    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, []);

  return (
    <div className="bs-stage">
      <div className="bs-video-wrap">
        <div className="bs-video-label">Demo: Add a new row &amp; type the XBRL tag</div>
        <video
          ref={videoRef}
          className="bs-video"
          src={`${import.meta.env.BASE_URL}assets/XBRL-add-new-lines.mp4`}
          controls
          playsInline
          autoPlay={mode === "auto"}
          preload="auto"
        />
        <div className="bs-video-hint">
          Copy an existing row → paste to new line → replace <code>[Add XBRL Tag Here]</code>
        </div>
      </div>
      <div className="bs-narration"><p>{narrations[9]}</p></div>
    </div>
  );
}
