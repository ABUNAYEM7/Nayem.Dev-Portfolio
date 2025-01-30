/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerBg: "url('../CodeByNayem-Portfolio/src/assets/bg-shadow.png')",
      },
      colors: {
        highlight: '#187bd1',
      },
    },
  },
  plugins: [daisyui],
}