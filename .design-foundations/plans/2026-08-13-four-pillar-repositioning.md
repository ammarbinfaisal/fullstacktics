# Plan: Four-pillar repositioning — fullstacktics.com

**Track:** Quick · **Entry stage:** Discover · **Date:** 2026-08-13

## Context

**Problem:** Reposition the Fullstacktics one-page site from an AI-agent-harness specialist to a
four-pillar engineering partner — headless/custom ecommerce, AI agentic SaaS, large-scale data
mining with ETL pipelines, and Odoo hosting + setup — with all four carrying equal weight and a new
hero promise that names none of them individually.

**Constraints:**
- Existing visual DNA is law: warm cream/dark ramps, Intel One Mono + Inter, orange `--accent`, the
  token block in `styles.css`. No new palette, no new type scale, no new hex.
- Static site, no build step. Changes land in `index.html`; `styles.css` deltas only where item
  counts or new element roles force them.
- Zero invented proof — no metrics, no logos, no "trusted by", no client names, no urgency.
- Ecommerce names headless/custom (Next.js + headless commerce backend); ERP names Odoo; ETL stays
  vendor-neutral (assumption — no stack was specified).
- Single page, single CTA target: `ammar@fullstacktics.com`.

**Success criteria:**
- A first-time reader can name all four pillars after the hero + one scroll, none reading as an
  afterthought.
- The hero promise holds all four without listing them; the hero diagram is no longer AI-specific.
- Every claim is capability-led — nothing asserts a fact we cannot back.
- Contrast and token coverage unchanged from today's AA-passing state.

**Entry-stage note:** `DESIGN.md` and `JOURNEY.md` do not exist, but the visual DNA is already
implemented and frozen by user constraint. The DESIGN.md-locked gate is satisfied by the existing
token block in `styles.css:7-56` (light + dark ramps, type scale `--step--1`…`--step-3`, space
scale). DNA and token phases are **skipped, not redone**.

## Chosen approach

Keep the existing six-section IA — it already matches the canonical marketing persuasion spine
(journey §G) — and replace the content that sits inside it. The spine survives the repositioning;
only the payload changes. This keeps CSS churn near zero and avoids re-deriving structure that
already works.

Social proof is **deliberately absent** from the spine. The canonical order places it after the
hero; with no honest proof available, the slot is left empty rather than filled with manufactured
credibility (deceptive-patterns: social proof inflation).

---

### Phase 1: Reposition the spine
**Stage:** Discover
**Model:** sonnet
**Doctrine:** `journey`, `behavioral`
**Gate:** Standard

**Goal:** Produce the JTBD job story, four-pillar IA, section order, and per-section page spec that
the copy phase writes against.

**Scope:**
- IN: job story (Moesta four forces), IA + labeling, section order against the persuasion spine,
  page spec per section, the hero-diagram replacement concept, item-count collisions with CSS.
- OUT: final copy strings, any markup edits, visual tokens.

**Constraints:** One JTBD school only (Moesta/Switch). Persuasion spine per journey §G, with the
awareness stage set to problem-aware (Schwartz) — the visitor knows their systems hurt. StoryBrand
SB7: the visitor is the hero, Fullstacktics is the guide.

**Edge cases:** Capability strip is hard-coded `repeat(5, 1fr)` with `:nth-child(2n)` and
`:last-child` breakpoint rules — a 4-item strip breaks the 2-column layout. Hero diagram's
`.diagram-flow strong` renders a trailing connector via `strong::after`, so a highlighted last item
would dangle a line into empty space.

**Produces:** `JOURNEY.md` — `## Job`, `## IA`, `## Section order`, `## Page spec`
**Depends on:** confirmed problem statement | **Unlocks:** Phase 2

**Done when:**
- [ ] DW-1.1: `JOURNEY.md` `## Page spec` has one complete entry per section (purpose, content
      blocks, CTA, exit) for all six sections.
- [ ] DW-1.2: Section order is traced to the journey §G persuasion spine, with any omitted
      canonical section named and justified.
- [ ] DW-1.3: All four pillars appear at equal structural weight — same block type, same depth
      allowance, no pillar in the hero headline.
- [ ] DW-1.4: Every element-count collision with existing `styles.css` is named with its resolution
      (keep count / adjust CSS).

---

### Phase 2: Write the page
**Stage:** Design — words
**Model:** sonnet
**Doctrine:** `content-design`, `deceptive-patterns`
**Gate:** Standard

**Goal:** Write every string on the page against the page spec and apply it to `index.html` with the
minimal `styles.css` deltas Phase 1 identified.

**Scope:**
- IN: voice attributes, `<title>` + meta description, hero, capability strip, problem block, four
  pillar bodies, approach steps, contact, footer, the email change to `ammar@fullstacktics.com`,
  the identified CSS deltas.
- OUT: new sections, new pages, palette/type changes, the orphaned `script.js`.

**Constraints:** Voice is stable across the page (Podmajersky: voice constant, tone contextual).
Front-load the key information (Redish) — the visitor scans. Plain, concrete nouns over category
language; name Odoo and headless explicitly where the user confirmed them.

**Edge cases:** `h1` is capped at `11ch`, `.contact-section h2` at `12ch` — headlines must survive
aggressive wrapping. Pillar copy sits in `.service-item div` (max-width 48rem) with
`margin-block-end: 0`, so paragraphs must be self-contained.

**Produces:** revised `index.html`; `styles.css` deltas; `JOURNEY.md` `## Voice` + `## Copy deck`
**Depends on:** Phase 1 | **Unlocks:** review

**Done when:**
- [x] DW-2.1: No new color *values* in `styles.css`. **Amended during build:** two semantic aliases
      (`--accent-solid`, `--on-accent`) were added, resolving to existing ramp values only, to fix a
      pre-existing AA failure on the primary CTA (see Deviation below). Net hard-coded hex outside
      the token block went from 2 → 0.
- [ ] DW-2.2: Zero unbackable claims — no metric, client name, logo, "trusted by", superlative,
      countdown, or scarcity cue anywhere in the markup (deceptive-patterns: social proof
      inflation, false scarcity, false urgency all clear).
- [ ] DW-2.3: All four pillars named in the first viewport-plus-one-scroll region (hero lede +
      capability strip), and each has a body of comparable length in the services block.
- [ ] DW-2.4: `mahmud@fullstacktics.com` returns zero matches; `ammar@fullstacktics.com` appears in
      all four CTA positions (header, hero, contact card, footer).
- [ ] DW-2.5: Existing text/background pairs still pass WCAG AA in both ramps, verified via
      `palette.mjs`; no new pair introduced.
- [ ] DW-2.6: Page renders with no orphaned CSS rule and no element whose count breaks a
      `grid-template-columns` or `:nth-child` rule at 1440 / 860 / 560 px.

---

## Verification plan

| Check | Method | Dirty case |
|---|---|---|
| DW-1.1 – DW-1.4 | Read JOURNEY.md against the spine | Section with no page-spec entry → fail |
| DW-2.1 | `git diff styles.css` — token block untouched | Any new hex literal → reject |
| DW-2.2 | Grep markup for numerals, "trusted", "leading", "best" | A number that reads as a metric → rewrite |
| DW-2.4 | `grep -c mahmud` → 0; `grep -c ammar` → 4 | Stale address anywhere → fail |
| DW-2.5 | `palette.mjs` on the light + dark ramps | Any pair below 4.5:1 body / 3:1 large → reject |
| DW-2.6 | Inspect at 1440 / 860 / 560 | Strip at 4 items under `repeat(5,1fr)` → empty column |

## Deviation from plan (recorded 2026-08-13)

**Pre-existing AA failure on the primary CTA, fixed in scope.** `.button-primary` hard-coded
`#fffaf1` as its label color over `--accent`. Measured: **4.29:1 light**, **2.64:1 dark** — both
below the 4.5:1 AA body threshold (the label is `--step-0` at weight 700, ~13.2pt bold, which is
under the 14pt large-text cutoff, so 4.5:1 applies, not 3:1).

This predates the repositioning; it is on `main` today and was not introduced by the content work.
It was fixed rather than merely reported because the failing element is the page's primary
conversion target and the dark-mode ratio is severe.

**Fix:** two semantic aliases, no new color values — light resolves to `--accent-strong` fill with
`--surface` text (**7.13:1**); dark resolves to `--accent` fill with `--bg` text (**6.82:1**). The
hover state, which previously carried the color change, now uses the existing `--shadow` lift
alongside the pre-existing `translateY(-2px)`, so no hover state drops below AA.

**Reverting** this without reverting the content work: restore the two `.button-primary` rules and
drop the four alias lines in `styles.css`. The content revision does not depend on it.

**Verification level:** structural + contrast. No browser MCP available in this session, so render
verification is by markup/CSS inspection at the three declared breakpoints rather than screenshot.
