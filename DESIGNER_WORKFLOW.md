# AUI AI Design Workflow Guide

## 🎯 Purpose
Ensure all AI-generated designs use authentic Asurion branding and design system components.

## 📍 Theme Registry
**Primary Source:** https://v0-bridge-xxx.vercel.app (replace with your actual URL)

## 🔄 Workflow by Tool

### v0.dev
1. **Start every session with:**
   ```
   Use the Asurion design system from https://v0-bridge-xxx.vercel.app/r/theme.json
   
   Apply these brand requirements:
   - Primary color: #8223d2 (Asurion purple)
   - Accent color: #4a68f9 (Asurion blue)
   - Background: #ffffff
   - Text: #1a1c1e
   - Use ShadCN components with AUI styling
   ```

2. **For specific components, reference:**
   - Buttons: `https://v0-bridge-xxx.vercel.app/r/button.json`
   - Cards: `https://v0-bridge-xxx.vercel.app/r/card.json`
   - Forms: `https://v0-bridge-xxx.vercel.app/r/input.json`

### Loveable.ai
1. **Project setup prompt:**
   ```
   Configure this project with Asurion's design system:
   - Import theme from https://v0-bridge-xxx.vercel.app/r/theme.json
   - Primary: #8223d2, Accent: #4a68f9
   - Use Tailwind with custom AUI configuration
   ```

### Figma Make / Other Tools
1. **Initial prompt:**
   ```
   Apply custom design system:
   - Theme URL: https://v0-bridge-xxx.vercel.app/r/theme.json
   - Brand colors: Purple #8223d2, Blue #4a68f9
   - Follow ShadCN/Tailwind patterns with AUI styling
   ```

## 📋 Standard Prompts Library

### Landing Page
```
Create a landing page using Asurion design system (https://v0-bridge-xxx.vercel.app/r/theme.json):
- Hero section with purple CTA button (#8223d2)
- Feature cards with subtle shadows
- Clean typography using AUI tokens
- Professional tech company aesthetic
```

### Dashboard
```
Design a dashboard with AUI components:
- Reference: https://v0-bridge-xxx.vercel.app/r/dashboard.json
- Purple primary buttons and accents
- Cards for data display
- Consistent with Asurion brand guidelines
```

### Forms
```
Create forms using AUI input patterns:
- Input styles: https://v0-bridge-xxx.vercel.app/r/input.json
- Purple focus states (#8223d2)
- Proper validation styling
- Accessible form design
```

## ✅ Quality Checklist
Before using any AI-generated design:
- [ ] Uses Asurion purple (#8223d2) as primary color
- [ ] Blue accent (#4a68f9) for secondary actions
- [ ] Clean, professional typography
- [ ] Consistent spacing and borders
- [ ] Matches AUI component patterns

## 🚨 Common Issues & Fixes
- **Generic green/blue buttons:** Add "Use #8223d2 purple for all primary buttons"
- **Wrong colors:** Reference the theme URL explicitly in your prompt
- **Inconsistent styling:** Start with "Use Asurion design system from [URL]"

## 🔄 Iteration Pattern
1. **Start with theme reference**
2. **Generate initial design**
3. **Refine with:** "Update colors to match AUI standards: purple #8223d2, blue #4a68f9"
4. **Final check against AUI patterns**