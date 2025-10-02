const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 🎨 Custom Purple (anchored at my #8c67f3, #540d99, #200944)
        'custom-purple': {
          50:  '#f6f2fe',
          100: '#ece4fd',
          200: '#d3c3fb',
          300: '#b99ff7',
          400: '#9f79f5',
          500: '#8c67f3', // my main
          600: '#754ada',
          700: '#5c2fbd',
          800: '#540d99', // my dark-1
          900: '#200944', // my dark-2
        },

        // 🎨 Custom Cyan (anchored at my #76dcff)
        'custom-cyan': {
          50:  '#f2fcff',
          100: '#e6f9ff',
          200: '#c2efff',
          300: '#9ee5ff',
          400: '#87e0ff',
          500: '#76dcff', // my main
          600: '#3dcaff',
          700: '#00b8f5',
          800: '#0090bf',
          900: '#006387',
        },

        // 🎨 Custom Blue-Gray (anchored at my #2b2733 and #484556)
        'custom-blue-gray': {
          50:  '#f7f7f8',
          100: '#e3e2e6',
          200: '#c0bec7',
          300: '#9c99a8',
          400: '#6c6877',
          500: '#484556', // my dark-2
          600: '#3b3947',
          700: '#2b2733', // my dark-1
          800: '#1c1a22',
          900: '#0e0c11',
        },
      }
    },
  },
  plugins: [],
};
