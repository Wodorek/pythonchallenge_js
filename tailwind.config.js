module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
