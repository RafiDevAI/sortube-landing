# Sortube Landing Page

A modern, responsive landing page for Sortube - an AI-powered YouTube playlist organizer.

## 🎯 Overview

This is the official landing page for **Sortube**, an open-source, locally-hosted tool that uses Google Gemini AI to automatically categorize and organize YouTube playlists. The landing page showcases the product's features, explains how it works, and directs users to the GitHub repository.

Built with Next.js 16, React 19, and Tailwind CSS v4, following a pixel-perfect design specification with a playful yet professional aesthetic featuring lavender, mint, and peach color scheme with scalloped wave dividers.

## ✨ Features

- 🎨 **Pixel-perfect design** - Matches original specifications exactly
- 📱 **Fully responsive** - Mobile-first design with tablet and desktop layouts
- ⚡ **Lightning fast** - Next.js 16 App Router with Turbopack
- 🎯 **Modern styling** - Tailwind CSS v4 with custom design system
- 🔍 **SEO optimized** - Complete metadata, sitemap, and robots.txt
- ♿ **Accessible** - Semantic HTML and ARIA labels throughout
- 🎭 **Smooth interactions** - Hover effects and smooth scrolling
- 📦 **Zero bloat** - No unnecessary dependencies

## 🚀 Tech Stack

- **Framework:** Next.js 16.3.1 (App Router)
- **UI Library:** React 19.2.8
- **Styling:** Tailwind CSS v4 (PostCSS)
- **Icons:** Lucide React 1.31.0
- **Language:** TypeScript 5.x
- **Font:** Inter (Google Fonts)

## 📦 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/RafiDevAI/sortube-landing.git
cd sortube-landing
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
npm run dev      # Start development server (with Turbopack)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
sortube-landing/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation with mobile menu
│   │   ├── Hero.tsx            # Hero with before/after visualization
│   │   ├── Features.tsx        # 4 feature cards
│   │   ├── HowItWorks.tsx      # 3-step process + split cards
│   │   └── Footer.tsx          # Footer with links
│   ├── globals.css             # Theme variables + utilities
│   ├── layout.tsx              # Root layout + SEO metadata
│   ├── page.tsx                # Home page composition
│   ├── not-found.tsx           # Custom 404 page
│   ├── sitemap.ts              # SEO sitemap generator
│   └── icon.svg                # Favicon
├── public/
│   ├── robots.txt              # SEO robots file
│   └── sortube_icon_playful.svg # Brand icon
├── docs/
│   └── references/             # Design docs & screenshots
├── README.md                   # This file
├── PROJECT_OVERVIEW.md         # Complete documentation
├── CUSTOMIZATION.md            # Customization guide
├── DEPLOYMENT.md               # Deploy instructions
└── CHANGELOG.md                # Version history
```

## 🎨 Design System

### Color Palette
- **Lavender Hero:** `#817EFF` - Bold brand color for hero section
- **Mint Field:** `#E4FAF1` - Breathable background for content sections
- **Peach Workflow:** `#FFE8DD` - Warm accent for workflow panel
- **Forest Text:** `#003B26` - Near-black green for all text and borders

### Typography
- **Font:** Inter (400, 500, 600, 700, 800, 900)
- **Hero:** `clamp(4.5rem, 7.1vw, 7.4rem)` with tight letter-spacing
- **Headings:** Bold with negative letter-spacing
- **Body:** Regular weight, comfortable line-height

### Components
- **Buttons:** 2px forest border, 8px radius, hard 4px shadow
- **Cards:** 2px forest border, 12-16px radius, hard 6px shadow
- **Panels:** 28px radius with nested card structure
- **Waves:** Scalloped SVG dividers between sections

## 🎯 Key Sections

1. **Header** - Logo, navigation, CTA button
2. **Hero** - Three-line headline + before/after visualization
3. **Features** - 4 feature cards in responsive grid
4. **How It Works** - 3-step process with nested cards
5. **Bottom Section** - "Built locally" + requirements split cards
6. **Footer** - Links, resources, copyright

## 🔧 Customization

### Update GitHub Links
Replace placeholder `#open-source` links throughout the codebase:
```tsx
// Find and replace in all component files
#open-source → https://github.com/RafiDevAI/Sortube
```

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --lavender-hero: #817EFF;  /* Your brand color */
  --mint-field: #E4FAF1;     /* Background color */
  /* ... */
}
```

### Update Content
- **Hero headline:** `app/components/Hero.tsx`
- **Features:** `app/components/Features.tsx` - edit `features` array
- **Steps:** `app/components/HowItWorks.tsx` - edit `steps` array
- **Footer links:** `app/components/Footer.tsx`

For detailed customization, see [CUSTOMIZATION.md](./CUSTOMIZATION.md)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Deploy with one click

### Other Platforms
- **Netlify:** Connect repo and deploy
- **Self-hosted:** Build and serve with Node.js

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📖 Documentation

- **[PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md)** - Architecture, metrics, complete specs
- **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** - Step-by-step customization guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deploy to various platforms
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history and updates
- **[docs/references/](./docs/references/)** - Design docs and screenshots

## 🌐 Browser Support

**Desktop:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Mobile:**
- iOS Safari 14+
- Chrome Mobile 90+

## 📊 Performance

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.5s
- **Bundle Size:** ~85 KB first load JS

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source under the MIT License.

## 🙏 Credits

- **Design:** Based on original Sortube landing page specifications
- **Icons:** [Lucide Icons](https://lucide.dev)
- **Font:** [Inter](https://rsms.me/inter/) by Rasmus Andersson

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/RafiDevAI/sortube-landing/issues)
- **Discussions:** [GitHub Discussions](https://github.com/RafiDevAI/sortube-landing/discussions)

---

**Built with care for the Sortube project** 🎨✨
