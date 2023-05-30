/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      primary: "#63A8EE",
      secondary: "#2B78CA",
      tertiary: "#5841E3",
      success: "#2dd36f",
      warning: "#ffc409",
      danger: "#eb445a",
      medium: "#515151",
      light: "#C5E0F8",
      purplish: "#A292FF",
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
};
