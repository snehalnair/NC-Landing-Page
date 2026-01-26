# NeuralConnexions Landing Page - Deployment Guide

## ✅ Your Components are Ready!

All React components have been prepared for Next.js deployment with proper `"use client"` directives where needed.

## 🚀 Deploying to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - NeuralConnexions landing page"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

## 📋 Required Files in Your Project

Make sure your `nc-landing-page` directory has these files:

### `package.json`
```json
{
  "name": "neuralconnexions-landing",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.300.0",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.3.0"
  }
}
```

### `next.config.ts` or `next.config.js`
```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
```

### Project Structure
```
nc-landing-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
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
│   └── favicon.ico
├── package.json
├── next.config.ts
├── tsconfig.json
└── tailwind.config.ts
```

## 🔧 Integration Steps

Since you already have a `src/app` folder structure, here's how to integrate the components:

### 1. Update `src/app/page.tsx`
Replace the contents with:
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
    <main className="min-h-screen">
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

### 2. Update `src/app/layout.tsx`
Make sure it includes:
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuralConnexions - The World's First Cognitive Companion",
  description: "AI that understands human connection — guiding you from first contact to lifelong growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### 3. Copy the components
Copy all the components from Figma Make to your `src/components/` folder.

### 4. Update `src/app/globals.css`
Make sure it includes the Google Fonts import and all the custom CSS variables.

## 🐛 Troubleshooting Build Issues

### Common Error: "use client" missing
- **Solution**: Make sure these components have `"use client"` at the top:
  - `App.tsx` (or `page.tsx`)
  - `Hero.tsx`
  - `CTASection.tsx`
  - `ResearchHub.tsx`
  - `Team.tsx`

### Common Error: Module not found
- **Solution**: Run `npm install` to install all dependencies
- Check that all import paths use `@/components/...` format

### Common Error: Image domains not configured
- **Solution**: Add Unsplash domain to `next.config.ts`:
  ```typescript
  images: {
    domains: ['images.unsplash.com'],
  }
  ```

## 📝 Build Locally First

Before deploying to Vercel, test the build locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test production build
npm run build
npm start
```

If `npm run build` succeeds, your deployment will work on Vercel!

## 🎨 Custom Domain (Optional)

After deployment, you can add a custom domain in Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your domain (e.g., neuralconnexions.com)
4. Follow DNS configuration instructions

## ✨ Your Site is Production-Ready!

All components are:
- ✅ Next.js compatible
- ✅ Properly typed with TypeScript
- ✅ Responsive and mobile-friendly
- ✅ Optimized for performance
- ✅ SEO-ready with semantic HTML

Good luck with your launch! 🚀
