/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      transitionProperty:{
        'width': 'width',
        
      }
    },
  },
  plugins: [],
};

