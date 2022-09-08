/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('/src/assets/imgBanner.png')"
      }
    }
  },
  plugins: []
}
