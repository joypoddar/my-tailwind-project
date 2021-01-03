module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    // the order of the variants matter because of precedence of css rules
    backgroundColor: ["responsive", "hover", "focus", "active"],
    extend: {},
  },
  plugins: [],
};
