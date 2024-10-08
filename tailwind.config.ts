import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "rgb(27, 27, 27)",
        white: " #e5e5e5",
        yellow: "rgb(234, 255, 0)",
        grey: "#BDBDBD",
      },
      animation: {
        "grow-fade": "growIn .75s ease-in-out, fadeOut 1s ease-in-out",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        growIn: {
          "0%": { transform: "scale(0.99)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
