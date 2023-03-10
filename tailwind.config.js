/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "300": "300px",
        "350": "350px",
        "400": "400px",
        "450": "450px",
        "500": "500px",
        "550": "550px",
      },
      fontFamily: {
        'cassandra': ['Cassandra']
      }
    },
  },
  plugins: [],
}
