/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
    extend: {colors: {
      'background': '#332B34',
      'accent': '#CBC3E3',
      'primary':'#657CD5',
      'secondary': '#1C1922',
      'greenbtn': '#78D565',
    }},
  },
  plugins: [],
};
