/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#fff",
      secondary: "#301934",
      tertiary: "#bd8ea4",
      quaternary: "#f9cac533",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["PT Sans"],
      body: ["Trebuchet MS", "Arial"],
    },
  },
  plugins: [],
};
