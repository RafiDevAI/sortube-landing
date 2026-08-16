# Deployment Guide

This guide covers various deployment options for the YT Sorter landing page.

## 🚀 Quick Deploy Options

### Vercel (Recommended)

The easiest way to deploy your Next.js app.

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

**Custom Domain:**
- Add your domain in Vercel dashboard
- Update DNS records as instructed

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### GitHub Pages (Static Export)

For static hosting on GitHub Pages:

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. Build:
```bash
npm run build
```

3. Deploy the `out` folder to GitHub Pages

### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t yt-sorter-landing .
docker run -p 3000:3000 yt-sorter-landing
```

## 🔧 Before Deployment

### 1. Update GitHub Links

Replace all `#open-source` placeholders with your actual GitHub repository URL:

```bash
# Find all instances
grep -r "#open-source" app/

# Or use find and replace in your editor
```

### 2. Update Metadata

Edit `app/layout.tsx` to add:
- Canonical URL
- Open Graph image
- Twitter card image

### 3. Optimize Performance

```bash
# Analyze bundle
npm run build
```

Check the build output for:
- Large pages (should be < 100kb)
- Unused dependencies
- Optimization opportunities

### 4. Environment Variables

If you add any environment variables, create `.env.local`:

```env
NEXT_PUBLIC_GITHUB_REPO=https://github.com/yourusername/yt-sorter
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

And update your deployment platform with these variables.

## 📊 Analytics (Optional)

### Google Analytics

1. Get your GA4 Measurement ID
2. Add to `app/layout.tsx`:

```tsx
import Script from 'next/script'

// In the component:
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## 🔒 Security Headers

Add security headers in `next.config.ts`:

```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

## 🌐 Custom Domain

### Vercel
1. Go to project settings
2. Domains → Add
3. Follow DNS instructions

### Netlify
1. Go to Domain settings
2. Add custom domain
3. Configure DNS

### Cloudflare (with any host)
1. Add your domain to Cloudflare
2. Update nameservers at registrar
3. Configure SSL/TLS to "Full"
4. Enable caching and optimization

## ✅ Pre-launch Checklist

- [ ] All GitHub links updated
- [ ] Metadata complete (title, description, OG image)
- [ ] Favicon present
- [ ] Mobile responsive tested
- [ ] Page load speed tested (use PageSpeed Insights)
- [ ] Forms tested (if any)
- [ ] Analytics configured
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] 404 page customized (optional)
- [ ] robots.txt configured (optional)
- [ ] sitemap.xml generated (optional)

## 🐛 Troubleshooting

**Build fails:**
- Check Node version (needs 18+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run build`

**Styles not loading:**
- Ensure `globals.css` is imported in `layout.tsx`
- Check Tailwind config
- Clear browser cache

**Images not showing:**
- Check `public` folder structure
- Verify image paths (use `/` prefix for public folder)

---

Need help? Check the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
