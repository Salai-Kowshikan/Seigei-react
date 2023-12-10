/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
    extend: {colors: {
      'background': '#332B34',
    }},
  },
  plugins: [],
};
