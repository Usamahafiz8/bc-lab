module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9945FF',
        secondary: '#2D2D2D',
        accent: '#5E3BE1',
        'accent-dark': '#4B32B3', // Darker shade for hover effect
        green: '#00E1AA',
        red: '#E15050',
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          DEFAULT: '#A0A0A0',
          light: '#D0D0D0',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
