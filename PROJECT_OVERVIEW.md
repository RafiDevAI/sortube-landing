# YT Sorter Landing Page - Project Overview

## 📋 Project Summary

This is a pixel-perfect recreation of the YT Sorter landing page, built with modern web technologies and following the original design specifications exactly.

## 🎯 Design Specifications Met

### Visual Design
✅ **Color Palette**
- Lavender hero background: `#817EFF`
- Mint field sections: `#E4FAF1`
- Peach workflow panel: `#FFE8DD`
- Forest text (near-black green): `#003B26`
- Coral, blue, mint, and yellow accent colors

✅ **Typography**
- Inter font family throughout
- Tight letter spacing on headings: `-0.067em` to `-0.03em`
- Responsive clamp() sizing for hero: `clamp(4.5rem,7.1vw,7.4rem)`
- Font weights: regular (400), medium (500), semibold (600), bold (700), extrabold (800-900)

✅ **Component Styles**
- **Buttons**: 2px forest border, 8px radius, hard 4px shadow
- **Cards**: 2px forest border, 12-16px radius, hard 6px shadow
- **Panels**: 2px forest border, 28px radius, hard shadow
- All shadows use `--forest-text` color

✅ **Layout & Spacing**
- Max width: 1440px container
- Section padding: 16-32 responsive
- Generous vertical rhythm (120-160px between sections)
- Grid gaps: 20px (gap-5)

✅ **Special Features**
- Scalloped wave SVG dividers between sections
- Before/after hero visualization with playlist cards
- Nested card panels (colored panel containing white cards)
- Icon chips with pastel backgrounds
- Micro badges for status indicators

### Sections Implemented

1. ✅ **Header**
   - Logo with "YT" in white, "Sorter" in forest
   - Desktop navigation (5 links)
   - Mobile hamburger menu
   - Primary CTA button (View on GitHub)

2. ✅ **Hero Section**
   - Two-column layout (45/55 split)
   - Large three-line headline
   - Two descriptive paragraphs
   - Two CTA buttons (primary + secondary)
   - Before/after visualization:
     - "Watch Later" card with 3 mixed videos
     - Center YT Sorter badge with arrow
     - 3 focused playlist cards (AI & Tech, Travel, Cooking)
     - Status badges (New playlist, ⚡ merged)
   - Glow effect behind visualization
   - Scalloped wave bottom edge

3. ✅ **Features Section**
   - Centered section title
   - 4-column grid (responsive: 1 → 2 → 4)
   - Each card:
     - Icon chip with pastel background
     - Bold title
     - Description paragraph
     - Label text
     - "Learn more" link with arrow

4. ✅ **How It Works Section**
   - Nested panel design (peach bg, rounded corners)
   - Two-column layout:
     - Left: Heading + description + setup link
     - Right: 3 sequential step cards
   - Step cards connected by down arrows
   - Trailing elements (key icon, category pills, CTA button)
   
   - Bottom split cards:
     - "Built to run locally" (lavender, with GitHub CTA)
     - "What you'll need" (white, checklist with checkmarks)

5. ✅ **Footer**
   - 3-column layout
   - Logo + tagline
   - Quick links
   - Resources
   - Copyright bar

6. ✅ **404 Page**
   - Centered error card
   - Large 404 in lavender badge
   - Heading and message
   - Two CTAs (Go home / Go back)

## 🏗️ Architecture

### File Structure
```
yt-sorter-landing/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation
│   │   ├── Hero.tsx            # Hero with visualization
│   │   ├── Features.tsx        # Feature cards
│   │   ├── HowItWorks.tsx      # Steps + split cards
│   │   └── Footer.tsx          # Footer links
│   ├── globals.css             # Theme + utilities
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Home page composition
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # SEO sitemap
│   └── icon.svg                # Favicon
├── public/
│   └── robots.txt              # SEO robots file
├── README.md                   # Quick start guide
├── DEPLOYMENT.md               # Deploy instructions
├── CUSTOMIZATION.md            # Customization guide
├── CHANGELOG.md                # Version history
└── PROJECT_OVERVIEW.md         # This file
```

### Technology Stack

**Framework & Core**
- Next.js 16.3.1 (App Router)
- React 19.2.8
- TypeScript 5.x

**Styling**
- Tailwind CSS v4 (PostCSS)
- CSS Custom Properties for theming
- Google Fonts (Inter)

**Icons**
- Lucide React 1.31.0

**Development**
- ESLint
- Next.js ESLint config

## 🎨 Design System

### Color Variables
```css
--lavender-hero: #817EFF
--mint-field: #E4FAF1
--peach-workflow: #FFE8DD
--forest-text: #003B26
--forest-cta: #004D34
--forest-secondary: #243b35
--coral-accent: #fda4af
--blue-accent: #93c5fd
--sky-accent: #dbeafe
--mint-accent: #D7F0DE
--yellow-accent: #FEF08A
--lavender-light: #D7DAF7
```

### Spacing Scale
- Card padding: `1.5rem` (p-6)
- Panel padding: `2-3rem` (p-8 to p-12)
- Section padding: `4-8rem` (py-16 to py-32)
- Grid gaps: `1.25rem` (gap-5)

### Border Radius
- Buttons: `8px`
- Cards: `12px`
- Large cards: `16px`
- Panels: `28px`

### Shadows (Brutal Style)
- Small: `4px 4px 0 var(--forest-text)`
- Regular: `6px 6px 0 var(--forest-text)`

### Typography Scale
- Hero: `clamp(4.5rem, 7.1vw, 7.4rem)` / 0.88 line height
- Section heading: `3rem` (md: `3.75rem`)
- Card title: `1.5rem`
- Body: `1rem` - `1.125rem`
- Small: `0.875rem`

## 📱 Responsive Design

**Breakpoints:**
- Mobile: < 640px (sm)
- Tablet: 640-1024px (md)
- Desktop: 1024px+ (lg)

**Layout Changes:**
- Navigation: Hamburger menu below 1024px
- Hero: Stacks vertically on mobile
- Features: 1 → 2 → 4 columns
- How It Works: Intro above steps on mobile
- Footer: Stacks vertically on mobile

## ✅ Features Implemented

- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Hover effects on buttons and links
- ✅ Mobile hamburger menu
- ✅ SEO metadata (title, description, OG tags)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Custom 404 page
- ✅ Custom favicon
- ✅ TypeScript throughout
- ✅ Accessible markup (ARIA labels, semantic HTML)
- ✅ Hard shadows (brutal design)
- ✅ Scalloped wave dividers

## 🚀 Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

**Optimization Techniques Used:**
- Next.js automatic code splitting
- Component-based architecture
- CSS-in-JS via Tailwind (minimal runtime)
- SVG icons (no image requests)
- No external dependencies for UI

## 🔍 SEO Optimizations

✅ Metadata
- Descriptive title and description
- Open Graph tags
- Twitter card tags
- Canonical URL support

✅ Structure
- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on meaningful images
- ARIA labels where needed

✅ Technical
- robots.txt
- sitemap.xml
- Fast load times
- Mobile-friendly

## 🧪 Browser Support

**Tested & Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Mobile:**
- iOS Safari 14+
- Chrome Mobile 90+

## 📊 Metrics

**Bundle Size (estimated):**
- First Load JS: ~85 KB
- Total Page Weight: < 200 KB

**Components:**
- 5 main components
- 1 layout
- 1 page
- 1 error page

**Lines of Code:**
- TypeScript/TSX: ~800 lines
- CSS: ~80 lines
- Config: ~50 lines

## 🎓 Learning Resources

If you're new to the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev)

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source under the MIT License.

---

**Built with precision and care for the YT Sorter project** 🎨✨
