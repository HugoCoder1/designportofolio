import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: {
          white: "#F3F3F3",
          black: "#181717",
          gray: "#606060",
          secondary: "#2429AF",
        },
      },
      fontSize: {
        heading1: "60px",
        heading2: "32px",
        body: "18px",
        navigation: "21px",
        subtext: "14px",
        link: "18px",
      },
    },
  },
  plugins: [],
} satisfies Config;
