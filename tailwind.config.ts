import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screen: {
        phone: "520px",
      },
      colors: {
        primary: "#B3B7EE",
        secondary: "#C5E3E8",
        accent: "#3C5186",
        text: "#3D3D3D",

      },
    },
  },
  plugins: [],
} satisfies Config;
