/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        Dmsans: ["DM Sans", "sans-serif"],
        Philosopher: ["Philosopher", "sans-serif"],
        SpaceGrotesk: ["SpaceGrotesk", "sans-serif"],
        Dmserif: ["DM Serif Text", "serif"],
        Code: ["Source Code Pro", "monospace"]
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};