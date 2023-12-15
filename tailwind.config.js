/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        xsm:{max:"639px"},
      },
      boxShadow: {
        'custom': '0 1px 5px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}