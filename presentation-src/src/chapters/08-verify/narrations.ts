/**
 * Chapter 8 — verify: Q1 — Verify the Two Equations
 * 4 steps · ~24s
 */
export const narrations = [
  "Now here's your first homework question. Check two equations. One: does total liabilities and equity equal total liabilities plus stockholders' equity?",
  "Two: does gross profit equal total revenues minus total cost of revenues?",
  "Spoiler: one of them fails. Look at Tesla's balance sheet really carefully — there's something sitting between liabilities and equity.",
  "Find it, and you've cracked Q1.",
] as const;

export const TOTAL_STEPS = narrations.length; // 4
