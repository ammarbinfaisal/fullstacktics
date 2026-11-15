# JOURNEY.md — fullstacktics.com

Positioning (2026-11-15): **SEO + PPC & web development + design agency.** Supersedes the
three-pillar production-AI positioning (2026-09-03) and the four-pillar one (2026-08-13); both plan
docs in `.design-foundations/plans/` are dated records, not live spec. Visual DNA is unchanged.

---

## Job

**Primary entry: outbound audit email.** `../ads_audit` sends prospects (mostly small service
businesses, e.g. Hajj/Umrah travel agencies) a findings report about their ads, tracking and site.
They click through to see *who sent this and whether they can actually do the work*.

**Job story:** When an agency I've never heard of emails me an audit of my ads and site, I want to
see real work they've shipped and how they'd go about fixing my problem, so I can decide whether a
reply is worth my time.

**Binding constraint: anxiety** ("cold email, probably spam", "agencies overpromise", "we'll be
locked in"). The page answers with live, clickable work, specific mechanisms, and ownership terms.

## Section order

| # | Section | Job |
|---|---|---|
| 1 | Hero | Site + traffic as one problem; CTA → email, secondary → `#work` |
| 2 | Capability strip (6) | SEO · PPC · Web development · Design · Landing pages · Conversion tracking |
| 3 | **Work** | Proof directly after the hero: live client sites with screenshots, links out |
| 4 | Problem (3) | Ads on the homepage · redesign lost rankings · no attribution (mirrors audit findings) |
| 5 | Services (4) | SEO, PPC (tag: Growth) · Web development, Design (tag: Build), each with deliverable chips |
| 6 | Approach (4) | Audit · Track · Build · Report + hand over (accounts stay in client's name) |
| 7 | Contact | Audit-recipient line, 15/30 min booking, email |

**Work section:** `assets/work/*.jpg` are 1200x750 homepage captures. Testimonial `<blockquote
class="work-quote">` blocks are present but **commented out**: uncomment only with wording the client
has approved. Never publish invented or unapproved quotes or metrics.

**Hero diagram:** Visitor path: Query, Click, Page, Action, **Tracked lead** (inverted fill). The
`:not(:last-child)` connector guard in `styles.css` is still load-bearing.

## SEO (the site is its own case study)

Canonical, OG tags, `ProfessionalService` JSON-LD, `robots.txt`, `sitemap.xml`, SVG favicon, lazy
images with explicit dimensions (no CLS). Update `sitemap.xml` `lastmod` when content changes.

## Exits

Email `ammar@fullstacktics.com` (header, hero, contact card, footer); `cal.com/ammarbinfaisal/15min`
and `/30min` once, at contact.

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
