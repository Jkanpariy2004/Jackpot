/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Roboto Condensed", "sens-serif"],
        header: ["Readex Pro", "sens-serif"]
      },
      container: {
        padding: '2rem'
      },
    },
  },
  plugins: [],
}

