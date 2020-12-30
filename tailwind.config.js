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
        '-50': '-50px'
      }
    },
  },
  variants: {},
  plugins: [],
};
