# YT Sorter — Design System Analysis

A teardown of the landing page's visual language, layout logic, and component patterns — meant to be reused as a design reference for similar dev-tool / open-source product pages.

---

## 1. Brand & Positioning

- **Product**: YT Sorter — an open-source, locally-hosted tool that uses Gemini AI to sort a bloated YouTube "Watch Later" list into focused, topic-based playlists.
- **Tone**: developer-facing, honest, unpolished-on-purpose. Copy leans technical ("FastAPI", "React/Vite", "OAuth", "quota-aware") rather than marketing-speak. No fake urgency, no pricing, no growth-hacky CTAs — just "View on GitHub" and "See how it works."
- **Personality conveyed by design**: playful but trustworthy. The scalloped/wave dividers and rounded corners feel friendly and indie-hacker; the near-black-green ink and thin borders on every card keep it from feeling like a toy.

---

## 2. Color Palette

| Role | Color | Approx. Hex | Notes |
|---|---|---|---|
| Primary brand / hero background | Periwinkle / iris purple | `#7C7CF0`–`#8686F5` | Bold, saturated, used only in hero + "Built to run locally" band |
| Ink / text / strokes | Deep forest green (near-black) | `#0B3B2E`–`#0D2E22` | Used for ALL text, ALL borders, and button fills — this is the true "black" of the palette |
| Section background (light) | Mint / pale green | `#DFF5E8`–`#E4F7EC` | Main content background, feels breathable next to the purple |
| Section background (warm) | Cream / off-white peach | `#FDF3E7`–`#FFF6EC` | Footer + "Built to run locally" split section |
| Accent — soft blush | Light coral/pink | `#F6C9C6` | "Travel" playlist card, one feature icon chip |
| Accent — pale blue-lavender | `#D7DAF7` | "Python tutorial" video row, "AI & Tech" icon chip |
| Accent — pale mint | `#D7F0DE` | "AI & Tech" playlist card |
| Accent — sky blue | `#C9E4F2` | "Cooking" playlist card |
| Accent — pastel yellow | `#F5E9A8` | "Sleep" tag chip |
| Card fill (neutral) | White | `#FFFFFF` | Feature cards, "What you'll need" card |
| CTA button fill | Deep green (ink color) | matches ink | High-contrast, doubles as the border color everywhere else |

**Key principle**: only ONE dark neutral is used throughout (the deep green), for text, strokes, icon lines, and primary buttons alike. There is no separate "gray" — muted text uses the same green at reduced opacity (~60-70%) rather than switching to gray. This unifies the whole page around two anchors: **bold purple + deep green**, with pastels doing all the secondary color work.

---

## 3. Typography

- **Headline font**: a bold, rounded/geometric grotesque (looks like a heavier cut of something like "Cabinet Grotesk," "Bricolage," or "Fraunces Sans"-style — thick, slightly condensed, friendly rounded terminals). Used at very large sizes (~64–96px) for H1 and section headers, always in the deep green ink color, always tight/negative letter-spacing.
- **Body font**: a clean, neutral sans-serif (system-UI / Inter-like) for paragraph copy, nav links, labels, and card body text — smaller weight contrast keeps headings dominant.
- **Hierarchy**:
  - H1 (hero): huge, 3-line wrap, bold, tightest tracking, sits flush left.
  - H2 (section headers): large, centered, bold, same font family as H1 but smaller.
  - Card titles (H3): bold, ~20–24px, same green.
  - Body/paragraph: regular weight, ~16–18px, ~1.5 line-height, slightly muted green.
  - Eyebrow/labels ("BEFORE", "AFTER", "STEP 1"): all-caps, small, letter-spaced, muted — a consistent pattern for "meta" labels above a headline.
  - Buttons/pills: bold, small, all standard case (not uppercase) except badges.

No serif anywhere. No italics except the mock badges. The type system relies entirely on **size + weight contrast**, not font-family switching (only two families total).

---

## 4. Layout & Grid

- **Container**: centered, generous max-width (~1200–1280px), wide outer margins on desktop.
- **Section rhythm**: full-bleed background-color bands stacked vertically — purple hero → mint feature section (with a "how it works" panel embedded inside it) → split cream/purple closing section → cream footer. Each band is a **distinct flat color**, not gradients, so the page reads as clearly delineated horizontal chapters.
- **Section transitions**: a repeating **scalloped/wave SVG edge** (rounded semi-circle bumps) is used as the seam between the purple hero and the mint section below it, and again at the bottom of the pink "how it works" panel. This is the single most distinctive motif on the page — it replaces a plain straight cut with a soft, playful boundary and is reused at least twice for consistency.
- **Hero layout**: two-column — left is text stack (H1 + paragraph + button row), right is a **product visualization** (a "before/after" diagram, not a screenshot) with a big center-third gap for negative space and a soft blurred purple ellipse glow behind it.
- **Feature grid**: 4 equal-width cards in a single row (desktop), each with icon chip → title → description → small label + "Learn more" link, bottom-anchored. Consistent padding, consistent internal vertical rhythm (icon, gap, title, gap, body, flexible spacer, footer link).
- **"How it works" panel**: a distinct rounded "card within a section" (peach/cream fill, large radius ~24–32px) containing a left-aligned intro (eyebrow + big heading + link) and a right-side **vertical numbered step stack**, each step in its own white rounded card connected by simple down-arrows. This nested-card-inside-a-colored-panel pattern is repeated for the closing "Built to run locally" + "What you'll need" two-column split.
- **Closing split section**: two cards side by side, unequal visual weight — left card is the bold purple brand-color card (CTA-style, secondary/ghost button), right card is a neutral white checklist card. This mirrors the hero's two-column asymmetry (bold color vs. neutral information) as a closing bookend.
- **Footer**: simple 3-column bar — logo + tagline, nav links, copyright — thin top border, cream background, no bold color.

---

## 5. Component Patterns

### Buttons
- **Primary**: solid deep-green fill, white text, small icon (e.g., GitHub mark) + label, fully rounded corners (pill-ish, ~8–10px radius, not full pill), thin/no border.
- **Secondary/ghost**: transparent or white fill, deep-green border + text, same radius — used for "See how it works."
- Buttons are consistently **small-to-medium**, never oversized; icon-left, label, and (for the secondary "See how it works") an arrow-right icon at the end signaling navigation/scroll.

### Cards
- Universal recipe: **white or tinted fill, thin deep-green border (~1.5–2px), consistent rounded corners (~16px), subtle drop shadow offset down-right** (looks almost like a hard/flat shadow rather than soft blur — consistent with the illustrative, sticker-like aesthetic).
- Icon chips inside cards: small rounded-square swatches (~40–48px) in a pastel tint, with a simple line icon centered, colored in the deep green ink.
- Status/meta badges (e.g., "New playlist," "merged," language tags "Python"/"Sleep"): tiny pill badges, white or pastel fill, thin border, bold micro-text — used consistently across the hero mock and the "how it works" step cards.

### The "Before / After" hero diagram
- This is the standout custom illustration: a literal mock UI card ("Watch Later" playlist with 3 colored video rows) on the left, a circular arrow badge labeled "YT SORTER" in the middle, and 3 new pastel-colored "playlist" result cards stacked on the right, each tagged "New playlist" or "merged."
- It's not a screenshot — it's a **simplified, flat, illustrative recreation of the UI**, which lets the palette stay controlled and on-brand rather than importing YouTube's actual red/white chrome.

### Step cards ("How it works")
- Horizontal cards: icon chip (left) → step eyebrow + bold title + description (middle) → optional trailing element (key icon / tag pills / primary button) on the far right.
- Connected vertically by a centered down-arrow glyph between each — makes the sequence unmistakably linear/procedural.

---

## 6. Iconography

- Simple **outline/line icons** (not filled, not duotone) at a consistent stroke weight, always rendered in the deep-green ink regardless of the chip's background tint. Icons used: playlist/list, monitor/gear (local processing), stacked layers (batch), history/clock (rollback), sparkle (AI), laptop, key, code brackets — all from a generic line-icon set (Lucide/Feather-style), not custom illustration, which keeps production cost low while the color system does the branding work.

---

## 7. Spacing & Rhythm

- Generous vertical whitespace between sections (~120–160px section padding).
- Card internal padding is roomy (~32px), giving the "sticker/panel" feel room to breathe.
- Consistent ~24px gap between grid items.
- The nested-panel pattern (colored rounded section containing white cards) is always used with matching corner radii at both levels (outer panel slightly larger radius than inner cards) — a small but important consistency detail that makes the nesting feel intentional rather than accidental.

---

## 8. Motifs Worth Reusing Elsewhere

1. **Two-tone anchor palette** (one saturated brand color + one dark ink color used for *everything* neutral, text, and strokes) instead of a gray scale.
2. **Scalloped wave dividers** between full-bleed color sections instead of straight edges.
3. **Panel-within-panel nesting**: a big colored rounded container holding smaller white rounded cards, reused at least twice (features intro / how-it-works, and the closing split).
4. **Flat "hard" drop shadows** + thin ink-colored borders on every card, giving a consistent sticker/paper-cutout feel.
5. **Illustrative, simplified UI mockups** instead of real screenshots for product demonstration — keeps full color control.
6. **Eyebrow labels in all-caps** above every major heading (BEFORE/AFTER, STEP 1/2/3, "How it works") as a consistent wayfinding pattern.
7. **Asymmetric bookending**: hero and closing section both pair a bold-color panel against a neutral/informational panel — visually ties the top and bottom of the page together.

---

## 9. Responsive Notes (inferred from mobile-width screenshots)

- The layout appears to reflow into a single column at narrower widths — hero would stack text above the diagram, feature grid would likely go 2-up or 1-up, and the how-it-works panel's two columns would stack (intro text above, step cards below).
- Section padding and heading sizes would need to scale down significantly (H1 from ~90px down to ~40–48px) to avoid overwhelming a mobile viewport.
