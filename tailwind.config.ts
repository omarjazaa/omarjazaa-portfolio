import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
        body: ["Rajdhani", "sans-serif"],
        code: ["JetBrains Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "bg-secondary": "hsl(var(--bg-secondary))",
        "bg-card": "hsl(var(--bg-card))",
        "bg-card-hover": "hsl(var(--bg-card-hover))",
        "text-secondary": "hsl(var(--text-secondary))",
        "text-muted": "hsl(var(--text-muted))",
        cyan: { DEFAULT: "hsl(var(--accent-cyan))" },
        "neon-green": { DEFAULT: "hsl(var(--accent-green))" },
        "neon-purple": { DEFAULT: "hsl(var(--accent-purple))" },
        "neon-orange": { DEFAULT: "hsl(var(--accent-orange))" },
        "neon-blue": { DEFAULT: "hsl(var(--accent-blue))" },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-cyan": "linear-gradient(135deg, hsl(184 100% 50%), hsl(210 100% 50%))",
        "gradient-purple": "linear-gradient(135deg, hsl(285 100% 50%), hsl(330 100% 50%))",
        "gradient-green": "linear-gradient(135deg, hsl(152 100% 50%), hsl(184 100% 50%))",
      },
      boxShadow: {
        glow: "0 0 30px hsl(184 100% 50% / 0.30)",
        "glow-strong": "0 0 50px hsl(184 100% 50% / 0.50)",
        "glow-purple": "0 0 30px hsl(285 100% 50% / 0.35)",
        card: "0 10px 40px hsl(0 0% 0% / 0.50)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px hsl(184 100% 50% / 0.6), 0 0 20px hsl(184 100% 50% / 0.3)" },
          "50%": { boxShadow: "0 0 20px hsl(184 100% 50% / 0.9), 0 0 40px hsl(184 100% 50% / 0.5)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blink: "blink 1s infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "spin-slow": "spin-slow 12s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 18s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
