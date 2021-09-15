import { useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { currentMonth, currentDay, yearr, todaydate } from './Date';

const Weather = ({ weather, isOpened, setIsOpened }) => {
     let time = new Date().toLocaleTimeString();
     const [currentTime, setCurrentTime] = useState(time);

     setInterval(() => {
          let time = new Date().toLocaleTimeString();
          setCurrentTime(time);
     }, 1000);

     const {
          name,
          main: { temp },
          weather: [{ main, icon }],
     } = weather;

     const iconSVG = `https://openweathermap.org/img/wn/${icon}@2x.png`;

     return (
          <div className='flex flex-col justify-between h-full pt-8 pb-20 mx-4 md:ml-8'>
               <div className='flex items-center justify-between'>
                    {/* ANCHOR Logo */}
                    <h1 className='text-sm tracking-widest text-gray-200'>
                         WeatherApp
                    </h1>
                    <FaAlignRight
                         className='text-xl md:hidden cursor-pointer'
                         onClick={() => setIsOpened(!isOpened)}
                    />
               </div>

               <div className='flex flex-col md:flex-row md:items-end md:justify-start'>
                    {/* ANCHOR weather Temperature */}
                    <h1 className='font-semibold tracking-wide transform text-7xl md:text-6xl transition-all duration-300'>
                         {`${Math.floor(temp - 273.15)}°c`}
                    </h1>
                    <div className='flex items-end justify-start space-x-4 md:mx-4'>
                         <h3 className='flex flex-col items-start justify-center text-3xl'>
                              {/* Country */}
                              {name}
                              {/* Date -- Do not how I got my date, as long as it works ... */}
                              <span className='mt-1 text-xs font-thin tracking-wide text-gray-300'>
                                   {`${currentTime} - ${currentDay}, ${todaydate} ${currentMonth} '${yearr}`}
                                   {/* {currentMonth} */}
                              </span>
                         </h3>
                         <div className='flex flex-col items-center justify-center'>
                              {/* weather icon */}
                              <img
                                   src={iconSVG}
                                   alt=''
                                   className='w-16 h-16 md:w-20 md:h-20 fill-current'
                              />

                              {/* Weather */}
                              <p className='text-xs font-thin tracking-wide text-gray-200'>
                                   {main}
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Weather;
