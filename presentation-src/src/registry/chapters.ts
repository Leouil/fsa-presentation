import type { ChapterDef } from "./types";
import HookChapter from "../chapters/01-hook/Hook";
import WhatIsXbrlChapter from "../chapters/02-what-is-xbrl/WhatIsXbrl";
import SecMandateChapter from "../chapters/03-sec-mandate/SecMandate";
import TaxonomyChapter from "../chapters/04-taxonomy/Taxonomy";
import HandsOnSetupChapter from "../chapters/05-hands-on-setup/HandsOnSetup";
import BalanceSheetChapter from "../chapters/06-balance-sheet-numbers/BalanceSheet";
import IncomeStatementChapter from "../chapters/07-income-statement/IncomeStatement";
import VerifyChapter from "../chapters/08-verify/Verify";
import BeyondNumbersChapter from "../chapters/09-beyond-numbers/BeyondNumbers";

import { narrations as hookNarrations } from "../chapters/01-hook/narrations";
import { narrations as whatIsXbrlNarrations } from "../chapters/02-what-is-xbrl/narrations";
import { narrations as secMandateNarrations } from "../chapters/03-sec-mandate/narrations";
import { narrations as taxonomyNarrations } from "../chapters/04-taxonomy/narrations";
import { narrations as handsOnSetupNarrations } from "../chapters/05-hands-on-setup/narrations";
import { narrations as balanceSheetNarrations } from "../chapters/06-balance-sheet-numbers/narrations";
import { narrations as incomeStatementNarrations } from "../chapters/07-income-statement/narrations";
import { narrations as verifyNarrations } from "../chapters/08-verify/narrations";
import { narrations as beyondNumbersNarrations } from "../chapters/09-beyond-numbers/narrations";

/**
 * Order = order of presentation.
 *
 * Each chapter MUST provide a `narrations: Narration[]` array. Its length
 * is the chapter's step count — there is no `totalSteps` to maintain
 * separately. This guarantees the audio synthesis pipeline, the runtime
 * stepper, and the chapter `.tsx` switch on `step` cannot drift apart.
 *
 * Visual styling (color, fonts) comes entirely from the active theme —
 * chapters never hard-code palette / font names.
 */
export const CHAPTERS: ChapterDef[] = [
  { id: "hook",             title: "Cold Open: Invisible Name Tags",  narrations: hookNarrations,            Component: HookChapter },
  { id: "what-is-xbrl",     title: "What XBRL Actually Is",         narrations: whatIsXbrlNarrations,     Component: WhatIsXbrlChapter },
  { id: "sec-mandate",      title: "SEC Mandate + Five Statements",  narrations: secMandateNarrations,     Component: SecMandateChapter },
  { id: "taxonomy",         title: "US GAAP Taxonomy",               narrations: taxonomyNarrations,        Component: TaxonomyChapter },
  { id: "hands-on-setup",   title: "Hands-On: Tesla 10-K + Sheet",   narrations: handsOnSetupNarrations,   Component: HandsOnSetupChapter },
  { id: "balance-sheet-numbers", title: "Six Balance Sheet Numbers",  narrations: balanceSheetNarrations,  Component: BalanceSheetChapter },
  { id: "income-statement", title: "Three Income Statement Numbers",  narrations: incomeStatementNarrations,Component: IncomeStatementChapter },
  { id: "verify",           title: "Q1: Verify the Two Equations",    narrations: verifyNarrations,         Component: VerifyChapter },
  { id: "beyond-numbers",  title: "Beyond the Numbers",              narrations: beyondNumbersNarrations,   Component: BeyondNumbersChapter },
];
