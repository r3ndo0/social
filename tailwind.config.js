/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      pr: "#262626",
      white: "#fff",
      lightgray: "#e5e7eb",
      bg: "#e5e7eb",
      gray: "#94a3b8",
    },
  },
  plugins: [],
};
