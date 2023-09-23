/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'fraunces': ['Fira Code', 'monospace','Fraunces', 'serif'],
      'barlow': ['Barlow', 'sans-serif','Fira Code', 'monospace','Fraunces', 'serif']
    },
    extend: {},
  },
  plugins: [],
}
