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
        title: ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }], // Title font size
        description: ["1.125rem", { lineHeight: "1.75rem", fontWeight: "400" }], // Description font size
        subtitle: ["1.75rem", { lineHeight: "2.25rem", fontWeight: "600" }], // Subtitle font size

      },
    },
  },
  plugins: [],
} satisfies Config;
