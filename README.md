# NeuralConnexions Landing Page

This folder contains the complete landing page for neuralconnexions.ai based on your Figma design exports.

## Files Included

- `app/page.tsx` - The main landing page with all sections
- `app/globals.css` - Global styles with your brand colors and typography
- `app/layout.tsx` - Root layout with metadata and SEO tags

## How to Deploy

### Option 1: Replace files in your existing repo

1. In your `nc-landing-page` repository, replace the contents of:
   - `app/page.tsx` with the new `page.tsx`
   - `app/globals.css` with the new `globals.css`
   - `app/layout.tsx` with the new `layout.tsx`

2. Make sure you have `lucide-react` installed:
   ```bash
   npm install lucide-react
   ```

3. Commit and push to your `main` branch:
   ```bash
   git add .
   git commit -m "Add NeuralConnexions landing page design"
   git push origin main
   ```

4. Vercel will automatically redeploy your site at neuralconnexions.ai

### Option 2: Using Git Commands

```bash
# Navigate to your project
cd nc-landing-page

# Copy the new files (adjust paths as needed)
cp path/to/downloaded/app/page.tsx ./app/page.tsx
cp path/to/downloaded/app/globals.css ./app/globals.css
cp path/to/downloaded/app/layout.tsx ./app/layout.tsx

# Install dependencies if needed
npm install lucide-react

# Push to GitHub
git add .
git commit -m "Add NeuralConnexions landing page"
git push origin main
```

## Design System

### Brand Colors
- **NC Blue**: `#DCE7F3` - Light, calming blue
- **NC Blush**: `#E7A59C` - Warm, empathetic coral/blush
- **NC Ivory**: `#F5F6F7` - Clean background
- **NC Slate**: `#8CA3B0` - Primary accent color

### Typography
- **Headings**: Playfair Display (serif) - Elegant, approachable
- **Body**: Inter (sans-serif) - Clean, readable

### Sections Included
1. Hero - Main headline with CTAs
2. Problem - Before/After communication comparison
3. Core Concept - Find → Nurture → Sustain flow
4. Digital Twin - AI features and capabilities
5. Lifecycle Journey - Phase diagram and table
6. Innovation - Three pillars of technology
7. Business Model - Revenue streams
8. Research Hub - Featured research and references
9. Global Vision - UK-based, global mission
10. Team - Founding team profiles
11. CTA Section - Final call to action
12. Footer - Links and social media

## Dependencies

Make sure these are in your `package.json`:
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "^0.300.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.0.0",
    "typescript": "^5.0.0"
  }
}
```

## Need Help?

If you encounter any issues with the deployment, check:
1. All dependencies are installed (`npm install`)
2. Tailwind CSS is properly configured
3. The `app` directory structure matches Next.js 13+ conventions
