/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: '#001524',
        base: '#ffecd1',
        primary: '#ff7b00',
        secondary:'#75290f',
        accent: '#14606c'
      },
    },
  },
  plugins: [],
}
