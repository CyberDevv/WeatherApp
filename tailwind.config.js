module.exports = {
     // mode: 'jit',
     purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
          extend: {
               backgroundImage: {
                    default: "url('/src/images/default.jpg')",
                    clear: "url('/src/images/clear.jpg') !important",
                    rainy: "url('/src/images/rain2.jpg') !important",
                    snowy: "url('/src/images/snow.jpg') !important",
                    haze: "url('/src/images/haze.jpg') !important",
                    thunderstorm: "url('/src/images/thunderstorm.jpg') !important",
                    drizzle: "url('/src/images/drizzle.jpg') !important",
                    clouds: "url('/src/images/clouds.jpg') !important",
               },
          },
     },
     variants: {
          extend: {},
     },
     plugins: [],
};
