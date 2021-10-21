module.exports = {
  purge: false,
  darkMode: false,
  theme: {
    extend: {
      height: {
        sidebar: '80vh',
      },
    },
  },
  variants: {
    extend: { backgroundColor: ['active'], height: ['hover'] },
  },
  plugins: [],
};
