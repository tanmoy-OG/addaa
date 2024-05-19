import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#B98AAF",
          secondary: "#B57184",
          accent: "#FE8965",
          neutral: "#EBEBEB",
          "base-100": "#ffffff",
          info: "#F6D9D0",
          chatsend: "#F3E3F5",
          success: "#66CC8A",
          warning: "#F3E3F5",
          error: "#E96D7B",
        },
        sunset: {
          ...require("daisyui/src/theming/themes")["sunset"],
          secondary: "#38BDF8",
          error: "#E96D7B",
          "--rounded-btn": "0.5rem",
        },
      },
      "sunset",
    ],
    // darkTheme: "sunset",
    prefix: "",
  },
  plugins: [require("daisyui")],
};
export default config;
