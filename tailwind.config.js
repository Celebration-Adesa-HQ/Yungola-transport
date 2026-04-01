/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fffdf8", // Light background color
        foreground: "#4e3426", // Dark brown text color
        accent: "#f5c400", // Primary yellow
        accentDark: "#b97a00", // Dark yellow for hover or accent states
        secondaryBackground: "#f8dd5d", // Optional yellow accent for highlights
        secondaryForeground: "#6f533f", // Lighter brown for secondary text

        // Dark Mode colors
        darkBackground: "#0a0a0a", // Dark background for dark mode
        darkForeground: "#ededed", // Light text color for dark mode
        darkAccent: "#f5c400", // Same yellow accent for dark mode
        darkAccentDark: "#b97a00", // Dark yellow for hover states in dark mode
        darkSecondaryBackground: "#f8dd5d", // Optional yellow accent for highlights in dark mode
        darkSecondaryForeground: "#d7c09d", // Lighter brown for secondary text in dark mode
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"], // Default sans-serif font
      },
    },
  },
  plugins: [],
};

export default config