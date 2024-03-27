/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge:["./*html"],
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily:{
          dm:['DM Sans', 'sans-serif'],
        },
        colors:{
          orangeff9:"#FF9900",
          orangef8:"#F85A47",
          gray31:"#31353B",
          grayda:"#DADADA",
        },
      },
    },
    plugins: [],
  }