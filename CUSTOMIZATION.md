# Customization Guide

This guide will help you customize the YT Sorter landing page for your own project.

## 🎨 Colors

All colors are defined in `app/globals.css` using CSS custom properties:

```css
:root {
  /* Primary brand colors */
  --lavender-hero: #817EFF;      /* Hero section background */
  --mint-field: #E4FAF1;         /* Features section background */
  --peach-workflow: #FFE8DD;     /* How it works panel */
  --forest-text: #003B26;        /* Main text color */
  --forest-cta: #004D34;         /* Button backgrounds */
  
  /* Accent colors for cards/highlights */
  --coral-accent: #fda4af;
  --blue-accent: #93c5fd;
  --mint-accent: #D7F0DE;
  --yellow-accent: #FEF08A;
}
```

**To change colors:**
1. Update the hex values in `:root`
2. The same values are used in `@theme inline` for Tailwind
3. Colors will automatically update throughout the site

## ✏️ Content

### Hero Section

Edit `app/components/Hero.tsx`:

```tsx
<h1>
  Your saved<br />videos,<br />sorted.
</h1>
```

Change the headline, description paragraphs, and button text.

### Features

Edit `app/components/Features.tsx` - the features array:

```tsx
const features = [
  {
    icon: BrainCircuit,           // Lucide icon component
    iconBg: 'bg-white',           // Background color class
    title: 'Your feature title',
    description: 'Your description',
    label: 'Your label',
  },
  // Add more features...
];
```

**Available icons:** Browse [lucide.dev](https://lucide.dev) for more icons.

### How It Works Steps

Edit `app/components/HowItWorks.tsx` - the steps array:

```tsx
const steps = [
  {
    number: 1,
    icon: ListVideo,
    iconBg: 'bg-sky-accent',
    title: 'Your step title',
    description: 'Your step description',
    trailing: <YourComponent />,  // Optional right-side element
  },
];
```

### Footer

Edit `app/components/Footer.tsx`:
- Update links
- Change section headings
- Modify copyright text

## 🔗 Navigation

Update links in `app/components/Header.tsx`:

```tsx
<nav>
  <a href="#features">Features</a>
  <a href="#how-it-works">How it works</a>
  {/* Add your own sections */}
</nav>
```

## 🖼️ Images & Assets

### Favicon

Replace `app/icon.svg` with your own icon. Supported formats:
- `icon.svg` - Vector (recommended)
- `icon.png` - Raster (16x16, 32x32, etc.)
- `favicon.ico` - Classic format

### OG Image (Social Sharing)

Create `app/opengraph-image.png` or `app/opengraph-image.jpg`:
- Recommended size: 1200x630px
- Automatically detected by Next.js

## 📝 Typography

### Fonts

The site uses Inter by default. To change:

1. **Google Fonts:**

```tsx
// app/layout.tsx
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: ['400', '700', '900'],
  subsets: ['latin'] 
})

// In HTML:
<html className={roboto.className}>
```

2. **Custom Fonts:**

Place font files in `public/fonts/` and update `app/globals.css`:

```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/your-font.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

:root {
  --font-heading: 'YourFont', sans-serif;
}
```

### Font Sizes

Headings use `clamp()` for responsive sizing:

```tsx
{/* Hero title */}
className="text-[clamp(4.5rem,7.1vw,7.4rem)]"

{/* Section title */}
className="text-5xl md:text-6xl"
```

Adjust these values in component files.

## 🎭 Styling System

### Brutal Shadows

Hard shadows are defined in `app/globals.css`:

```css
.brutal-shadow {
  box-shadow: 6px 6px 0 var(--forest-text);
}

.brutal-shadow-sm {
  box-shadow: 4px 4px 0 var(--forest-text);
}
```

**To customize:**
- Change offset: `4px 4px` → `8px 8px`
- Change blur: Add third value `4px 4px 2px`
- Change color: Replace `var(--forest-text)` with another color

### Border Radius

Defined in `@theme inline` in `globals.css`:

```css
--radius-button: 8px;
--radius-card: 12px;
--radius-card-lg: 16px;
--radius-panel: 28px;
```

Used as: `rounded-[var(--radius-button)]`

### Spacing

Uses Tailwind's default spacing scale. Common patterns:

```tsx
{/* Card padding */}
className="p-6"          // 1.5rem = 24px

{/* Section padding */}
className="px-6 py-16 md:px-10 lg:px-16"

{/* Gap between items */}
className="gap-5"        // 1.25rem = 20px
```

## 🔄 Animations (Optional)

Add subtle animations with Framer Motion:

```bash
npm install framer-motion
```

```tsx
// app/components/Hero.tsx
import { motion } from 'framer-motion'

<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your saved videos, sorted.
</motion.h1>
```

## 📱 Responsive Breakpoints

Tailwind breakpoints used:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up

Example:
```tsx
{/* Stack on mobile, grid on desktop */}
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
```

## 🧩 Adding New Sections

1. Create a new component in `app/components/`:

```tsx
// app/components/Pricing.tsx
export default function Pricing() {
  return (
    <section className="bg-mint-field px-6 py-16" id="pricing">
      {/* Your content */}
    </section>
  );
}
```

2. Import and add to `app/page.tsx`:

```tsx
import Pricing from './components/Pricing';

export default function HomePage() {
  return (
    <main>
      {/* ... */}
      <Pricing />
      {/* ... */}
    </main>
  );
}
```

3. Add to navigation in `Header.tsx`

## 🎨 Scalloped Wave Dividers

The wave SVG between sections:

```tsx
<svg viewBox="0 0 1440 112" className="text-mint-field">
  <path 
    fill="currentColor" 
    d="M0 50 Q30 92 60 50 T120 50 T180 50..." 
  />
</svg>
```

**To customize:**
- Change `currentColor` color via `className="text-[color]"`
- Adjust wave height by changing Y values in path
- Flip vertically: `transform: scaleY(-1)`

## 🔧 Advanced Customization

### Dark Mode

Add dark mode toggle:

1. Update `globals.css`:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --forest-text: #E4FAF1;
    --mint-field: #003B26;
    /* ... flip colors ... */
  }
}
```

2. Or use manual toggle with `next-themes` package

### Multilingual

Use `next-intl` or similar:

```bash
npm install next-intl
```

Follow the [next-intl documentation](https://next-intl-docs.vercel.app/).

## 💡 Tips

1. **Keep it consistent**: Use the same spacing/sizing patterns throughout
2. **Test mobile first**: Most visitors are on mobile
3. **Limit colors**: Stick to your palette for visual coherence
4. **Optimize images**: Use WebP format, lazy loading
5. **Semantic HTML**: Use proper heading hierarchy (h1 → h2 → h3)

## 🆘 Need Help?

- Check component files for examples
- Browse [Tailwind CSS docs](https://tailwindcss.com)
- Review [Next.js documentation](https://nextjs.org/docs)
- Inspect element in browser DevTools to understand styles

---

Happy customizing! 🎨
