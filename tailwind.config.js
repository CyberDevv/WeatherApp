module.exports = {
     // mode: 'jit',
     purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
          extend: {
               backgroundImage: {
                    'sunny': "url('/src/images/warm.jpg')",
                    'rainy': "url('/src/images/rain.jpg')",
               },
          },
     },
     variants: {
          extend: {},
     },
     plugins: [],
};
