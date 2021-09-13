const Weather = ({ weather }) => {
     const {
          name,
          main: { temp },
          weather: [{ main, icon }],
     } = weather;
     const iconSVG = `http://openweathermap.org/img/wn/${icon}@2x.png`;
     return (
          <div className='flex flex-col justify-between h-full pt-8 pb-20 ml-8'>
               {/* ANCHOR Logo */}
               <h1 className='text-sm tracking-widest text-gray-200'>
                    WeatherApp
               </h1>

               <div className='flex items-end justify-center'>
                    {/* ANCHOR weather Temperature */}
                    <h1 className='text-6xl font-semibold tracking-wide transform'>
                         {`${Math.floor(temp - 273.15)}°c`}
                    </h1>
                    <h3 className='flex flex-col items-center justify-center mx-4 text-3xl'>
                         {/* Country */}
                         {name}
                         {/* Date */}
                         <span className='mt-1 text-xs font-thin tracking-wide text-gray-300'>
                              06:23 - Monday, 9 sep '21
                         </span>
                    </h3>
                    <div className='flex flex-col items-center justify-center'>
                         {/* weather icon */}
                         <img
                              src={iconSVG}
                              alt=''
                              className='w-20 h-20 fill-current'
                         />

                         {/* Weather */}
                         <p className='text-xs font-thin tracking-wide text-gray-200'>
                              {main}
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default Weather;
