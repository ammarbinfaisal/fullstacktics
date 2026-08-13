# JOURNEY.md — fullstacktics.com

Companion to the implemented visual DNA in `styles.css` (token block, lines 7–56).
Plan: `.design-foundations/plans/2026-08-13-four-pillar-repositioning.md`

---

## Job

**JTBD school: Moesta / Switch interview.** One school only — no mixed vocabulary.

**Job story:** When a system we depend on starts costing us more than it returns — the storefront
can't do what we need, the data never lands, the ERP is stuck on an old version, the AI prototype
isn't reliable — I want one engineering team that can take the whole thing rather than the piece
that fits their specialty, so I can stop being the integrator between vendors who don't talk to
each other.

**Four forces:**

| Force | What it is here |
|---|---|
| **Push** | Vendor sprawl. Four systems, four suppliers, and the seams between them are the customer's own problem. Data disagrees across systems; nobody owns the gap. |
| **Pull** | One team that owns the storefront, the agents, the pipelines, and the ERP — so the integration is somebody's job by default. |
| **Anxiety** | "Generalist means mediocre at all four." "A small shop will disappear after handover." "They'll rebuild what we already have." |
| **Habit** | The incumbent agency, the freelancer who set up the ERP years ago, the internal person who maintains the export script. Switching means admitting those arrangements failed. |

**Anxiety is the binding constraint** (Fogg: this is a motivation-adequate, anxiety-blocked
decision — the visitor already wants the outcome). The page's job is therefore to *reduce anxiety*,
not to raise desire. Every section is graded against that: specificity beats enthusiasm.

Julian Shapiro's conversion equation, `Purchase = Desire − (Labor + Confusion)`: desire is already
present, so the whole page works the subtrahend. Named platforms (Odoo, headless/Next.js), concrete
verbs, and a single low-labor CTA (one email address, four placements) are the levers.

---

## IA

**Organization scheme:** ambiguous / **topic** (Rosenfeld & Morville). Four service topics, peer
level, no hierarchy between them.

**Structure:** single-page **sequential** — one scroll path, no branching. Global nav is anchor-only
and unchanged (Services · Approach · Contact), which stays inside Hick's law comfort: three visible
options plus a persistent CTA.

**Labeling:** platform-specific where the user confirmed a platform, category-neutral where they did
not.

| Pillar | Label used | Why |
|---|---|---|
| Ecommerce | "Ecommerce Development" / "headless" | Platform named at body level, not label level |
| AI agentic SaaS | "AI Agentic SaaS" | Confirmed positioning term |
| Data mining + ETL | "Data Mining and ETL Pipelines" | Vendor-neutral — no stack was specified |
| ERP | "ERP Hosting and Setup" / "Odoo" | Odoo confirmed; named in body copy |

**Equal-weight rule (DW-1.3):** all four pillars occupy the same block type (`.service-item`), carry
the same numbering treatment, and get comparable body length. No pillar appears in the `h1`. The
capability strip lists all four before any is elaborated.

---

## Section order

Traced to the canonical marketing persuasion spine (journey §G). Awareness stage: **problem-aware**
(Schwartz) — the visitor knows their systems hurt, so the page opens on value, not on education.
StoryBrand SB7: the visitor is the hero, Fullstacktics is the guide with a plan.

| # | Section | Spine slot | Job |
|---|---|---|---|
| 1 | Hero | Hero — value prop + primary CTA | Broad promise holding all four; primary CTA |
| 2 | Capability strip | (scan layer) | Name all four pillars before any elaboration |
| 3 | Problem | Problem / pain | Name the vendor-sprawl pain the visitor already has |
| 4 | Services | Solution — features as benefits | Four peer pillars, equal depth |
| 5 | Approach | How it works | Answer the "generalist = mediocre" anxiety with method |
| 6 | Contact | Final CTA | One low-labor next step |

**Omitted canonical sections, and why:**

- **Social proof / testimonials** — canonically sits directly after the hero. Left *empty*, not
  filled. There is no honest proof to show; manufacturing it is social-proof inflation
  (deceptive-patterns). The Approach section carries the credibility load instead, via method
  specificity rather than borrowed authority.
- **Pricing, FAQ, stakes, success vision** — out of scope for a one-page site with a conversation
  CTA. Adding them would raise Labor without raising Desire.
- **Objection handling** — not a standalone section; folded into Approach, which is where the
  "small shop disappears after handover" anxiety is answered directly.

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
harder to reach than the other; the lower-commitment option is not hidden or confirmshamed
("no thanks, I don't want to grow"). Email remains a fully equal third path, not a downgraded one.

### 1. Hero
- **Purpose:** state a promise broad enough to hold four pillars without naming any in the headline.
- **Blocks:** eyebrow · `h1` (≤ ~55 chars — capped at `11ch`) · lede naming all four · primary +
  secondary CTA · three capability pills · diagram panel.
- **CTA:** primary → mailto. Secondary → `#services`, because with four peer pillars the next thing
  a visitor wants is *what are they*, not *how do you work*.

### 2. Capability strip
- **Purpose:** all four pillars readable in one horizontal scan, before any prose.
- **Count:** stays at **5 items** — CSS is hard-coded `repeat(5, 1fr)` with `:nth-child(2n)` and
  `:last-child` rules tuned for five at the 860px breakpoint. Four pillars + "Hosting & ops" as the
  honest fifth (it is real work they do, and it is the connective term). **Resolution: keep count,
  no CSS change.**

### 3. Problem
- **Purpose:** name the pain that makes four-pillar breadth a feature rather than a lack of focus.
- **Count:** stays at **3 articles** (`.problem-grid`). **Resolution: keep count.**
- **Blocks:** eyebrow · `h2` · three articles: the record disagrees / data arrives too late / AI
  bolted on last. The third deliberately subordinates AI to data quality — this is what demotes AI
  from headline to peer.

### 4. Services
- **Purpose:** the four pillars at equal depth.
- **Count:** **5 → 4** `.service-item` rows. `.service-list` is `display: grid` with no fixed column
  count and per-item borders. **Resolution: no CSS change required.**
- **Order:** Ecommerce · AI Agentic SaaS · Data Mining and ETL · ERP Hosting and Setup — matching
  the confirmed four-equal-pillars layout.

### 5. Approach
- **Purpose:** answer the anxiety. Method specificity is the substitute for absent social proof.
- **Count:** stays at **4 steps** (`.process-list` is `repeat(4, 1fr)`). **Resolution: keep count.**
- Steps generalize from agent-specific to system-general: Map · Design · Build · Run. The fourth
  step explicitly answers "will you disappear after handover".

### 6. Contact
- **Purpose:** one next step, phrased so the visitor knows what to bring.
- **Blocks:** eyebrow · `h2` (capped `12ch`) · body naming a concrete symptom per pillar · duration
  hint · two booking buttons · contact card with the address.
- **Booking buttons live in the left column, not the card.** The card is `minmax(18rem, 0.58fr)`;
  button labels would wrap badly at that width. The left column is `minmax(0, 1fr)`, and
  `align-items: end` bottom-aligns the card against the button row.
- **CSS collision:** `.contact-section` is filled with `--surface`, and `.button-secondary` is also
  `--surface` — so inside this panel the secondary button is distinguished by its border alone, and
  `--line` composites to 1.39:1 against that fill (below the 3:1 non-text minimum).
  **Resolution: adjust CSS** — `.contact-actions .button-secondary` borders with `--soft`
  (4.07:1 light / 5.04:1 dark). Scoped to this panel; the hero's secondary button, which sits on
  `--bg`, is untouched.

---

## Hero diagram — replacement concept

The existing panel reads `User intent → Context layer → Reasoning core → Tool harness → SaaS
outcome`, which is one pillar's internal architecture. Under four-equal-pillars it over-weights AI
in the most visually prominent element on the page.

**Replacement:** a system stack where each of the four pillars is one layer, converging on a shared
payoff.

```
Storefront            ← ecommerce
Agent workflows       ← AI agentic SaaS
ETL pipelines         ← data mining / ETL
Odoo ERP              ← ERP
One system of record  ← the shared payoff  (highlighted)
```

**Why the highlight moves to the payoff:** `.diagram-flow strong` is the emphasized element. Placing
it on any pillar contradicts equal weight; placing it on the outcome states the actual thesis — the
four are worth buying together because they converge.

**CSS collision:** `.diagram-flow strong::after` renders a trailing connector line unconditionally,
so a highlighted *last* item dangles a line into empty space. **Resolution: adjust CSS** to
`.diagram-flow strong:not(:last-child)::after`, matching the guard the sibling `span` selector
already has. This is the only structural CSS delta in the revision.

---

## Voice

Voice is stable across the page; tone does not vary (no error/success/celebration moments on a
static marketing page). Four attributes, each with its out-of-range expression
(Podmajersky: concrete adjectives, not vague ones):

| Attribute | In range | Out of range |
|---|---|---|
| **Direct** | "We deploy it, watch it, and fix what breaks." | "We'd love to explore how we might help." |
| **Specific** | "Odoo on your own infrastructure." | "Enterprise-grade digital transformation." |
| **Unhyped** | "Built to integrate with the systems that hold your stock." | "World-class, cutting-edge, 10x." |
| **Operational** | "Hosted and maintained, not handed over as a zip file." | "Delivered on time and on budget." |

**Scannability (Redish):** every `h3` is a noun phrase that survives being read alone; every body
paragraph front-loads its subject in the first four words; no paragraph exceeds two sentences.

**Ban-list applied (deceptive-patterns):** no fabricated social proof, no manufactured scarcity
("limited slots"), no manufactured urgency (countdowns, "book before"), no confirmshaming on the
CTA, no metric the team cannot produce on request.
