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
        base: '#FFECD1',
        primary: '#ff7b00',
        secundary:'#75290f',
        accent: '#14606c'
      },
    },
  },
  plugins: [],
}

