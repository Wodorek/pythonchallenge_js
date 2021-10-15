module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
