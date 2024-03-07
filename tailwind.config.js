/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a5f3fc",
          secondary: "#67e8f9",
          accent: "#FFB89A",
          neutral: "#d1d5db",
          "base-100": "#dbeafe",
          info: "#0e7490",
          success: "#d9f99d",
          warning: "#fde68a",
          error: "#fca5a5",
        },
      },
      "light",
      "dark",
      "cupcake",
      "forest",
      "valentine",
    ],
  },
};
