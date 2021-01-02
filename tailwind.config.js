module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.svelte"],
  theme: {
    fontFamily: {
      'spartan': ["Spartan", "san-serif"]
    },
    extend: {
      inset: {
        '-25': '-25px'
      }
    },
  },
  variants: {},
  plugins: [],
};
