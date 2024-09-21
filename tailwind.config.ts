import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background_black: "var(--background_black)",
        background_light: "var(--background_light)",
        gold: "var(--gold)"
      },
      fontFamily: {
        'barlow-semi-condensed': ['var(--font-barlow-semi-condensed)', 'sans'],
        'roboto-slab': ['var(--font-roboto-slab)', 'serif']
      }
    },
  },
  plugins: [],
};
export default config;
