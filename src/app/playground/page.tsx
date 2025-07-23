"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Download, Palette, RefreshCw } from "lucide-react";

// AUI Token Options (from your actual tokens)
const AUI_TOKENS = {
  // Brand Colors
  "Asurion Purple": "#8223d2",
  "Asurion Blue": "#4a68f9", 
  "Asurion Green": "#6efac3",
  "Asurion Yellow": "#d2fa46",
  "Brand White": "#ffffff",
  "Brand Black": "#0c0e11",
  
  // Status Colors
  "Success": "#136d31",
  "Success Soft": "#c5ffc8",
  "Warning": "#e7c500", 
  "Warning Soft": "#fff0c0",
  "Error": "#b91a24",
  "Error Soft": "#ffdad7",
  
  // Surface Colors
  "Surface": "#ffffff",
  "Surface Variant": "#faf9fc",
  "Sub Surface": "#f1f0f4",
  "On Surface": "#1a1c1e",
  "On Surface Soft": "#5d5e61",
  
  // Border & Outline
  "Outline": "#c6c6ca",
  "Outline Soft": "#eeedf1",
  "Border Soft": "rgba(198, 198, 202, 0.4)",
};

interface ThemeTokens {
  primary: string;
  primaryForeground: string;
  accent: string;
  accentForeground: string;
  secondary: string;
  secondaryForeground: string;
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
}

const DEFAULT_TOKENS: ThemeTokens = {
  primary: "#8223d2",
  primaryForeground: "#ffffff", 
  accent: "#4a68f9",
  accentForeground: "#ffffff",
  secondary: "#edddf6",
  secondaryForeground: "#211829",
  background: "#ffffff",
  foreground: "#1a1c1e",
  muted: "#f1f0f4",
  mutedForeground: "#5d5e61",
  destructive: "#b91a24",
  destructiveForeground: "#ffffff",
  border: "rgba(198, 198, 202, 0.4)",
  input: "#eeedf1",
  ring: "#8223d2",
};

export default function PlaygroundPage() {
  const [tokens, setTokens] = useState<ThemeTokens>(DEFAULT_TOKENS);
  const [generatedCSS, setGeneratedCSS] = useState("");

  // Apply tokens to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', tokens.primary);
    root.style.setProperty('--primary-foreground', tokens.primaryForeground);
    root.style.setProperty('--accent', tokens.accent);
    root.style.setProperty('--accent-foreground', tokens.accentForeground);
    root.style.setProperty('--secondary', tokens.secondary);
    root.style.setProperty('--secondary-foreground', tokens.secondaryForeground);
    root.style.setProperty('--background', tokens.background);
    root.style.setProperty('--foreground', tokens.foreground);
    root.style.setProperty('--muted', tokens.muted);
    root.style.setProperty('--muted-foreground', tokens.mutedForeground);
    root.style.setProperty('--destructive', tokens.destructive);
    root.style.setProperty('--destructive-foreground', tokens.destructiveForeground);
    root.style.setProperty('--border', tokens.border);
    root.style.setProperty('--input', tokens.input);
    root.style.setProperty('--ring', tokens.ring);
  }, [tokens]);

  // Generate CSS file content
  useEffect(() => {
    const css = generateFigmaMakeCSS(tokens);
    setGeneratedCSS(css);
  }, [tokens]);

  const updateToken = (key: keyof ThemeTokens, value: string) => {
    setTokens(prev => ({ ...prev, [key]: value }));
  };

  const resetToDefaults = () => {
    setTokens(DEFAULT_TOKENS);
  };

  const downloadCSS = () => {
    const blob = new Blob([generatedCSS], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'aui-figma-make-global.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyCSS = () => {
    navigator.clipboard.writeText(generatedCSS);
    alert('CSS copied to clipboard!');
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AUI Token Playground</h1>
        <p className="text-muted-foreground">
          Test and tweak AUI design tokens with live ShadCN components. Changes automatically generate the Figma Make CSS file.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Token Controls
              </CardTitle>
              <CardDescription>
                Select from authentic AUI design tokens
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2 mb-4">
                <Button onClick={resetToDefaults} variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset to Defaults
                </Button>
                <Button onClick={downloadCSS} size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download CSS
                </Button>
                <Button onClick={copyCSS} variant="outline" size="sm">
                  Copy CSS
                </Button>
              </div>

              <Tabs defaultValue="primary" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="primary">Primary</TabsTrigger>
                  <TabsTrigger value="secondary">Secondary</TabsTrigger>
                  <TabsTrigger value="system">System</TabsTrigger>
                </TabsList>
                
                <TabsContent value="primary" className="space-y-4">
                  <TokenSelector
                    label="Primary Color"
                    value={tokens.primary}
                    onChange={(value) => updateToken('primary', value)}
                  />
                  <TokenSelector
                    label="Primary Foreground"
                    value={tokens.primaryForeground}
                    onChange={(value) => updateToken('primaryForeground', value)}
                  />
                  <TokenSelector
                    label="Accent Color"
                    value={tokens.accent}
                    onChange={(value) => updateToken('accent', value)}
                  />
                  <TokenSelector
                    label="Accent Foreground"
                    value={tokens.accentForeground}
                    onChange={(value) => updateToken('accentForeground', value)}
                  />
                </TabsContent>

                <TabsContent value="secondary" className="space-y-4">
                  <TokenSelector
                    label="Secondary Color"
                    value={tokens.secondary}
                    onChange={(value) => updateToken('secondary', value)}
                  />
                  <TokenSelector
                    label="Secondary Foreground"
                    value={tokens.secondaryForeground}
                    onChange={(value) => updateToken('secondaryForeground', value)}
                  />
                  <TokenSelector
                    label="Muted Color"
                    value={tokens.muted}
                    onChange={(value) => updateToken('muted', value)}
                  />
                  <TokenSelector
                    label="Muted Foreground"
                    value={tokens.mutedForeground}
                    onChange={(value) => updateToken('mutedForeground', value)}
                  />
                </TabsContent>

                <TabsContent value="system" className="space-y-4">
                  <TokenSelector
                    label="Background"
                    value={tokens.background}
                    onChange={(value) => updateToken('background', value)}
                  />
                  <TokenSelector
                    label="Foreground"
                    value={tokens.foreground}
                    onChange={(value) => updateToken('foreground', value)}
                  />
                  <TokenSelector
                    label="Border"
                    value={tokens.border}
                    onChange={(value) => updateToken('border', value)}
                  />
                  <TokenSelector
                    label="Destructive"
                    value={tokens.destructive}
                    onChange={(value) => updateToken('destructive', value)}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Generated CSS Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Generated CSS</CardTitle>
              <CardDescription>
                This will be written to aui-figma-make-global.css
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={generatedCSS}
                readOnly
                className="font-mono text-xs h-32"
                placeholder="Generated CSS will appear here..."
              />
            </CardContent>
          </Card>
        </div>

        {/* Live Preview Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Live Component Preview</CardTitle>
              <CardDescription>
                See how your token changes affect real ShadCN components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Button Examples */}
              <div className="space-y-3">
                <h4 className="font-medium">Buttons</h4>
                <div className="flex flex-wrap gap-2">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>

              {/* Badge Examples */}
              <div className="space-y-3">
                <h4 className="font-medium">Badges</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Error</Badge>
                </div>
              </div>

              {/* Input Example */}
              <div className="space-y-3">
                <h4 className="font-medium">Form Controls</h4>
                <div className="space-y-2">
                  <Input placeholder="Enter text here..." />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Alert Examples */}
              <div className="space-y-3">
                <h4 className="font-medium">Alerts</h4>
                <Alert>
                  <AlertDescription>
                    This is a default alert message.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertDescription>
                    This is a destructive alert message.
                  </AlertDescription>
                </Alert>
              </div>

              {/* Card Example */}
              <div className="space-y-3">
                <h4 className="font-medium">Cards</h4>
                <Card>
                  <CardHeader>
                    <CardTitle>Sample Card</CardTitle>
                    <CardDescription>
                      This card shows how the theme affects different elements.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Card content with muted text color.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Token Selector Component
function TokenSelector({ 
  label, 
  value, 
  onChange 
}: { 
  label: string; 
  value: string; 
  onChange: (value: string) => void; 
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-2">
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(AUI_TOKENS).map(([name, color]) => (
              <SelectItem key={color} value={color}>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded border"
                    style={{ backgroundColor: color }}
                  />
                  {name} ({color})
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          className="w-24"
          placeholder="#000000"
        />
      </div>
    </div>
  );
}

// Generate Figma Make CSS
function generateFigmaMakeCSS(tokens: ThemeTokens): string {
  return `/* AUI Override for Figma Make - Generated from Playground */
/* Copy this entire CSS content to replace your Figma Make globals.css */

@custom-variant dark (&:is(.dark *));

:root {
  --font-size: 14px;
  
  /* AUI Foundation Colors */
  --background: ${tokens.background};
  --foreground: ${tokens.foreground};
  --card: ${tokens.background};
  --card-foreground: ${tokens.foreground};
  --popover: ${tokens.background};
  --popover-foreground: ${tokens.foreground};
  
  /* Asurion Primary */
  --primary: ${tokens.primary};
  --primary-foreground: ${tokens.primaryForeground};
  
  /* AUI Secondary */
  --secondary: ${tokens.secondary};
  --secondary-foreground: ${tokens.secondaryForeground};
  
  /* AUI Neutral Tones */
  --muted: ${tokens.muted};
  --muted-foreground: ${tokens.mutedForeground};
  
  /* Asurion Accent */
  --accent: ${tokens.accent};
  --accent-foreground: ${tokens.accentForeground};
  
  /* AUI Status Colors */
  --destructive: ${tokens.destructive};
  --destructive-foreground: ${tokens.destructiveForeground};
  
  /* AUI UI Elements */
  --border: ${tokens.border};
  --input: transparent;
  --input-background: ${tokens.input};
  --switch-background: #c6c6ca;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: ${tokens.ring};
  
  /* AUI Chart Colors */
  --chart-1: ${tokens.primary};
  --chart-2: ${tokens.accent};
  --chart-3: #6efac3;
  --chart-4: #136d31;
  --chart-5: #e7c500;
  
  /* AUI Border Radius */
  --radius: 0.25rem;
  
  /* AUI Sidebar Colors */
  --sidebar: ${tokens.muted};
  --sidebar-foreground: ${tokens.foreground};
  --sidebar-primary: ${tokens.primary};
  --sidebar-primary-foreground: ${tokens.primaryForeground};
  --sidebar-accent: ${tokens.accent};
  --sidebar-accent-foreground: ${tokens.accentForeground};
  --sidebar-border: ${tokens.border};
  --sidebar-ring: ${tokens.ring};
}

.dark {
  /* AUI Dark Mode - Adjust these as needed */
  --background: #252629;
  --foreground: #ffffff;
  --card: #252629;
  --card-foreground: #ffffff;
  --popover: #252629;
  --popover-foreground: #ffffff;
  --primary: #ca93ff;
  --primary-foreground: #590099;
  --secondary: #4a4256;
  --secondary-foreground: #c4b5d2;
  --muted: #353339;
  --muted-foreground: #9b9ca0;
  --accent: ${tokens.accent};
  --accent-foreground: #ffffff;
  --destructive: #ff6b75;
  --destructive-foreground: #ffffff;
  --border: rgba(74, 74, 78, 0.6);
  --input: #3a3a3e;
  --ring: #ca93ff;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --chart-1: #ca93ff;
  --chart-2: ${tokens.accent};
  --chart-3: #6efac3;
  --chart-4: #c5ffc8;
  --chart-5: #fff0c0;
  --sidebar: #252629;
  --sidebar-foreground: #ffffff;
  --sidebar-primary: #ca93ff;
  --sidebar-primary-foreground: #590099;
  --sidebar-accent: ${tokens.accent};
  --sidebar-accent-foreground: #ffffff;
  --sidebar-border: #4a4a4e;
  --sidebar-ring: #ca93ff;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-switch-background: var(--switch-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
  }
}

@layer base {
  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) {
    h1 {
      font-size: var(--text-2xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h2 {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h3 {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h4 {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    p {
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.5;
    }

    label {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    button {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    input {
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.5;
    }
  }
}

html {
  font-size: var(--font-size);
}`;
}