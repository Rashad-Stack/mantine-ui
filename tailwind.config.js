/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-orange': {
           50:'#fff8e1',
          100:'#ffefcb',
          200:'#ffdd9a',
          300:'#ffca64',
          400:'#ffba38',
          500:'#ffb01b',
          600:'#ffab09',
          700:'#e39500',
          800:'#cb8400',
          900:'#b07100'
        },

      },
    },
  },
  plugins: [],
};
