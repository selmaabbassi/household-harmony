/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a5f3fc",
          secondary: "#67e8f9",
          accent: "#0891b2",
          neutral: "#d1d5db",
          "base-100": "#dbeafe",
          info: "#0e7490",
          success: "#d9f99d",
          warning: "#fde68a",
          error: "#fca5a5",
        },
      },
    ],
  },
};
