/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#001524",
          secondary: "#75290f",
          accent: "#14606c",
          neutral: "#001524",
          "base-100": "#ffecd1"
          // info: "#0000ff",
          // success: "#00ff00",
          // warning: "#00ff00",
          // error: "#ff0000"
        }
      }
    ],
    logs: false
  }
}
