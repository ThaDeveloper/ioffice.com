import type { Config } from "tailwindcss";

// Flat, structured dark theme. Solid surfaces + hairline borders, indigo as the
// single restrained accent (rose kept only for the logo). No glass, no glow, no
// gradient text. Tokens are duplicated here on purpose (separate repo from the
// app); keep the brand accent in sync if it changes.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        brand: {
          indigo: "#6366f1",
          rose: "#f43f5e",
          emerald: "#10b981",
        },
        // Solid dark surface ramp (cool near-black → elevated panels).
        ink: {
          950: "#0d0f13",
          900: "#14161b",
          850: "#191c22",
          800: "#22262e",
        },
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
