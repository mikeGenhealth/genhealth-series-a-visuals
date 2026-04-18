# GenHealth — Series A Deck Visualization Brief

**Version:** 2026-04-18
**For:** Design tool / agency / Figma AI
**Purpose:** Generate high-quality visualizations for the GenHealth Series A pitch deck

---

## 1. The Company in One Paragraph

GenHealth builds AI agents that replace healthcare administrative labor (prior authorization, eligibility, intake, denial management, billing). We sell in three stages, each expanding the wallet we monetize by ~1–2 orders of magnitude:

- **Stage 1 · SaaS (today)** — license agents to DME, health plans, and medical groups; customer operates them.
- **Stage 2 · MAP (near-term)** — Managed Agent Provider: GenHealth operates the agents on behalf of the customer; priced on transactions/throughput.
- **Stage 3 · MAO (long-term)** — Managed Agent Organization: we contract directly with health plans for admin functions; priced as % of collections / at-risk.

The key story: **same agents, same technology — but at each stage we sell into a larger wallet. SaaS scales to $5B TAM, MAP to $300B+, MAO to $1.5T. MSO-sized revenue with SaaS-sized margins.**

---

## 2. Core Style Guidelines

### Aesthetic
- **Reference decks:** Aledade, Privia Health, Oscar Health investor materials. Clean, dark-mode-friendly, sans-serif, data-forward. No stock photography. No generic "AI-startup" iconography (no neural-net graphics, no floating holograms).
- **Tone:** matter-of-fact, investor-grade. No hype. Assume the reader is a senior healthcare-tech VC who knows what an MSO is.

### Color Palette
- **Background:** deep graphite `#0f1419` (or white for print versions)
- **Primary accent (GenHealth):** signal green `#00c37a`
- **Accent-soft (backgrounds, glows):** `rgba(0, 195, 122, 0.12)`
- **Competitor categories:**
  - Point AI: warm amber `#ffd666`
  - Legacy software: slate `#94a3b8`
  - BPO / MSO: ember `#ff4f1f`
  - Absorbed / dead: `#505a66`
- **Warn / TBD:** `#d97b3b`
- **Text:** primary `#eef1f6`, dim `#8a939f`, faint `#505a66`
- **Rule/border:** `#242b35`

### Typography
- **Headings / display:** Switzer (Fontshare), 600–700 weight, tight letter-spacing `-0.03em`
- **Body:** Switzer, 400, line-height 1.5
- **Data labels / eyebrows / stamps:** JetBrains Mono, 11–13px, `letter-spacing: 0.22em`, UPPERCASE

### Visual Vocabulary
- Editorial folio chrome in corners (top-right slide number, top-left stage tag with a small green dot)
- Thin borders (`1px solid #242b35`), no heavy drop shadows
- One bold accent color at a time — never rainbow charts
- Data labels are always in mono font, data values are in Switzer bold
- Dashed lines = future state / targets / trajectory arrows
- Hatched diagonal patterns = "blocked" or "uncontested territory"
- Green halo/glow on GenHealth markers only

---

## 3. Required Visualizations

### VIZ 1 — TAM Expansion (SaaS → MAP → MAO)

**Purpose:** Communicate the 300× wallet expansion as a visceral visual.

**Data:**
| Stage | TAM | Wallet name | Margin | Revenue model |
|---|---|---|---|---|
| Stage 1 · SaaS | ~$5B | Software budget | 70–80% | Per-seat / per-workflow |
| Stage 2 · MAP | $300B+ | BPO / MSP / internal labor | 60–70% | Per-transaction / % throughput |
| Stage 3 · MAO | $1.5T | Premium + admin capitation + at-risk | 50–70% | % of collections / at-risk |

**Supporting numbers (use any that fit):**
- US healthcare spend: $4.9T (17.6% of GDP)
- US healthcare admin waste: $1T (JAMA, Shrank 2019)
- US back-office FTEs in healthcare: 2.7M, ~$212B/yr in wages
- Global healthcare BPO: $296B (2024) → $626B (2032), 10% CAGR (Fortune BI)
- Admin transactions/year: ~50B (CAQH Index 2023)
- Physician PAs/week: 43 avg; cost per PA: $11 (AMA 2023)

**Design direction:**
- Three stacked/nested shapes whose areas are proportional to TAM (use sqrt or log scale — linear $5B vs $1.5T is unreadable; try 5 : 300 : 1500 as radii sqrt(5)=2.2, sqrt(300)=17.3, sqrt(1500)=38.7, which scales beautifully)
- Or three escalating bars with the size jumps annotated ("60× jump", "5× jump", "300× total")
- Label each stage with its wallet name, margin range, revenue model

---

### VIZ 2 — Competitive Market Map (2D Scatter)

**Purpose:** Show every competitor's *real* position on two axes that investors underwrite on. GenHealth is the only vendor moving into the uncontested top-right.

**Axes:**
- **X (horizontal):** Depth of work performed — from "sells tools only" (left) to "operates the customer's work" (right)
- **Y (vertical):** Cost structure — from "labor-arbitrage economics" (bottom) to "compute-native economics" (top)

**Bubble size:** funding raised (or revenue for private services firms). Use sqrt scale.

**Bubble color:** by category (see palette above).

**Four quadrants (implicit, not labeled as boxes — just hatched/tinted backgrounds):**
- TL (Point AI): amber tint — agent-native tech, shallow workflow footprint
- TR (MAO · uncontested): green hatch + "⬤ UNCONTESTED · MAO TERRITORY" stamp — this is where GenHealth is going
- BL (Legacy software): slate tint — pre-LLM tech, mixed margins
- BR (BPO/MSO): ember tint — labor-arbitrage, operates work

**Vendor coordinates (normalized 0–100 on both axes):**

| Vendor | X (depth) | Y (compute-native) | Funding / Rev | Category |
|---|---|---|---|---|
| SuperDial | 12 | 60 | $20M | Point AI |
| Valerie Health | 22 | 68 | $39M | Point AI |
| Tennr | 30 | 80 | $159M (val $605M) | Point AI |
| Mandolin | 40 | 85 | $57M | Point AI |
| Anterior | 48 | 78 | $64M | Point AI |
| Thoughtful AI | 50 | 55 | $35M (absorbed '25) | Absorbed |
| Notable Health | 32 | 42 | $119M | Legacy |
| Cohere Health | 42 | 48 | $200M | Legacy |
| Availity | 52 | 42 | $400M rev (PE) | Legacy |
| Cognizant HC BPO | 82 | 22 | multi-B public | BPO |
| ACU-Serve | 68 | 24 | ~$58M rev (PE) | BPO |
| Prochant | 75 | 18 | $147M rev | BPO |
| Access HC · Smarter Tech | 88 | 15 | $800M combined rev | BPO |
| **GenHealth NOW** | **62** | **85** | **$13M seed** | **GenHealth** |
| **GenHealth MAO target** | **95** | **82** | — (ghost bubble) | **GenHealth target** |

**Special markers for GenHealth:**
- Ambient green radial-gradient glow behind the NOW dot (~120px radius)
- NOW dot: solid green, 16–18px radius, with a pulsing ring animation if possible
- TARGET dot: dashed green outline, 40–44px radius, 85% opacity, labeled "MAO · target · Stage 3"
- Curved dashed trajectory arrow from NOW → TARGET with caption "→ SAAS · MAP · MAO"

**Labels:**
- All vendor labels BELOW the dot, center-aligned, consistent offset
- Vendor name in category color, bold
- Short sub-label below name in mono, dim (e.g. "$159M · $605M val")
- Axis labels at left and bottom edges in mono, uppercase
- Only ONE corner label kept: "⬤ UNCONTESTED · MAO TERRITORY" in top-right in green

---

### VIZ 3 — 3×3 Evolution Matrix (discrete scatter)

**Purpose:** Show that GenHealth is the only *structural type* of company that can occupy all three stages. Every other category is mechanically blocked from at least two cells.

**Structure:** 4 rows × 3 columns, rendered as a chart with cells (not a table). Same aesthetic as VIZ 2 — grid background, category-colored dots, hatch patterns for blocked cells.

**Columns (stages):**
- Stage 1 · SaaS — "license tools"
- Stage 2 · MAP — "operate the work"
- Stage 3 · MAO — "contract with payer" (green)

**Rows (structural types):**
- Point AI — agent-native · software margins
- Legacy Software — pre-LLM · mixed margins
- BPO / MSO — labor-arbitrage · services margins
- **GenHealth** — agent-native + operator (green-highlighted band)

**Cells:**

| Row ↓ / Col → | SaaS | MAP | MAO |
|---|---|---|---|
| Point AI | **LIVE** — Tennr, Mandolin, Anterior, Valerie, SuperDial | ✕ BLOCKED — no ops DNA. Thoughtful tried, absorbed '25. | ✕ BLOCKED — no payer trust, no balance sheet, no actuarial depth |
| Legacy Software | **LIVE** — Availity, Notable, Cohere | ✕ BLOCKED — batch EDI can't support outcomes pricing | ✕ BLOCKED — no agent substrate, can't hit margin payers pay for |
| BPO / MSO | ✕ BLOCKED — not their DNA. No software product. | **LIVE** — Prochant, ACU-Serve, Access HC, Cognizant | ✕ BLOCKED — labor margins can't underwrite at-risk |
| **GenHealth** | **LIVE NOW** — $10M CARR, 232% NRR, SaaS foundation | **IN FLIGHT** — First MAP pilot Q3 '26 | **TARGET** — First payer contract Q2 '27 |

**Design direction:**
- Blocked cells: ember-tinted diagonal hatch background + "✕ STRUCTURALLY BLOCKED" mono tag + two-line reason
- Live cells: small vendor dots (category-colored) with labels
- GenHealth row: full-width green hatch + solid band background, three bright green glowing dots connected by a dashed trajectory arrow, stage labels ("NOW · 2026", "2026-27", "TARGET · 2027+")

---

### VIZ 4 — Stage Evolution Flow (SaaS → MAP → MAO)

**Purpose:** The anchor slide. A single horizontal flow showing how GenHealth evolves, with explicit "WHAT CHANGES" callouts between each pair of stages.

**Layout:** card → transition → card → transition → card (5 columns, cards are 1fr, transitions are ~190px fixed width).

**Each card contains:**
- Stage number (Stage 1 / 2 / 3)
- Timeline (Today / Near-term / Long-term with years)
- Big stage name (SaaS / MAP / MAO)
- Full form (italic): "Software as a Service" / "Managed Agent Provider" / "Managed Agent Organization"
- Divider
- Four k/v rows:
  - Customer buys [software / outcomes / admin capacity]
  - Who runs agents [the customer / GenHealth / GenHealth]
  - We're paid [per seat / per transaction / % of collections]
  - Margin [70-80% / 60-70% / 50-70%] (in accent green)
- TAM block at bottom: wallet label, big $ value (`$5B`, `$300B+`, `$1.5T`), sub-line

**Each transition contains:**
- Big green arrow "➤"
- "WHAT CHANGES" pill in green
- One-sentence explanation:
  - Between 1→2: *"GenHealth starts operating the agents for the customer. They stop running the software and start buying outcomes."*
  - Between 2→3: *"GenHealth contracts directly with the health plan. We stop selling to providers and start collecting on the premium dollar."*

**Stage 3 card is highlighted:** accent-green border, soft green gradient fill, MAO name in accent color.

**Constant callout below the flow:** *"THE CONSTANT: Across all three stages, the same GenHealth agents do the work. What changes at each transition is who owns the operation — and that's what expands the wallet from $5B to $1.5T."*

---

### VIZ 5 — Margin Profile Comparison Table

**Purpose:** Prove we hold software margins on services-size revenue.

**Columns:** Stage / Revenue model / Cost of goods / Gross margin / Revenue per contract

**Rows:**

| Stage | Revenue model | COGS | Gross margin | Revenue/contract |
|---|---|---|---|---|
| Stage 1 · SaaS | Per-seat / per-workflow | Compute + customer success | 70–80% | $60K ADV |
| Stage 2 · MAP | Per-transaction / % throughput | Compute + ops supervisors (1:50 agents) | 60–70% | $500K–$5M |
| Stage 3 · MAO | % of collections / at-risk | Compute + compliance + actuarial | 50–70% | $10M–$100M+ |
| Reference · MSO | Mgmt fee on practice revenue | Billers, coders, coordinators | 15–30% | $5M–$50M |
| Reference · BPO | FTE billable / % collections | Offshore labor stack | 20–35% | $1M–$10M |

**Design direction:**
- GenHealth stages (rows 1–3) highlighted — bold text, accent green margin column
- Reference rows (MSO, BPO) de-emphasized — dim text
- Clear visual separator between GenHealth and reference rows
- Accompanying sentence: *"MSOs and BPOs fight for 15–30% gross margins because their COGS is labor. Ours is compute and a small ops team."*

---

### VIZ 6 — Roadmap Timeline

**Purpose:** Show the path from $10M CARR today to first at-risk payer deal in ~18 months.

**Milestones (timeline):**
- **NOW · Apr 2026** — $10M CARR trajectory. 15-person team (11 eng, 2 sales, 2 G&A).
- **Q3 '26** — First MAP pilot live (existing customer converts to outcomes pricing).
- **Q2 '27** — First health-plan contract (Stage 3 MAO wedge: PA or medical-necessity review).
- **Q4 '27** — First at-risk deal (shared savings or admin capitation).

**ARR targets (stacked below timeline):**
- **EOY 2026:** $10M CARR (Stage 1 at scale, first Stage 2 pilot)
- **EOY 2027:** $75M CARR (Stage 2 at scale, 5+ MAP customers, first payer)
- **EOY 2028:** $225M CARR (3+ payers, first at-risk deal live)
- **Series B trigger:** $50M CARR (expected mid-2027)

**Design direction:**
- Horizontal timeline with green dots on a horizontal rule
- "Now" dot is solid; future dots are outlined
- Each milestone: month/quarter label in accent green mono, headline in Switzer bold, 1-line detail in dim
- Below the timeline: 4 stat cards showing CARR targets with the same data as above

---

### VIZ 7 — Use of Funds (Series A)

**Purpose:** Map the raise to the three stages.

**Allocation bars (horizontal):**
- Stage 1 · Scale SaaS — 40% — *Outbound marketing, sales team, FD engineers, conference presence*
- Stage 2 · Stand up MAP — 40% — *Ops layer, SLA tooling, agent observability + governance, 24/7 coverage*
- Stage 3 · Prepare MAO — 20% — *Payer BD, compliance, actuarial, risk-bearing legal + regulatory groundwork*

**Design direction:**
- Horizontal bars with green fill
- Category label + one-line description on left
- Percentage on right in mono
- Below: "By Series B, expect to prove [milestones]" + investor list

---

### VIZ 8 — Problem Size (supporting visuals)

**Purpose:** Make the $300B+ admin labor problem tangible.

**Four stats (equal-weight):**
- **$1T** · US healthcare admin waste (JAMA, Shrank 2019). ~25% of $4.9T health spend.
- **$296B → $626B** · Global healthcare BPO, 2024 → 2032 (Fortune BI), 10% CAGR.
- **2.7M FTEs · $212B/yr** · US back-office workforce (BLS): billing, coding, UM, PA, eligibility, call centers.
- **50B transactions/yr** · $25B in documented electronification savings unrealized (CAQH 2023).

**Design direction:**
- Four stat cards in a row
- Huge number, small mono label above, short explanation below
- Optional: a small icon or data-driven mini-chart per card (NOT a generic healthcare clipart)

---

## 4. Competitor Reference Data

Full intelligence on all competitors referenced in the deck. Use this when labeling, positioning, or needing backing facts.

| Company | Category | Total raised / revenue | Lead investors | One-line weakness |
|---|---|---|---|---|
| **Tennr** | Point AI | $159M raised, $605M valuation | IVP, a16z, Lightspeed, ICONIQ | Narrow ICP (post-acute only), front-office wedge, no claim submission |
| **Mandolin** | Point AI | $57M raised ($40M Series A '25) | Greylock, SignalFire, Maverick | Single-vertical (specialty drug only), founded 2024, portal-scraping fragility |
| **Valerie Health** | Point AI | $39M raised ($30M Series A '25) | Redpoint, General Catalyst | No RCM / claims / denials / coding, no hospital footprint |
| **SuperDial** | Point AI | $20M raised ($15M Series A '25) | SignalFire | Voice-only, CMS-0057-F mandate compresses their wedge |
| **Anterior** | Point AI | $64M raised ($40M '26) | NEA, Sequoia, FPV, Kinnevik | Payer-only, narrow PA wedge, adversarial for providers |
| **Thoughtful AI** | Absorbed | $35M raised, rolled into Smarter Tech May 2025 | New Mountain Capital | Brand dissolved, RPA-heritage agents, reputational issues |
| **Notable Health** | Legacy | $119M raised, $600M val (flat since '21) | ICONIQ, Greylock, Oak HC/FT | Non-clinical only, RPA heritage, flat valuation while peers race ahead |
| **Cohere Health** | Legacy | $200M raised ($90M Series C '25) | Temasek, Deerfield, Define, Flare, Longitude | Pre-LLM ML stack, payer-only, 12-24mo sales cycles, Humana concentration |
| **Availity** | Legacy | PE-owned (Francisco + Novo), ~$400M rev | Francisco Partners, Novo Holdings | Legacy batch-EDI core, provider UX is criticized, renting AI from Abridge |
| **Prochant** | BPO | Founder-held, $147M India rev | — (bootstrapped) | 3000+ offshore FTE labor-arbitrage P&L, bolted-on tech |
| **ACU-Serve** | BPO | PE-owned, ~$58M rev, ~300 FTE | Lovell Minnick Partners | No native AI, labor-heavy, PE pressure on margin vs. innovation |
| **Access Healthcare · Smarter Tech** | BPO | $800M combined rev (Access + SmarterDx + Thoughtful) | New Mountain Capital | Massive FTE base, rollup complexity, brand confusion |
| **Cognizant HC BPO** | BPO | Public co, multi-B rev | public markets | Healthcare is a segment, not a focus — slow to ship AI-native ops |

---

## 5. Key Messages / Phrases That Must Appear

These one-liners are load-bearing. Please preserve exact wording where possible.

- **Thesis:** *"Same revenue lines on the P&L as an MSO. Radically different economics underneath."*
- **SaaS → MAP shift:** *"Customer stops running the software and starts buying outcomes."*
- **MAP → MAO shift:** *"We stop selling to providers and start collecting on the premium dollar."*
- **Evolution constant:** *"Across all three stages, the same agents do the work. What changes is who owns the operation."*
- **Market map punchline:** *"GenHealth is the only vendor moving diagonally across the chart — agent-native economics and operator depth."*
- **3×3 matrix punchline:** *"Point AI can't move right. Legacy can't evolve. BPOs can't move left. GenHealth is the only category that legitimately fills all three stages."*
- **TAM punchline:** *"Each stage expands the wallet we sell into by an order of magnitude while the underlying product — the agents — remains the same. 300× the wallet on the same technology."*
- **Margin punchline:** *"MSOs and BPOs fight for 15–30% gross margins because their cost of goods sold is labor. Ours is compute and a small ops team."*

---

## 6. Traction Numbers (for title / overview slides)

- **$10M CARR** trajectory by EOY 2026 (up 5× from $2M in April 2026)
- **232% NRR** (Month 1 → 6 cohort)
- **40.2% MoM** ARR growth (across the $0 → $10M ramp)
- **90% win rate** on deals that selected a solution
- **8-week sales cycle** (first meeting to close)
- **12 : 1 LTV : CAC** ($300K : $25K)
- **4 weeks average implementation** (down from 6 months)
- Named customers: MedExp (Chris Leonard), Piedmont (Jack Bachman), Guidehealth (Sanjay Doddamani), Soundview (Patti Maloney)

---

## 7. Team (for title / credibility slides)

- **Ricky Sahu** — Founder/CEO. Previously founded 1upHealth (FHIR interop leader — scaled to $20M ARR, 50M patients, 70 health plans, 30M req/hr in 5 years).
- **Ethan Siegel** — Co-founder. Early 1upHealth engineer.
- **Eric Marriott** — Co-founder. Early 1upHealth engineer.
- **Advisors:** Chris Leonard (MedExp CEO), Jack Bachman (Piedmont CEO), Sanjay Doddamani (Guidehealth CEO/Founder), Patti Maloney (Soundview VP Ops), Chris Leonard, Patti Maloney.
- **Investors:** Craft Ventures (co-led seed), Obvious Ventures (co-led seed), Plug and Play, Honest Ventures.

---

## 8. What to Avoid

- No generic "AI" clipart (brains, neural nets, lightbulbs, cyborgs)
- No stock photography of doctors, stethoscopes, or iPads
- No rainbow or 5+ color charts — stick to the single-accent palette
- No 3D extrusion, drop shadows, or skeuomorphic treatments
- No purple gradients on white (the standard AI-startup default)
- No Inter, Roboto, or other default system fonts — use Switzer or a comparable modern geometric sans-serif (Söhne, Neue Haas, Geist also fine)
- No "agentic" or "autonomous" in taglines — those words are exhausted
- Don't label GenHealth as "Point AI" or "SaaS company" — we're explicitly *not* a point solution; we're the operator layer

---

## 9. Output Formats Needed

- **Primary:** SVG or Figma files at 1400×800 for each visualization (slide dimensions)
- **Secondary:** PNG exports at 2× resolution for PowerPoint compatibility
- **Tertiary:** Light-mode variants of each viz for print handouts / LP mailers

---

## 10. Reference Files

Existing HTML implementations of these visualizations (for reference and iteration):
- `/Users/mmaseda/Desktop/Series A Revamp/genhealth-saas-to-mao.html` — the full 14-slide Series A deck
- `/Users/mmaseda/Desktop/Series A Revamp/genhealth-positioning.html` — the earlier 35-slide positioning study (alternative framings)

Both files are self-contained HTML with inline CSS/SVG. Open in any browser. Use them as a baseline to improve upon — they prove the data and the narrative work; the goal is to elevate the visual craft.

---

*End of brief. Any clarifying questions before starting? Otherwise, proceed with Viz 1 (TAM) and Viz 2 (Market Map) first — those are the anchor slides.*
