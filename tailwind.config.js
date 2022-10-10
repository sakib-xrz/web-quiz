/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6A5BE2",

          secondary: "#E9E5FB",

          accent: "#1FB2A6",

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
