/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#080b0c",
        graphite: "#111719",
        steel: "#1b2427",
        mist: "#e7ece7",
        acid: "#d7ff64",
        signal: "#62d8ff",
        amber: "#ffb45d",
        danger: "#ff6565"
      },
      boxShadow: {
        cockpit: "0 24px 80px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};
