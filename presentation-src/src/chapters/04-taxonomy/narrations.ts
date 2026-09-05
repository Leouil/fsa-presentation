/**
 * Chapter 4 — taxonomy: The Tag Dictionary: US GAAP Taxonomy
 * 4 steps · ~27s
 */
export const narrations = [
  "So where do all these tags come from? A giant dictionary called the US GAAP Financial Reporting Taxonomy.",
  "It defines every element — cash, accounts payable, you name it. And it defines the relationships between them. Cash is part of current assets. Current assets are part of total assets. The taxonomy knows the whole family tree.",
  "Take the tag \"Cash.\" Its official definition: currency on hand, plus demand deposits at banks. There's even a separate tag for the entire cash footnote disclosure.",
  "Why should you care? Because tags turn filings into data. Analysts value companies with them. Auditors hunt for errors with them. Regulators — the SEC, the IRS — check compliance with them.",
] as const;

export const TOTAL_STEPS = narrations.length; // 4
