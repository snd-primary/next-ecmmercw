import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f28c18",
          secondary: "#6d3a9c",
          accent: "#51a800",
          neutral: "#2e1a05",
          "base-100": "#212121",
          info: "#2463eb",
          success: "#16a249",
          warning: "#db7706",
          error: "#dc2828",
        },
      },
    ],
  },
};
export default config;
