/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite.{js,ts}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      inter: ["Inter"],
      montserrat: ["Montserrat"],
    },
    extend: {
      colors: {
        green: "#164D4D",
      },
    },
  },
  plugins: [require("flowbite"), require("daisyui")],
};
