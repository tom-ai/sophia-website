import type { Config } from "tailwindcss";
import harmonyPalette from "@evilmartians/harmony/tailwind";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: { harmonyPalette },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
