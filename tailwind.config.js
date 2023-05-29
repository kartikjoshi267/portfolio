/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      keyframes: {
        glowing: {
          '0%, 100%' : { boxShadow: '0 0px 20px 10px rgba(255,255,255,0.3)' },
          '50%' : { boxShadow: '0 0px 0px 0px rgba(255,255,255,0.3)' }
        }
      },
      animation: {
        glowing: 'glowing 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};