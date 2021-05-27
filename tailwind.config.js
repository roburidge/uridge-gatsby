module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backdropBlur: {
        px: "1px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
