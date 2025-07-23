// AUI Tailwind Configuration
// Usage: Import this config in AI tools that support custom Tailwind configs

module.exports = {
  theme: {
    extend: {
      colors: {
        // Asurion Brand Colors
        primary: {
          DEFAULT: '#8223d2',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#4a68f9', 
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#edddf6',
          foreground: '#211829',
        },
        background: '#ffffff',
        foreground: '#1a1c1e',
        muted: {
          DEFAULT: '#f1f0f4',
          foreground: '#5d5e61',
        },
        border: '#c6c6ca',
        input: '#eeedf1',
        ring: '#8223d2',
        // Status colors
        success: '#136d31',
        warning: '#e7c500', 
        destructive: '#b91a24',
        // Chart colors
        chart: {
          1: '#8223d2',
          2: '#4a68f9',
          3: '#6efac3',
          4: '#136d31',
          5: '#e7c500',
        },
      },
      borderRadius: {
        lg: '0.25rem',
        md: 'calc(0.25rem - 2px)',
        sm: 'calc(0.25rem - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}