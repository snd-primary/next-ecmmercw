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
          primary: "#dd6e99",
          secondary: "#fcc4d5",
          accent: "#f26a9e",
          neutral: "#1a1e23",
          "base-100": "#322442",
          info: "#aac6e9",
          success: "#219161",
          warning: "#936a0b",
          error: "#f73b48",
        },
      },
    ],
  },
};
export default config;
