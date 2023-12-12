import { defineConfig, ThemeRuleResolver } from "twind";
import presetTailwind from "preset-tailwind";
import presetTypography from "preset-typography";

export default {
  ...defineConfig({
    presets: [
      presetTailwind(),
      presetTypography({
        defaultColor: "zinc",
        colors: {
          body: "300",
          bold: "100",
          /*
          '[class~="lead"]': "400",

          a: "100",
          strong: "100",
          "ul > li::before": {
            backgroundColor: "700",
          },
          blockquote: {
            color: "100",
            borderLeftColor: "800",
          },
          */
          headings: "100",
          code: "100",
          "pre-bg": "bg-chaos-secondary"
          /*
          pre: {
            color: "200",
            backgroundColor: "800",
          },
          thead: {
            color: "100",
            borderBottomColor: "700",
          },
          "tbody tr": { borderBottomColor: "800" },
          */
        },
      }),
    ],
    darkMode: "media", // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          maid: {
            100: "#ffe6f9",
            200: "#ffb3ed",
            300: "#ff80e1",
            400: "#ff4dd5",
            500: "#ff1ac9",
            600: "#cc009c",
          },
          chaos: {
            primary: `#1d0016`,
            secondary: `#2e0324`,
            tertiary: `#3b2836`,
            border: `#33252f`,
            foreground: `#fccef1`,
          },
        },
        spacing: {
          "102": "32rem",
          "108": "36rem",
        },
        maxWidth: {
          "8xl": "90rem",
          "9xl": "100rem",
          "10xl": "110rem",
        },
        fontFamily: {
          montserrat: ["Montserrat", "sans-serif"],
        },
        translate: {
          "130": "50rem",
          "140": "60rem",
        },
      },
      zIndex: {
        "0": "0",
        "10": "10",
        "20": "20",
        "25": "25",
        "30": "30",
        "40": "40",
        "45": "45",
        "50": "50",
        "75": "75",
        "100": "100",
        "auto": "auto",
      },
    },
  }),
  selfURL: import.meta.url,
};