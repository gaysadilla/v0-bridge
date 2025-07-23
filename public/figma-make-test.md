# Figma Make AUI Theme Test

## 🎯 Test Instructions

### Step 1: Open Figma Make Project
1. Go to [figma.com/make](https://figma.com/make)
2. Create or open a project

### Step 2: Replace globals.css
1. Find the `globals.css` file in your project
2. **Copy ALL content** from: `https://v0-bridge-xxx.vercel.app/figma-make-aui-override.css`
3. **Replace the entire globals.css** with the AUI override CSS
4. Save the file

### Step 3: Test the Override
Ask Figma Make to create:
```
Create a dashboard with:
- Navigation sidebar
- Primary action buttons
- Data cards
- A hero section with CTA button
```

### Step 4: Verify Results
You should see:
- ✅ **Purple buttons** (#8223d2) instead of dark/black
- ✅ **Blue accents** (#4a68f9) for secondary elements
- ✅ **Asurion brand colors** throughout
- ✅ **Professional AUI aesthetic**

### Alternative: CSS Import Method
If replacing the file doesn't work, try adding this at the top of globals.css:
```css
@import url('https://v0-bridge-xxx.vercel.app/figma-make-aui-override.css');
```

## 🚀 Why This Works
- **1:1 Variable Mapping**: Uses exact same CSS variable names as Figma Make
- **Complete Override**: Replaces all default colors with AUI values
- **No Code Changes**: Just CSS replacement, components work unchanged
- **Instant Branding**: All ShadCN components automatically use Asurion colors

## 🎨 Key Color Changes
- `--primary: #030213` → `--primary: #8223d2` (Asurion Purple)
- `--accent: #e9ebef` → `--accent: #4a68f9` (Asurion Blue)  
- All other colors mapped to AUI design system values

## 🧪 Expected Output
After applying the CSS, any component generated should automatically use Asurion branding without needing to specify colors in prompts.