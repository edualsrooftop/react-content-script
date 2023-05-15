module.exports = {
  content: [
    "./popup/**/*.{js,jsx,ts,tsx}",
    "./content-script/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        top: "100000000",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
