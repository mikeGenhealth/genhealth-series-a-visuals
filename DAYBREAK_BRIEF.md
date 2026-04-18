# Daybreak-Style Design Brief

A design direction brief distilled from Daybreak Studio's body of work (Superpower, Adaline, Dropbox Brand, Dropbox Dash × McLaren, their own studio identity). Use this as the system prompt / direction for any website, landing page, or pitch deck where the goal is to feel like a Daybreak project — premium, quiet, intelligent, slightly poetic, deeply considered.

---

## 1. The One-Line Soul

> **"Design that feels right. Tech that works well."**

Every decision should serve that. If a flourish doesn't make the product feel more *true to itself*, it shouldn't exist. Daybreak's signature is not a look — it is a **temperature**. Calm, confident, quietly alive. Never loud. Never lazy.

---

## 2. Governing Principles (apply these before any visual decision)

1. **Inside-out, not outside-in.** The product is the brand. Start from the application's logic and voice, then let the website, marketing, and identity evolve from it. The website should feel like the product's natural atmosphere, not a promotional layer bolted on top.
2. **A tension between two poles.** Every Daybreak brand lives in a dialectic: *geometry and empathy*, *language and logic*, *clarity and calm*, *clinical and aspirational*, *organic and technical*. Pick your poles and let them animate every choice — type vs. motion, color vs. whitespace, precision vs. warmth.
3. **Restraint as signal of confidence.** White space is not empty — it is the design. Premium brands don't shout; they wait for you. Default to fewer colors, fewer fonts, fewer components, more breathing room.
4. **Motion is meaning, not decoration.** If it moves, it must mean something: reveal structure, express state, mark time (day-to-night footers), demonstrate a product mechanic. Never add a hover effect for texture alone.
5. **Reward attention.** Type should "dance," colors should "hum," details should "wink." Small quirks — a variable-axis slider, a live cursor, a Bezier editor embedded in a marketing page — reward the 2% of visitors who look closely, and they are the ones who matter.
6. **Human-first, not feature-first.** Copy describes what the user *feels* or *becomes*, not what the product *has*. "Get better at being healthy, every year." "A landscape for thought to root and stretch."

---

## 3. Typography System

**Primary typeface:** A neutral, technical, slightly humanist grotesque. Think **Akkurat** (Daybreak's go-to for Adaline), **Söhne**, **ABC Diatype**, **Neue Haas Grotesk**, or **Inter** as a web-safe stand-in. The typeface should *recede* and let surrounding composition carry the tone — a typeface that "responds to its environment rather than imposing its own character."

**Optional secondary:** A **warm editorial serif** used sparingly for emotional accents (one-line pull quotes, a single hero word italicized, footer signature). Candidates: GT Alpina, Tiempos Text, Portrait Text. Never use the serif for body copy — only for moments.

**Hierarchy (web):**
- **Display hero:** 72–128px, tight tracking (-2 to -3%), line-height 0.95–1.05. Mostly lowercase or sentence case — never all-caps headlines. Weight: Regular or Medium (not Bold; bold reads corporate).
- **Section lead:** 40–56px, same tracking logic.
- **Eyebrow / label:** 11–13px, uppercase, tracking +8–12%, weight Medium, used sparingly as a section anchor.
- **Body:** 16–18px, line-height 1.55–1.7, measure ~60–72 characters. Generous.
- **Fine print / captions:** 13–14px, 65% opacity on neutral backgrounds.

**Rules:**
- At most two type families, three weights total.
- No drop shadows, no gradients on type, no all-caps headlines.
- Tracking is always negative at display size, neutral at body, positive only on eyebrows.
- Numerals should be tabular in any UI or stat context.

---

## 4. Color System

**The Daybreak move is: 90% neutral + 1 signature hue.**

### Foundation (always)
- **Paper:** `#F7F6F2` to `#FAFAF8` — a warm off-white, never pure `#FFFFFF`. Slight cream. Sometimes `#F2F1EC`.
- **Ink:** `#0F0F0E` to `#1A1A1A` — a near-black with a faint warm undertone. Never `#000000`.
- **Graphite:** `#4A4A47` for secondary text.
- **Mist:** `#E8E7E2` for dividers, card fills, subtle surface elevation.

### Signature hue (pick ONE — the whole brand revolves around it)
Choose a color that *sustains attention over long periods* (Daybreak's phrase). Muted, dusty, slightly desaturated. Nature-adjacent.
- **Adaline sage:** `#B1CC7A` — soft, living, contemplative
- **Superpower teal:** a cool, clinical `#1FB6A6`-ish turquoise
- **Dropbox-era blue:** a confident `#0061FE` used in flashes
- **Sunrise peach:** `#E8B48A` for warmth-forward brands
- **Oxblood:** `#6B2A28` for editorial/intellectual brands
- **Steel indigo:** `#3A4A6B` for technical/serious brands

### Usage
- The signature color is deployed as: primary CTA, key illustration element, a single ambient gradient in the hero, data visualization accents. **Not** as backgrounds, not in body text, not on chrome.
- Gradients are **atmospheric and soft** — a blurred radial bloom behind a hero, a vertical fade in a footer — never hard, never saturated, never multi-color rainbow.
- Avoid pure primary colors. Every hue should look like it has a fine layer of dust on it.

---

## 5. Layout, Grid, and Rhythm

- **12-column grid** with generous gutters (min 24px, 48px at desktop).
- **Max content width** 1200–1280px; body copy measures capped at ~640px.
- **Vertical rhythm:** 8pt base. Section spacing 96–160px on desktop. Sections are *rooms*, not *shelves* — give them air.
- **Asymmetry, not symmetry.** Avoid dead-centered everything. Offset a hero image 4 columns right. Let a caption hang left of a 10-column block. Tension > balance.
- **Sections alternate:** headline + copy → full-bleed product moment → interactive widget → quiet testimonial → ambient footer. No two consecutive sections should have the same treatment.
- **No card soup.** If it looks like a template of evenly-sized feature cards, start over.

---

## 6. Imagery & Illustration

- **Product UI is the hero.** Real, high-fidelity screenshots. Crisp, readable, never artificially beautified beyond what the product actually is. Framed cleanly — no tilted laptops, no floating shadows. Often shown large, sometimes *only partially in frame* so the eye completes it.
- **Photography** is naturalistic, warm, slightly desaturated. Real people caught mid-thought, never staged-smiling stock. Soft natural light. Editorial framing.
- **Illustrations** — when they appear — are either (a) **technical/diagrammatic** (a CPU exploded view, a topographic line, a schematic of flow), or (b) **organic/ambient** (hills, water reflections, a horizon). Never mascotty. Never 2010s Dropbox-cartoon.
- **Metaphor over mascot.** "A landscape for thought." "Between language and logic." Lean into environmental, spatial, and atmospheric metaphors.

---

## 7. Motion & Interaction

Every project should include **1–3 signature interactive moments** — small, precious, hand-built widgets that feel impossible to templatize. Examples from Daybreak's repertoire:
- A **day-to-night cycle** footer (color + lighting transitions as the user scrolls past)
- A **variable-axis type explorer** users can manipulate live
- A **Bezier curve editor** sitting in a brand guidelines page
- A **color chip browser** that lets users pull live values
- An **ambient cursor trail** or a softly reacting hero background
- **Progressive number counters** for stats (count up on scroll-into-view)
- **Scroll-reactive product UI** — a screenshot that subtly shifts state as the user progresses

General rules:
- Easing: custom cubic-beziers, never default. Tend toward long, slow out-eases (0.2, 0.8, 0.2, 1).
- Durations: 400–800ms for reveals, 1200–2400ms for ambient/atmospheric.
- Reveal pattern: translateY(16px) + opacity 0 → 1, staggered by 40–60ms across siblings.
- No parallax for parallax's sake. No spinning logos. No Lottie confetti.
- Respect `prefers-reduced-motion` — strip ambient motion, keep functional transitions.

---

## 8. Copywriting Voice

- **Short sentences. Often fragments.** ("Get tested. Get results. Take action.")
- **Benefit in human terms, not feature in product terms.** "Detect 1,000+ conditions" → not "Comprehensive biomarker panel."
- **Quiet confidence.** Never "revolutionary," "game-changing," "best-in-class." Those words signal the opposite.
- **Poetic anchors.** Each page should have one line that feels almost literary — the thing you'd pull-quote. ("As this day ends, another begins." "A landscape for thought to root and stretch.")
- **Specifics over superlatives.** "85% of members uncover early risk factors" beats "industry-leading insight."
- **Direct address.** Second person. Never "users" or "customers" on marketing pages.

---

## 9. Navigation & Chrome

- **Top nav:** logo left, 3–5 links center-right, single primary CTA (outlined or soft-filled, never loud). Sticky but with a subtle backdrop blur when scrolled.
- **No mega-menus.** If you need one, your IA is broken.
- **Footer is a moment.** Not a dumping ground of links. Give it an ambient illustration, a single line of copy that feels like a signature, and only the links that genuinely matter.
- **Buttons:** rounded corners 6–10px. Primary = signature hue with white text. Secondary = inked outline on paper. Minimum 44px tall. Never gradients. Never 3D.

---

## 10. Pitch Deck Application (when this brief is used for slides)

Translate the web system to keynote:
- **16:9**, but think of each slide as a *room*, not a form.
- **One idea per slide.** If you have two ideas, split them.
- Paper background on every slide; reserve inked (dark) slides for chapter breaks and a single emotional peak.
- **Section dividers** are full-bleed moments with a single large phrase (lowercase) and a soft ambient gradient. No subtitle. No logo. No page number.
- **Data slides:** single chart, generous margin, one highlighted series in the signature hue, everything else `#4A4A47`. Annotate the takeaway in-line — never force the reader to parse the axes alone.
- **Product slides:** one screenshot, large, bleeding off one edge, caption floating in whitespace.
- **Type-only slides:** display size (88–128pt), sentence case, left-aligned, single color.
- **No icons per bullet.** No bullets at all, ideally. Short declarative lines separated by space.
- **Transitions:** cut or crossfade only. Never "push," "cube," or "flip."
- **Thank-you slide:** the poetic line from the deck, set quietly. Maybe a contact line in 14pt graphite at the bottom corner.

---

## 11. What to AVOID (this is the cheap-signal checklist)

- Generic hero gradient (pink-to-purple mesh)
- Bento grids of equally sized feature tiles
- Stock photography of diverse people laughing at laptops
- Glassmorphism / frosted-glass card stacks
- "AI sparkle" iconography
- Three-column feature sections with icon-above-title-above-paragraph
- Testimonial carousels with five-star ratings
- Pricing tables with a "Most Popular" ribbon
- Chatbot-bubble hero mockups
- Any animation that loops in place without purpose
- Pure `#FFFFFF` backgrounds
- Pure `#000000` text
- Sans-serif Bold for headlines
- More than one signature color
- Emoji used as interface affordance

---

## 12. The Evaluation Question

After any design is drafted, ask:

> *"Does this feel like the product's **natural habitat**, or does it feel like a **marketing site** built around it?"*

If the answer is the latter, strip decoration until the former is true.

---

## 13. Knobs to Tune Per-Project

When using this brief, specify:
- **Signature hue** (one color, hex)
- **Tension poles** (e.g., "precision and warmth," "infrastructure and intuition")
- **Poetic anchor line** (one sentence, literary)
- **Product-UI posture** (centered-hero, hanging-right-edge, or interactive-widget)
- **Serif accent?** (yes/no — and where)
- **Signature interactive moment** (pick 1–3 from §7)
- **Primary metaphor** (landscape? instrument? atmosphere? laboratory?)

With those seven knobs set, the rest of the system resolves itself.

---

## References

- [Daybreak Studio](https://www.daybreak.studio/)
- [Daybreak on Awwwards](https://www.awwwards.com/DaybreakStudio/)
- [Adaline — Awwwards SOTD](https://www.awwwards.com/sites/adaline)
- [Adaline](https://adaline.ai/)
- [Superpower](https://www.superpower.com/)
- [Dropbox Brand Guidelines case study (Awwwards)](https://www.awwwards.com/case-study-dropbox-brand-guidelines.html)
- [Daybreak branding analysis (Abduzeedo)](https://abduzeedo.com/daybreakc-branding-and-visual-identity-blend-geometry-and-empathy)
- [Daybreak's adaptive system (The Brand Identity)](https://the-brandidentity.com/project/daybreak-studio-crafts-an-adaptive-system-inspired-by-natural-environments)
