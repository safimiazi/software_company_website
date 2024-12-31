import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-color": "#FF3C00;"
      },
      fontSize: {
        title: ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }], // Reduced Title font size
        description: ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }], // Reduced Description font size
        subtitle: ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }], // Reduced Subtitle font size
      },

      animation: {
        line: 'lineAnimation 2s infinite', // Animation duration and infinite loop
      },
      keyframes: {
        lineAnimation: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      
    },
  },
  plugins: [],
} satisfies Config;
