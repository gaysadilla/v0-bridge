<a href="https://aui-v0-registry.vercel.app/">
  <h1 align="center">AUI v0 Registry</h1>
</a>

<p align="center">
    AUI v0 Registry is a custom component registry for Asurion's design system, built with Next.js and Shadcn/ui Registry. This enables "vibe coding" explorations with v0 that are visually consistent with Asurion's brand.
</p>

<p align="center">
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#open-in-v0"><strong>Open in v0</strong></a> ·
  <a href="#theming"><strong>Theming</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#file-structure"><strong>File Structure</strong></a> ·
  <a href="https://ui.shadcn.com/docs/registry"><strong>Read Docs</strong></a>
</p>
<br/>

## Overview

This registry provides:
- **AUI-branded components** that visually match Asurion's design system
- **Custom Tailwind configuration** with Asurion brand tokens
- **v0 integration** via "Open in v0" buttons for AI-powered design exploration
- **Authentic Asurion brand palette** with purple (#8223d2) primary and blue (#4a68f9) accent
- **Enhanced component variants** for success, warning, info states

## Authentic AUI Brand Colors

- **Asurion Purple**: `#8223d2` - Primary brand color for main actions
- **Asurion Blue**: `#4a68f9` - Accent color for interactive elements  
- **Asurion Green**: `#6efac3` - For positive states and highlights
- **Asurion Yellow**: `#d2fa46` - For special states and "tennis ball" moments
- **Success**: `#136d31` - For success states and confirmations
- **Warning**: `#e7c500` - For warnings and cautions
- **Error**: `#b91a24` - For errors and destructive actions

## Deploy Your Own

You can deploy your own version of the AUI v0 Registry to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fregistry-starter&project-name=my-registry&repository-name=my-registry&demo-title=Registry%20Starter&demo-description=Registry%20Starter%20is%20a%20free%2C%20open-source%20template%20built%20with%20Next.js%20and%20Shadcn%2Fui%20Registry%20to%20accelerate%20your%20AI-Native%20Design%20System.&demo-url=https%3A%2F%2Fregistry-starter.vercel.app&demo-image=%2F%2Fregistry-starter.vercel.app%2Fpreview.png)

## Open in v0

[![Open in v0](https://registry-starter.vercel.app/open-in-v0.svg)](https://v0.dev/chat/api/open?title=Dashboard+Kit&prompt=These+are+existing+design+system+styles+and+files.+Please+utilize+them+alongside+base+components+to+build.&url=https%3A%2F%2Fregistry-starter.vercel.app%2Fr%2Fdashboard.json)

This registry application also exposes `Open in v0` buttons for each component. Once this application is deployed, the
`Open in v0` button redirects to [`v0.dev`](https://v0.dev) with a prepopulated prompt and a URL pointing back to this
registry's `/r/${component_name}.json` endpoint. This endpoint will provide v0 the necessary file information, content,
and metadata to start your v0 chat with your component, theme, and other related code.

These `/r/${component_name}.json` files are generated using `shadcn/ui` during the `build` and `dev` based on the
repository's [`registry.json`](./registry.json). For more information, refer to the
[documentation](https://ui.shadcn.com/docs/registry/registry-json).

## Theming

To use a custom theme for all the components, all you need to do is modify the CSS tokens in
[`tokens.css`](./src/app/tokens.css). More information on these practices can be found
on [ui.shadcn.com/docs](https://ui.shadcn.com/docs).

#### MCP

To use this registry with MCP, you must also edit [`registry.json`](./registry.json)'s first
`registry-item` named `registry`. This `registry:style` item also contains your design tokens that can be used with MCP.

For example, it looks like this:

```json
    {
      "name": "registry",
      "type": "registry:style",
      "cssVars": {
        "light": {
          "primary": "oklch(0.52 0.13 144.17)",
          "primary-foreground": "oklch(1.0 0 0)",
          "radius": "0.5rem",
          ...
        },
        "dark": {
          "primary": "oklch(0.52 0.13 144.17)",
          "primary-foreground": "oklch(1.0 0 0)",
          ...
        }
      },
      "files": []
    }
```

#### Fonts

To use custom fonts, you can either use [
`next/font/google`](https://nextjs.org/docs/pages/getting-started/fonts#google-fonts) or the [
`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) CSS rule. For example, `fonts.css` might look
like:

```css
@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm45xW5rygbi49c.woff2') format('woff2'),
    url('https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm45xW5rygbj49c.woff') format('woff');
}

@font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: url('https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD-w.woff2') format('woff2'),
    url('https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3g3D_w.woff') format('woff');
}
```

If you use `@font-face`, you will also need to modify [`tailwind.css`](src/app/tailwind.css) AND
[`tailwind.config.ts`](src/v0/tailwind.config.ts) to map your custom fonts to Tailwind. Refer to this
[Tailwind documentation](https://tailwindcss.com/docs/font-family#customizing-your-theme)

## Running locally

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000).

## File Structure

`app/(registry)` routes contains the registry pages.

`app/demo` routes contains various UI primitives, Components, or Blocks (based on `registry.json`)

`@/components` contains all components used in the registry

`@/components/ui` contains all `shadcn/ui` UI Primitives used in the registry

`@/components/registry` contains all components for this Registry Starter application

`@/hooks` contains all React hooks

`@/lib` contains all business logic & utils

`@/v0` contains all v0 collateral used in `registry.json`