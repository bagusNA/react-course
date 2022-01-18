module.exports = {
  content: [
    "./src/**/*{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#21222A',
        'secondary': '#33373E',
        'accent': '#61DAFB',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite'
      }
    },

  },
  plugins: [],
}
