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
          primary: "#e08031",
          secondary: "#1461e5",
          accent: "#ef69a5",
          neutral: "#1e1b28",
          "base-100": "#e6e4e7",
          info: "#a4daef",
          success: "#33cca1",
          warning: "#d19c0a",
          error: "#ed5e8c",
          // body: {
          //   "background-color": "#aaa",
          // },
        },
      },
    ],
  },
};
export default config;
