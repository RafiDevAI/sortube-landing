# YT Sorter Brand Guidelines

## Direction source

Selected reference: https://storage.googleapis.com/ployai/033f45f8-8a0f-4da7-99d7-e3c1626004d5/user/ai-yt-sorter-curved-bold-260808194957.webp

User decision: use the bold concept’s smooth organic background waves, simplify product explanations until they are understandable at a glance, and apply a restrained playful-brutalist layer through strong outlines and hard offset shadows.

## Brand character

Playful, useful, open, and technically credible. YT Sorter should feel like a friendly open-source utility—not a corporate AI platform and not a generic SaaS template.

## Palette

- Lavender hero: `#817EFF`
- Mint field: `#E4FAF1`
- Peach workflow: `#FFE8DD`
- Forest display text: `#003B26`
- Forest CTA: `#004D34`
- White cards: `#FFFFFF`
- Light neutral border reference: `#E2E8F0`
- Coral playlist accent: `#FDA4AF`
- Blue playlist accent: `#93C5FD`
- Yellow merge accent: `#FEF08A`
- Accent colors identify categories or status; they do not replace the main section palette.

## Typography

- Use Inter Variable throughout. Display headings use a heavy modern sans treatment with tight tracking and sentence case.
- Hero heading is a solid three-line typographic block on desktop: “Your saved / videos, / sorted.”
- Body text uses a neutral sans at comfortable line height.
- Do not use gradient text, all-caps display copy, or decorative serif pairings.

## Composition

- Navigation and hero must form one continuous lavender section—never separate bands or sidebar-like regions.
- Hero is split copy/product visual, approximately 45/55, with the product explanation receiving enough width to remain legible.
- The main recognition device is the section geometry: saturated lavender hero, repeating scalloped wave into mint, then a broad peach workflow shape.
- The hero may clip decorative overflow, but must never create its own scrollbar or nested scroll context.
- Maintain generous vertical space around headings, but keep product visuals large enough to read.
- Use curved section boundaries at chapter transitions; do not turn every card into a blob.

## Components

- Primary buttons: forest green, white text, 8px radius, about 42px tall, 2px forest outline, and a small hard offset shadow.
- Secondary buttons: lavender or soft surface, 2px forest outline, same radius, and the same compact hard shadow.
- Cards: white, roughly 12px radius, 2px forest outline, and a 6px hard forest offset shadow. Colored cards are reserved for playlist categories and status surfaces.
- Large chapter panels may use a slightly softer 20–28px radius, but retain the 2px outline and hard shadow.
- Topic labels: compact rounded rectangles in mint, coral, blue, or yellow with 2px dark strokes and small hard shadows.
- Utility links may use bold text with a 2px underline and generous underline offset.
- Icons: simple Lucide line icons, modest scale. Product diagrams may use CSS/SVG lines and arrows.

## Imagery and diagrams

- Favor code-built product UI and diagrams over stock imagery.
- Hero visual shows the outcome through a plain before/after comparison—not the full workflow. “Before” is one Watch Later playlist containing mixed video topics. “After” is three clearly named topic playlists with video counts and a visible merge state.
- The hero must be understood within a few seconds. Do not use miniature dashboards, nested management interfaces, loose floating category tags, or unexplained boxes.
- “How it works” owns the sequential explanation: paste playlist ID and Gemini key → Gemini builds a categorized draft → review, create, clean up, and resume later.
- All three workflow cards use the same white surface. Step 2 is distinguished through its AI icon and compact category tags—not a full purple card.
- Use numbered labels and directional arrows whenever the copy promises sequential steps.
- Decorative category outputs may support a flow, but must never replace or duplicate the actual explanation.
- Never bake marketing copy into generated images; keep text and UI accessible in code.

## Motion

- Keep motion functional and light: nav reveal, subtle section entrance, or sorting-path emphasis only.
- Respect reduced-motion preferences.
- No perpetual floating, bobbing, pulsing, or magnetic buttons.

## Anti-patterns

- No generic purple gradients or glassmorphism.
- No fabricated stats, testimonials, customer logos, or pricing.
- No stock photos of creators or developers.
- No confusing miniature dashboard compositions in the hero.
- No uniform icon-above-text card grid without varied content structure.
- No login or cloud-account framing; the product is locally hosted.
- No abrupt unrelated dark/inverse section.
- No nested scrollbars inside the hero or any individual marketing section.
- Do not apply brutalist outlines and shadows to every small text element; reserve them for controls, cards, labels, product UI, and major panels.