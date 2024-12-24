/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      fontFamily: {
      'body': ['"Inter"', 'sans-serif'],
      'heading': ['"Inter"', 'sans-serif'],
      'hero':['"Inter"','Open Sans'],
      },
    },
  },
  plugins: [],
}