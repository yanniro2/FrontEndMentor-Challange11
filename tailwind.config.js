/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // ### Primary
      "Dark-cyan": "hsl(158, 36%, 37%)",
      "Very-Dark-cyan": "hsl(158, 36%, 20%)",
      "Cream": "hsl(30, 38%, 92%)",

      // ### Neutral
      "Very-dark-blue": "hsl(212, 21%, 14%)",
      "Dark-grayish-blue": "hsl(228, 12%, 48%)",
      "White": "hsl(0, 0%, 100%)",
    },
    screens: {
      "Mobile": {
        "min": "375px", "max": "600px"
      }
    },
    fontSize: {
      "ms": "14px",
    },
    fontFamily: {
      "Monts": ['Montserrat', 'sans-serif'],
      "Fraunce": ['Fraunces', 'sans-serif'],
    },
    fontWeight: {
      "ms": 500,
      "lg": 700,

    },
    extend: {},
  },
  plugins: [],
}
