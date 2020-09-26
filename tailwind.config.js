module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ["components", "utilities"],
    content: ["./dist/**/*.js"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
