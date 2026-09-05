/**
 * Chapter 2 — what-is-xbrl: What XBRL Actually Is
 * 4 steps · ~25s
 */
export const narrations = [
  "So what is XBRL? It stands for eXtensible Business Reporting Language.",
  "It's a flavor of XML, built for one job: organizing financial data so that computers can read it.",
  "Here's the idea. Every piece of financial data gets its own tag. Total assets? The tag is literally called \"Assets.\"",
  "And suddenly, a giant PDF-style filing becomes machine-readable data. Ready for analysts, investors, lenders — anyone.",
] as const;

export const TOTAL_STEPS = narrations.length; // 4
