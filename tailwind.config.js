/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7744D9",

          secondary: "#1F2937",

          accent: "#A78BFA",

          neutral: "#1c1917",

          "base-100": "#F2F4FA",

          info: "#3ABFF8",

          success: "#84cc16",

          warning: "#FBBD23",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
