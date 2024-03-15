/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage:{
      'service': "url(../public/img/banner-right1.png)",
      'babysitter': "url(../public/img/babysitter.jpg)",
      'cooks': "url(../public/img/cooks.jpg)",
      'domestichelp': "url(../public/img/domestic help.jpg)",
      'allrounder': "url(../public/img/all rounder.png)",
    },
    extend: {
      opacity:{
        '54':'.54',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Ysabeau: ['Ysabeau SC', 'sans-serif'],
        nunito:[ 'Nunito', 'sans-serif'],
      },
      colors: {
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          100: "#AFB2BF",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
        blue: {
          100: "#47A5C5",
        },
        pink: {
          200: "#EF476F",
        },
        yellow: {
          50: "#FFD60A",
        },
      },
    },
  },
  plugins: [],
};
