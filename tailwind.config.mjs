/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "**/@wp-block-tools/styles/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        starlight: "var(--color--starlight)",
        "black-hole": "var(--color--black-hole)",
        "pearl-light": "var(--color--pearl-light)",
        "gray-pearl": "var(--color--gray-pearl)",
        "fine-smoke": "var(--color--fine-smoke)",
        "misterious-mist": "var(--color--misterious-mist)",
        "goldend-sand": "var(--color--goldend-sand)",
        "pack-of-wolves": "var(--color--pack-of-wolves)",
        "goldend-sunshine": "var(--color--goldend-sunshine)",
        "wheat-love": "var(--color--wheat-love)",
        "youth-troop": "var(--color--youth-troop)",
        "emerald-sword": "var(--color--emerald-sword)",
        "green-sea": "var(--color--green-sea)",
        "wild-strawberry": "var(--color--wild-strawberry)",
        "clan-rover": "var(--color--clan-rover)",
        "ripe-strawberry": "var(--color--ripe-strawberry)",
        "royal-blood": "var(--color--royal-blood)",
        "gray-wolf": "var(--color--gray-wolf)",
        "russian-blue": "var(--color--russian-blue)",
        "dark-engine": "var(--color--dark-engine)",
        "storm-marine": "var(--color--storm-marine)",
        "desert-marine": "var(--color--desert-marine)",
        "electric-rose": "var(--color--electric-rose)",
        "desert-rose": "var(--color--desert-rose)",
      },
    },
  },
  plugins: [],
};
