# Plan: Three-pillar AI repositioning + editorial re-theme — fullstacktics.com

**Track:** Full · **Entry stage:** Discover · **Date:** 2026-09-03

Supersedes `2026-08-13-four-pillar-repositioning.md`.

## Context

**Problem:** Reposition the Fullstacktics one-page site from a four-pillar engineering partner
(ecommerce · AI agentic SaaS · ETL pipelines · Odoo ERP) to a focused three-layer production-AI
studio — agentic AI, RAG and retrieval, and AI harness development — and re-theme it from warm
cream/terracotta to off-white/near-black premium. ETL pipelines and Odoo ERP are removed entirely;
ecommerce is dropped with them.

**Constraints:**
- **The visual DNA is NOT law this time.** This is the exact inverse of the 2026-08-13 constraint.
  The user asked for "Re-Theme — relayout, regrid. all new": new palette, new type scale, new space
  scale, new grid, new component treatments. `styles.css` is rewritten wholesale.
- "AI Harness" means the AI **+ tooling layer** — tool definitions, orchestration, traces, evals,
  guardrails, fallbacks — per explicit user clarification. Not evaluation alone.
- Static site, no build step, no framework, no analytics. Stays HTML + CSS on Vercel.
- Zero invented proof — no metrics, no logos, no "trusted by", no client names, no urgency.
- Contact structure preserved: `ammar@fullstacktics.com` at four placements, plus the two cal.com
  durations with their disambiguating copy.
- No new font files. Inter + Intel One Mono are already local; roles change, inventory does not.

**Success criteria:**
- A first-time reader can name all three pillars after the hero + one scroll, none reading as an
  afterthought.
- Zero remaining references to ETL, Odoo, ERP, storefronts, or ecommerce in shipped files.
- Every claim is capability-led and falsifiable — nothing asserts a fact we cannot back.
- Contrast passes WCAG AA in both ramps, verified by computation rather than assumption.
- The page does not read as AI-generated: no pure black/white, no uniform card grid, no
  fully-rounded pills, no centered-everything layout.

**Repo-state note:** the local checkout was 8 commits behind `origin/main` and held uncommitted work
for an unrelated "fullstack marketer" site. The ETL/Odoo copy existed only on `origin/main`, which is
what is deployed. Per user decision the local work was discarded (`git reset --hard origin/main`);
the prior local commit is tagged `scrap/prism-rebuild` in case it is ever wanted.

## Chosen approach

**Aesthetic direction: editorial technical.** Refined restraint crossed with industrial utility.
Hierarchy is rebuilt on Kadavy's ladder in strict order — white space → size → weight → color — where
the previous design led with color (a warm orange accent on every eyebrow, number, and link), which
is the weakest rung and the reason it read as brand template.

Key moves, each traceable to a constraint or a principle:

1. **Monochrome palette.** Off-white `#f6f5f2` ground, warm near-black `#0b0b0a` ink. Never pure
   `#000`/`#fff`. Off-white is the ch. 9 recommendation for intimacy — correct for a small direct
   team, where stark white reads as generic SaaS. The accent *is* the ink; the only chromatic value
   on the page is `--focus-ring`.
2. **`--step-4` for the `h1` alone.** The old `h1` topped out at 4rem, the same tier as a large `h2`,
   which is why the hero had two competing focal points. At up to 6.4rem it is unambiguously the
   single dominant element, which then licenses everything else to get quieter.
3. **`--space-3xl` for section rhythm.** Up to 11rem. Generous vertical rhythm is the most reliable
   perceptual cue for editorial quality, and it is doing work the background decoration used to do.
4. **12-column grid with deliberate asymmetry.** Hero 7/5; section headings in the left columns with
   an empty right gutter. Near-symmetric layouts read as templates.
5. **Decoration removed.** No radial gradients, no 44px grid overlay, no global shadow, no rounded
   corners. Elevation comes from surface value and hairlines.
6. **Emphasis by inversion, not hue.** The highlighted diagram node is `--text` on `--bg` — a stronger
   focal signal than the tint it replaces, at zero palette cost.

## Phases

1. **Reset** — `git reset --hard origin/main` after tagging the divergent local commit.
2. **Content** — rewrite `index.html`: head/meta, hero, diagram (system stack → agent run),
   capability strip (5 → 6), problem (3 new), services (4 → 3), approach (4 retargeted), contact,
   footer.
3. **Visual** — rewrite `styles.css`: tokens, both ramps, type scale, space scale, 12-col grid, every
   component, both breakpoints.
4. **Docs** — rewrite `JOURNEY.md` (content spec) and `README.md`; add this plan doc.
5. **Cleanup** — delete `assets/prism/` (20 files) and `assets/icons/` (19 files), both dead since the
   Prism-era design and unreferenced at `origin/main`.
6. **Verify** — greps for stale terms and old hexes, element counts, structural HTML validation,
   contrast computation, browser render at both themes and all breakpoints.

## Count collisions resolved

| Rule | Before | After | Resolution |
|---|---|---|---|
| `.capability-strip` | `repeat(5, 1fr)` | `repeat(6, 1fr)` | 6 chosen over 3: three cells across 1240px read as empty boxes |
| `.capability-strip span:last-child` @860px | `grid-column: 1 / -1` | **deleted** | Existed only to rescue the orphan an *odd* count creates. 6 is even. |
| `.process-list` | `repeat(4, 1fr)` | unchanged | Kept at 4 steps — 3 would orphan at the 860px 2-col breakpoint |
| `.service-list` | grid, no fixed count | unchanged | 4→3 needs no CSS, same as 5→4 before it |
| `.diagram-flow` connector | `:not(:last-child)` guard | carried forward | Highlighted final node would otherwise dangle a connector |
| `.button-secondary` border | `--soft`, scoped to contact | `--soft`, global | `--line` composites ~1.4:1, below the 3:1 control minimum |
