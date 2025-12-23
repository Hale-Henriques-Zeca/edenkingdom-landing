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
        gold: "#D4AF37",
        olive: "#708238",
        deepblue: "#1C2D5A",
        pearl: "#FDFDFD",
        graystone: "#8E8E8E",
      },
      fontFamily: {
        eden: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
