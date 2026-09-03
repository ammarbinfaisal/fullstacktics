# JOURNEY.md — fullstacktics.com

Companion to the implemented visual DNA in `styles.css` (token block, lines 33–100).
Plan: `.design-foundations/plans/2026-09-03-three-pillar-ai-retheme.md`

Supersedes the four-pillar positioning (Ecommerce · AI Agentic SaaS · ETL · Odoo ERP) recorded in
`.design-foundations/plans/2026-08-13-four-pillar-repositioning.md`. That document is retained as a
dated record of a past decision, not as live spec.

---

## Job

**JTBD school: Moesta / Switch interview.** One school only — no mixed vocabulary.

**Job story:** When an AI feature works in the demo and then fails in front of real users — wrong
context retrieved, a tool called with the wrong argument, a prompt change nobody can prove helped —
I want a team that builds the layer underneath the model rather than another prototype, so I can
ship the thing instead of continuing to evaluate it by feel.

**Four forces:**

| Force | What it is here |
|---|---|
| **Push** | The demo worked and production did not. Failures are confident and plausible rather than loud, so they surface as customer complaints instead of alerts. |
| **Pull** | One team that owns retrieval, agent behavior, and the harness around them — so the seam between "the model" and "the system" is somebody's job by default. |
| **Anxiety** | "Everyone claims AI expertise now." "They'll wrap an API and call it an agent." "We'll be locked into a harness only they understand." |
| **Habit** | The in-house prototype somebody already built, the vendor demo that impressed a stakeholder, the belief that one more prompt revision will fix it. |

**Anxiety remains the binding constraint** (Fogg: motivation-adequate, anxiety-blocked — the
visitor already wants working AI; the market has supplied enthusiasm and withheld evidence). The
page's job is therefore to *reduce anxiety*, not to raise desire. Every section is graded against
that: specificity beats enthusiasm, and falsifiable claims beat both.

Julian Shapiro's conversion equation, `Purchase = Desire − (Labor + Confusion)`: desire is already
present, so the whole page works the subtrahend. Named mechanisms (traces, eval sets, reranking,
typed tools), concrete verbs, and a single low-labor CTA (one email address, four placements) are
the levers.

**Why "measure first" is the credibility carrier.** With no social proof on the page, method
specificity does the work. "We build the eval set before we touch the system" is the most
falsifiable sentence an AI shop can write — it is checkable on the first engagement, which is
exactly what a claim needs to be in an anxiety-blocked decision.

---

## IA

**Organization scheme:** ambiguous / **topic** (Rosenfeld & Morville). Three service topics, peer
level, no hierarchy between them.

**Structure:** single-page **sequential** — one scroll path, no branching. Global nav is anchor-only
and unchanged (Services · Approach · Contact), which stays inside Hick's law comfort: three visible
options plus a persistent CTA.

| Pillar | Label used | Why |
|---|---|---|
| Agentic systems | "Agentic AI" | The confirmed positioning term |
| Retrieval | "RAG and Retrieval" | RAG is the searched term; "and Retrieval" keeps it legible to buyers who do not use the acronym |
| Harness | "AI Harness Development" | Harness = the AI **+ tooling layer**: tools, orchestration, traces, evals, guardrails, fallbacks. Not evaluation alone. |

**Equal-weight rule:** all three pillars occupy the same block type (`.service-item`), carry the
same numbering treatment, and get comparable body length. No pillar appears in the `h1`. The
capability strip lists the three plus their three most concrete sub-capabilities before any is
elaborated.

---

## Section order

Traced to the canonical marketing persuasion spine. Awareness stage: **problem-aware** (Schwartz) —
the visitor knows their AI work is not landing, so the page opens on value, not on education.
StoryBrand SB7: the visitor is the hero, Fullstacktics is the guide with a plan.

| # | Section | Spine slot | Job |
|---|---|---|---|
| 1 | Hero | Hero — value prop + primary CTA | Broad promise holding all three; primary CTA |
| 2 | Capability strip | (scan layer) | Name the pillars and their parts before elaboration |
| 3 | Problem | Problem / pain | Name the production-failure pain the visitor already has |
| 4 | Services | Solution — features as benefits | Three peer pillars, equal depth |
| 5 | Approach | How it works | Answer "everyone claims this" with a falsifiable method |
| 6 | Contact | Final CTA | One low-labor next step |

**Omitted canonical sections, and why:**

- **Social proof / testimonials** — canonically sits directly after the hero. Left *empty*, not
  filled. There is no honest proof to show; manufacturing it is social-proof inflation
  (deceptive-patterns). The Approach section carries the credibility load instead, via method
  specificity rather than borrowed authority.
- **Pricing, FAQ, stakes, success vision** — out of scope for a one-page site with a conversation
  CTA. Adding them would raise Labor without raising Desire.
- **Objection handling** — not a standalone section; folded into Approach, which is where the
  "locked into a harness we don't understand" anxiety is answered directly (step 4).

---

## Page spec

Single page. Entry: direct / referral / search. States: static page, no loading/empty/error states.

**Exits, in ascending commitment:**

| Exit | Target | Labor |
|---|---|---|
| Email | `mailto:ammar@fullstacktics.com` — header, hero, contact card, footer | Compose a message |
| 15-min intro | `cal.com/ammarbinfaisal/15min` — contact | Pick a slot |
| 30-min deep dive | `cal.com/ammarbinfaisal/30min` — contact | Pick a slot |

The email target recurs at every natural resting point of the scroll (Fitts's law) rather than
living in one place. The booking targets appear **once**, at the contact section — they are the
higher-commitment exit, and repeating them up-page would raise Labor before the page has finished
lowering anxiety.

**Why two durations, not one:** anxiety is the binding force (see `## Job`). A single 30-minute ask
is the wrong first step for a visitor still deciding whether the team is credible; a 15-minute
option lets them de-risk without committing an afternoon. The durations are *disambiguated in copy*
immediately above the buttons — a bare "15 min / 30 min" pair makes the visitor guess which is for
them, which is Confusion in the conversion equation.

**Ethics check (deceptive-patterns):** neither booking option is pre-selected, obscured, or made
harder to reach than the other; the lower-commitment option is not hidden or confirmshamed. Email
remains a fully equal third path, not a downgraded one.

### 1. Hero
- **Purpose:** state a promise broad enough to hold three pillars without naming any in the headline.
- **h1:** "AI that survives contact with production." Names the anxiety directly rather than the
  capability — 43 chars, capped at `14ch` so it breaks to three lines at `--step-4`.
- **CTA:** primary → mailto. Secondary → `#services`, because with three peer pillars the next thing
  a visitor wants is *what are they*, not *how do you work*.

### 2. Capability strip
- **Count: 6 items**, hard-coded `repeat(6, 1fr)`.
- **Why 6 and not 3:** three cells across the 1240px shell yields ~400px cells holding one short
  word each — the strip stops reading as a scan band and starts reading as three empty boxes. Six
  items (three pillars + Evals · Guardrails · Deployment and ops) keeps the density the pattern
  needs, and the three additions make the harness pillar concrete rather than abstract.
- **6 is even**, which matters: the previous 5-item version needed a
  `span:last-child { grid-column: 1 / -1 }` rule at the 860px breakpoint purely to rescue an orphan.
  **That rule is deleted.** Leaving it in would make item 6 span both columns for no reason — a
  "looks fine but slightly off" bug rather than an obvious one.

### 3. Problem
- **Count:** 3 articles (`.problem-grid`).
- Demos don't survive production / Retrieval returns the wrong context / No evals, so nobody knows.
- The third deliberately sets up the harness pillar, and the first two are ordered so that the
  reader meets the *symptom* before the *cause*.

### 4. Services
- **Count: 3** `.service-item` rows. `.service-list` is a grid with no fixed column count and
  per-item borders, so the count change required **no CSS change** — same as the 5→4 change before it.
- **Order:** Agentic AI · RAG and Retrieval · AI Harness Development.

### 5. Approach
- **Count: 4 steps**, `.process-list` is `repeat(4, 1fr)`. **Kept at 4** — three steps would leave a
  2+1 orphan at the 860px two-column breakpoint, and the fourth step is load-bearing (see below).
- Scope · Baseline · Build · Run.
- **Step 1 (Scope)** answers "they'll wrap an API and call it an agent": the work starts by making
  the task gradeable, which is the opposite of a demo.
- **Step 4 (Run it, then hand it over)** is retained near-verbatim from the previous positioning.
  It answers the "we'll be locked in / they'll disappear after handover" anxiety, which survived the
  repositioning unchanged.

### 6. Contact
- **Blocks:** eyebrow · `h2` (capped `14ch`) · body naming a concrete symptom per pillar · duration
  hint · two booking buttons · contact card with the address.
- **Booking buttons live in the left column, not the card.** The card is columns 9–13; button labels
  would wrap badly at that width. `align-items: end` bottom-aligns the card against the button row.

---

## Hero diagram

The previous panel was a four-layer *system stack* converging on `One system of record`. Two of its
four layers (ETL, Odoo) no longer exist, so it was rebuilt around the thing now being sold.

**Current: the agent run.** Five nodes, last one highlighted:

```
Context   ← retrieval: rank and cite what the model sees
Tools     ← harness: narrow, typed, permissioned
Loop      ← agentic: plan, act, observe, repeat
Traces    ← harness: every step recorded
Evals     ← the payoff  (highlighted)
```

**Why the highlight lands on Evals:** `.diagram-flow strong` is the dominant element in the most
prominent panel on the page. Placing it on any single pillar contradicts equal weight; placing it on
`Evals` states the actual thesis — the run produces the evidence that governs the next change. The
loop closes.

**Emphasis is inverted fill, not hue.** `background: var(--text); color: var(--bg)` — 18.06:1 light,
17.42:1 dark. A stronger focal signal than the tinted panel it replaces, and it costs no palette in
a monochrome design.

> **Load-bearing CSS.** `.diagram-flow strong::after` draws a downward connector. `Evals` is the last
> child, so without a `:not(:last-child)` guard it dangles a line into empty space below the panel.
> The guard is present on **both** the `span` and `strong` selectors and must survive any future
> rewrite of this file.

---

## Visual DNA

**Aesthetic direction: editorial technical.** Refined restraint (generous vertical rhythm, wide type
scale, near-monochrome) crossed with industrial utility (mono for data and labels, never for
decoration). Not "clean and modern" — that is the absence of a direction.

**Hierarchy ladder, in strict order (Kadavy ch. 7):** white space → size → weight → color. The
previous design built hierarchy with a warm orange accent on eyebrows, numbers, links, and titles;
that is the weakest rung, which is why it read as brand template rather than editorial. Color is now
demoted to a *state* tool.

- **White space.** `--space-3xl` (up to 11rem) sets section rhythm. This single change does more for
  the premium read than any color decision.
- **Size.** Perfect fourth (1.333). `--step-4` exists solely for the `h1`, which now sits a full tier
  above any `h2` — previously they shared a tier, which is why the old hero had two focal points.
- **Weight.** Two weights only: 400 body, 500 headings.
- **Color.** Near-monochrome. Off-white ground (`#f6f5f2`), warm near-black ink (`#0b0b0a`) — never
  pure `#000`/`#fff`, which read flat (ch. 9: pure black "nearly does not exist in nature").

**The single chromatic value is `--focus-ring`.** Keyboard focus must be unmistakable and must not be
confusable with hover, so it gets the only hue on the page — blue, the conventional focus color.
Hover shifts underline thickness instead of hue.

**Contrast contract (verified):**

| Pair | Light | Dark | Min |
|---|---|---|---|
| `--text` on `--bg` | 18.06:1 | 17.42:1 | 4.5 |
| `--muted` on `--bg` | 7.07:1 | 8.08:1 | 4.5 |
| `--on-accent` on `--accent-solid` | 18.08:1 | 17.42:1 | 4.5 |
| `--soft` as a border | 4.23:1 | 5.33:1 | 3.0 |

> **`--soft` is a border token.** It clears the 3:1 non-text minimum but **not** the 4.5:1 body-text
> minimum. It must never carry text. All text uses `--text` or `--muted`. This is the easiest rule in
> the file to break by accident, because `--soft` looks like a text color.

> **`.button-secondary` borders use `--soft`, never `--line`.** `--line` composites to ~1.4:1, well
> below the 3:1 a control boundary must clear. The previous revision fixed this scoped to the contact
> panel only; it is now global.

**Layout:** 12-column grid on the shell. Hero is an asymmetric 7/5 (copy `1 / 8`, panel `9 / 13`);
section headings occupy the left columns with a deliberately empty right gutter. The previous
near-symmetric layout read as a template. Square corners throughout — fully-rounded pills were the
strongest SaaS-template tell on the old page. No background gradients, no grid overlay, no global
shadow: elevation comes from surface value and hairlines.

**Fonts:** Inter + Intel One Mono retained, roles changed. Inter is a display face here at
`--step-4`/weight 500/`-0.035em`; `cv05` and `ss03` are enabled to move it off its default
neutrality. Tracking is set per level rather than as one blanket value — the old `-0.04em` applied to
small sizes was actively harmful. Mono carries all eyebrows, numbers, labels, strip, and button text:
it is *honest* here, since this is a company that reads traces.

---

## Voice

Voice is stable across the page; tone does not vary (no error/success/celebration moments on a
static marketing page). Four attributes, each with its out-of-range expression
(Podmajersky: concrete adjectives, not vague ones):

| Attribute | In range | Out of range |
|---|---|---|
| **Direct** | "We deploy it, watch it, and fix what breaks." | "We'd love to explore how we might help." |
| **Specific** | "Hybrid search with reranking, and citations back to source." | "Enterprise-grade AI transformation." |
| **Unhyped** | "Agents that do bounded work." | "Autonomous, cutting-edge, 10x." |
| **Falsifiable** | "We build the eval set before we touch the system." | "We follow best practices." |

**Scannability (Redish):** every `h3` is a noun phrase that survives being read alone; every body
paragraph front-loads its subject in the first four words; no paragraph exceeds two sentences.

**Ban-list applied (deceptive-patterns):** no fabricated social proof, no manufactured scarcity
("limited slots"), no manufactured urgency (countdowns, "book before"), no confirmshaming on the
CTA, no metric the team cannot produce on request, and no claim about model capability that the
harness cannot demonstrate in a trace.
