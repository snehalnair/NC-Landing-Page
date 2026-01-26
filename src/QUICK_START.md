# 🚀 Quick Start - Deploy to Vercel in 5 Minutes

## Your NeuralConnexions landing page is ready to deploy!

### ✅ What's Already Done

All React components have been built and configured for Next.js with:
- ✅ Proper TypeScript types
- ✅ "use client" directives where needed
- ✅ Responsive Tailwind CSS styling
- ✅ Brand colors and typography (Playfair Display + Inter)
- ✅ All 11 sections: Hero, Core Concept, Problem, Digital Twin, Lifecycle, Innovation, Business Model, Global Vision, Research Hub, Team, CTA, Footer

---

## 📂 Integration with Your Next.js Project

You have a `nc-landing-page` folder with the structure shown in your screenshot. Here's how to integrate:

### Step 1: Copy Components

From Figma Make, copy all files from `/components/` to your project's `src/components/` folder:

```
src/components/
├── Hero.tsx ✓
├── CoreConcept.tsx ✓
├── Problem.tsx ✓
├── DigitalTwin.tsx ✓
├── LifecycleJourney.tsx ✓
├── Innovation.tsx ✓
├── BusinessModel.tsx ✓
├── GlobalVision.tsx ✓
├── ResearchHub.tsx ✓
├── Team.tsx ✓
├── CTASection.tsx ✓
├── Footer.tsx ✓
├── figma/
│   └── ImageWithFallback.tsx ✓
└── ui/
    ├── button.tsx ✓
    ├── card.tsx ✓
    └── avatar.tsx ✓
```

### Step 2: Update Your Main Page

**File: `src/app/page.tsx`**

Replace with:

```tsx
import Hero from "@/components/Hero";
import CoreConcept from "@/components/CoreConcept";
import Problem from "@/components/Problem";
import DigitalTwin from "@/components/DigitalTwin";
import LifecycleJourney from "@/components/LifecycleJourney";
import Innovation from "@/components/Innovation";
import BusinessModel from "@/components/BusinessModel";
import GlobalVision from "@/components/GlobalVision";
import ResearchHub from "@/components/ResearchHub";
import Team from "@/components/Team";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <CoreConcept />
      <Problem />
      <DigitalTwin />
      <LifecycleJourney />
      <Innovation />
      <BusinessModel />
      <GlobalVision />
      <ResearchHub />
      <Team />
      <CTASection />
      <Footer />
    </main>
  );
}
```

### Step 3: Copy Global Styles

**File: `src/app/globals.css`**

Make sure it includes the Google Fonts and all custom CSS from `/styles/globals.css`.

### Step 4: Update Next Config

**File: `next.config.ts`**

Add Unsplash image support:

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

### Step 5: Install Dependencies

In your `nc-landing-page` folder, make sure you have these in `package.json`:

```bash
npm install lucide-react @radix-ui/react-avatar @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

---

## 🔥 Deploy to Vercel

### Method 1: GitHub + Vercel (Recommended)

```bash
# In your nc-landing-page folder:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO>
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repo
4. Click "Deploy" (Vercel auto-detects Next.js!)

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

---

## 🧪 Test Locally First

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000

# Test production build
npm run build
npm start
```

If `npm run build` succeeds, Vercel deployment will work! ✨

---

## 🎨 Customization Guide

### Update Colors

Edit brand colors in `src/app/globals.css`:

```css
:root {
  --nc-blue: #DCE7F3;
  --nc-blush: #E7A59C;
  --nc-ivory: #F5F6F7;
  --nc-slate: #8CA3B0;
}
```

### Update Content

Each component is self-contained. Just edit the data arrays inside:

- **Hero.tsx**: Main headline and CTAs
- **Team.tsx**: Team members array
- **ResearchHub.tsx**: Research articles and references
- **BusinessModel.tsx**: Revenue streams
- etc.

### Add Your Logo

Replace the Sparkles icon in `Hero.tsx`:

```tsx
// Replace this:
<Sparkles className="w-8 h-8 text-[#8CA3B0]" />

// With your logo image:
<img src="/logo.png" alt="NeuralConnexions" className="h-8" />
```

---

## 📊 File Structure Reference

Your final structure should look like:

```
nc-landing-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx          ← Main page (all components imported here)
│   │   └── globals.css       ← Fonts + brand colors
│   └── components/
│       ├── Hero.tsx
│       ├── CoreConcept.tsx
│       ├── Problem.tsx
│       ├── DigitalTwin.tsx
│       ├── LifecycleJourney.tsx
│       ├── Innovation.tsx
│       ├── BusinessModel.tsx
│       ├── GlobalVision.tsx
│       ├── ResearchHub.tsx
│       ├── Team.tsx
│       ├── CTASection.tsx
│       ├── Footer.tsx
│       ├── figma/
│       │   └── ImageWithFallback.tsx
│       └── ui/
│           ├── button.tsx
│           ├── card.tsx
│           └── avatar.tsx
├── public/
│   └── (your assets)
├── package.json
├── next.config.ts
├── tsconfig.json
└── tailwind.config.ts
```

---

## ❓ Troubleshooting

### Build Error: "use client" missing

**Solution**: These components need `"use client"` at the top:
- App.tsx / page.tsx
- Hero.tsx
- CTASection.tsx
- ResearchHub.tsx
- Team.tsx
- DigitalTwin.tsx

(Already added in all provided components!)

### Module Not Found

**Solution**: 
```bash
npm install
```

Make sure all imports use `@/components/...` syntax.

### Images Not Loading

**Solution**: Check `next.config.ts` has Unsplash domain configured.

---

## 🎉 You're Ready!

Your landing page is production-ready. Just copy the files, run `npm run build`, and deploy to Vercel!

Need help? Check `/DEPLOYMENT_GUIDE.md` for more detailed instructions.

**Good luck with your launch! 🚀**
