# GenHealth · Series A Visuals

Consolidated visual set for GenHealth's Series A raise (Q2 2026).

**Live site:** [mikegenhealth.github.io/genhealth-series-a-visuals](https://mikegenhealth.github.io/genhealth-series-a-visuals/)

## What's in here

### `index.html`
The hub page — links to every deck and landing-page variant.

### `decks/`
- **`saas-to-mao.html`** — primary Series A deck (14 slides). SaaS → MAP → MAO thesis, competitive scatter, 3×3 evolution matrix, margin table, roadmap, ask.
- **`positioning.html`** — positioning study (35 slides). 11 competitors deep-dive, 20 positioning options (10 safe stack + 10 contrarian moonshots), category-creator recommendation.

### `variants/`
Nine landing-page studies derived from the Daybreak design system, each translating the GenHealth story through a different dialectic.

| # | File | Temperature | Accent |
|---|---|---|---|
| 01 | `01-clinical.html` | Clinical & aspirational | Steel indigo `#3A4A6B` |
| 02 | `02-relief.html` | Administrative relief | Sunrise peach `#E8B48A` |
| 03 | `03-landscape.html` | Landscape & labor | Adaline sage `#B1CC7A` |
| 04 | `04-language.html` | Language of the work | Oxblood `#6B2A28` |
| 05 | `05-team.html` | Machine & human | Warm steel blue `#4A6A8F` |
| 06 | `06-instrument.html` | Precision & instrument | Superpower teal `#0B6E6E` |
| 07 | `07-dispatch.html` | Dispatch board | Signal amber `#F2B04A` |
| 08 | `08-casefile.html` | Case file | Stamp red `#B83A2A` |
| 09 | `09-broadsheet.html` | The Record (broadsheet) | Oxblood `#A52A22` |

- `compilation.html` — 11-page A4 print version of all nine (use ⌘P → Save as PDF)
- `_variants-index.html` — original standalone gallery view

### Briefs
- **`DESIGN_BRIEF.md`** — visualization hand-off brief for designers / AI tools
- **`DAYBREAK_BRIEF.md`** — Daybreak Studio-derived direction brief (source of the landing-page system)

## Local preview

```bash
cd site
python3 -m http.server 8000
# then open http://localhost:8000/
```

---

*Internal Series A compilation · Not for public distribution.*
