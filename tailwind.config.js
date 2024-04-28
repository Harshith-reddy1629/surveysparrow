/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStopPositions: {
        50: "50%",
        100: "100%",
      },
    },
  },
  plugins: [],
};
