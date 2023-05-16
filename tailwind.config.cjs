const colors = require("tailwindcss/colors");

module.exports = {
  //prefix: "stash-",
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    "./popup/**/*.{js,jsx,ts,tsx}",
    "./content-script/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    extend: {
      zIndex: {
        top: "100000000",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
    colors: {
      current: "currentColor",
      primary: {
        light: "var(--color-primary-light)",
        DEFAULT: "var(--color-primary)",
        dark: "var(--color-primary-dark)",
        50: "var(--color-primary-50)",
        100: "var(--color-primary-100)",
        200: "var(--color-primary-200)",
        300: "var(--color-primary-300)",
        400: "var(--color-primary-400)",
        500: "var(--color-primary-500)",
        600: "var(--color-primary-600)",
        700: "var(--color-primary-700)",
        800: "var(--color-primary-800)",
        900: "var(--color-primary-900)",
      },
      secondary: {
        light: "var(--color-secondary-light)",
        DEFAULT: "var(--color-secondary)",
        dark: "var(--color-secondary-dark)",
        50: "var(--color-secondary-50)",
        100: "var(--color-secondary-100)",
        200: "var(--color-secondary-200)",
        300: "var(--color-secondary-300)",
        400: "var(--color-secondary-400)",
        500: "var(--color-secondary-500)",
        600: "var(--color-secondary-600)",
        700: "var(--color-secondary-700)",
        800: "var(--color-secondary-800)",
        900: "var(--color-secondary-900)",
      },
      simple: {
        DEFAULT: "transparent",
      },
      lime: {
        300: colors.lime[300],
        200: colors.lime[200],
        100: colors.lime[100],
      },
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
      green: colors.emerald,
      yellow: colors.amber,
      purple: colors.violet,
      warning: colors.yellow[500],
      info: colors.indigo[600],
      success: colors.green[500],
      error: colors.red[500],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
