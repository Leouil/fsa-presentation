/**
 * Chapter 6 — balance-sheet-numbers: Grab the Six Balance Sheet Numbers
 * 10 steps · ~35s
 */
export const narrations = [
  "First target: six balance sheet numbers.",
  "Total current assets.",
  "Total assets.",
  "Total current liabilities.",
  "Total liabilities.",
  "Total stockholders' equity.",
  "And total liabilities and equity.",
  "We already know the first tag — AssetsCurrent. Drop it into the first row under the Balance sheet header, and the numbers just appear.",
  "For the other five, go back to the 10-K, click each line, copy the tag, paste it in.",
  "Need more rows? Watch the video below — add a new line, copy an existing row, then replace the XBRL tag name.",
] as const;

export const TOTAL_STEPS = narrations.length; // 10
