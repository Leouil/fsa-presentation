/**
 * Chapter 5 — hands-on-setup: Hands-On: Tesla 10-K + Sheet Setup
 * 7 steps · ~46s
 */
export const narrations = [
  "OK, let's go hands-on. Tesla's 2025 10-K is live on the SEC's EDGAR database, in the inline viewer.",
  "Head to Part II, Item 8. That's where the consolidated balance sheet and the statements of operations live.",
  "Now click any number — say, total current assets. A box pops up, and there it is: the tag name. AssetsCurrent.",
  "That tag is the magic word. So next, open the Google Sheet toolkit — it's called \"Financial Statement Analysis.\"",
  "Log into your Google account, open the sheet, then click File, Make a copy. Now it's yours to edit.",
  "Right now the sheet is showing Microsoft. Find Tesla's ticker — TSLA — swap it in, and set the year to 2025.",
  "And just like that, the sheet reaches into EDGAR and pulls five years of Tesla data — 2021 through 2025.",
] as const;

export const TOTAL_STEPS = narrations.length; // 7
