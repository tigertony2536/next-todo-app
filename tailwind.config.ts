import type { Config } from "tailwindcss";
const { withTV } = require("tailwind-variants/transformer");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "600px",
      md: "1200px",
    },
    darkMode: "class",
    inset: {
      "8px": "8px",
    },
    fontSize: {
      h1: "90px",
      h2: "67px",
      h3: "51px",
      h4: "38px",
      h5: "28px",
      h6: "21px",
      paragraph: "16px",
      "paragraph-small": "12px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "#845EC2",
      secondary: "#FF8066",
      red: "#CE3E2B",
    },
    fontFamily: {
      comfortaa: ["Comfortaa", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
export default config;
