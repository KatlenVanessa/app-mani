/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      transitionProperty:{
        width: "width",
        bottom: "bottom",
      },
      width: {
        "device-width": "360px",
      },
      height: {
        "device-height": "640px",
      },
    },
  },
  plugins: [],
}

