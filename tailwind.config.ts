import type { Config } from "tailwindcss";
import harmonyPalette from "@evilmartians/harmony/tailwind";
import { nextui } from "@nextui-org/react";
import palette from "@evilmartians/harmony/base";

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
  plugins: [
    require("@tailwindcss/typography"),
    nextui({
      themes: {
        session: {
          extend: "dark",
          colors: {
            primary: {
              DEFAULT: "#0c8aca", // primary
              // foreground: "#ECEDEE", // text on primary
            },
            secondary: {
              DEFAULT: "#9572cd", // secondary
              // foreground: "", // text on secondary
            },
            warning: {
              DEFAULT: "#d7b75e", // warning
              // foreground: "", text on warning
            },
            background: "#000000", // background
            foreground: "#ECEDEE", // text on background
            focus: "#2caff9", // focus
            // default: "", // "base"
          },
        },
        "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
          },
        },
      },
      layout: {
        radius: {
          medium: "2px",
          large: "2px",
        },
      },
    }),
  ],
};
export default config;
