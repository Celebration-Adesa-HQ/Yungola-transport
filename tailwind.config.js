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

        "on-secondary": "#412d00",
        "tertiary-fixed-dim": "#17d8ff",
        "secondary-container": "#5d4208",
        "on-background": "#ffdbcb",
        "tertiary-fixed": "#b0ecff",
        "on-primary": "#412d00",
        tertiary: "#abebff",
        "inverse-primary": "#7c5800",
        "on-surface": "#ffdbcb",
        "secondary-fixed-dim": "#e8c17c",
        "secondary-fixed": "#ffdea8",
        "surface-container-low": "#331201",
        "on-tertiary-fixed": "#001f27",
        "on-secondary-fixed-variant": "#5d4208",
        "surface-tint": "#ffba20",
        "on-tertiary-fixed-variant": "#004e5d",
        "error-container": "#93000a",
        "on-tertiary-container": "#005a6b",
        surface: "#270b00",
        "surface-container": "#381603",
        "primary-fixed-dim": "#ffba20",
        "outline-variant": "#514532",
        "inverse-on-surface": "#4d2610",
        "tertiary-container": "#00d7fe",
        "on-primary-container": "#6b4c00",
        outline: "#9e8f78",
        "on-secondary-container": "#d5b06d",
        "on-primary-fixed-variant": "#5e4200",
        "on-error-container": "#ffdad6",
        "primary-container": "#ffb800",
        "on-primary-fixed": "#271900",
        "surface-variant": "#522a14",
        secondary: "#e8c17c",
        "surface-bright": "#572e18",
        primary: "#ffdca1",
        "on-secondary-fixed": "#271900",
        "surface-container-lowest": "#1f0700",
        error: "#ffb4ab",
        "on-tertiary": "#003641",
        background: "#270b00",
        "surface-dim": "#270b00",
        "surface-container-high": "#45200a",
        "on-error": "#690005",
        "surface-container-highest": "#522a14",
        "primary-fixed": "#ffdea8",
        "on-surface-variant": "#d5c4ab",
        "inverse-surface": "#ffdbcb",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      fontFamily: {
        headline: ["Work Sans"],
        body: ["Inter"],
        label: ["Inter"],
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"], // Default sans-serif font
      },
    },
  },
  plugins: [],
};

export default config