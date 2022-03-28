module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-cyan': '#26C0AB',
        'secondary-dark-cyan-1': '#5E7A7D',
        'secondary-dark-cyan-2': '#7F9C9F',
        'secondary-light-cyan-1': '#C5E4E7',
        'secondary-light-cyan-2': '#F4FAFA',
        'accent-dark-cyan': '#00494D',
      },
      backgroundImage: {
        'bill-icon': "url('./App/img/icon-dollar.svg')",
        'people-icon': "url('./App/img/icon-person.svg')"
      },
      backgroundPosition: {
        'px-4': '1rem 50%',
        'px-5': '1.25rem 50%',
        'px-6': '1.5rem 50%'
      }
    },
  },
  plugins: [],
}
