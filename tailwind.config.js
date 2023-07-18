/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        'smooth': 'var(--smooth)',
      },
      fontFamily :{
        montserrat: "'Montserrat', serif",
      },
     
      backgroundImage: {
        'pr-4': "url('./asset/product-05.jpg')",
       
      },
      // screens: {
      //   // default: 0 <-> 479 // portrait mobile // fluid width
      //   sm: "320px", // landscape mobile // fixed width // same design as portrait mobile
      //   md: "467px", // tablet // fixed width
      //   lg: "767px", // laptop // fixed width
      //   xl: "1024px", // desktop // fixed width
      //   xxl: "1280px",
      //   xxxl: "1536px",
      // },
    },
  },
  plugins: [],
}

