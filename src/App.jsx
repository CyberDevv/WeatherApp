import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from './components/SideBar';
import Weather from './components/Weather';
import { FaSpinner } from 'react-icons/fa';

const apiKey = '7ddb92e5512e18d5ec7db71cfcd3c628';

const App = () => {
     const [weather, setWeather] = useState(null);
     const [error, setError] = useState(null);
     const [country, setCountry] = useState('Nigeria');
     const [isOpened, setIsOpened] = useState(false);
     const [isLoading, setIsLoading] = useState(false);
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;
     useEffect(() => {
          axios.get(url)
               .then((response) => {
                    setWeather(response.data);
                    setIsLoading(true);
               })
               .catch((error) => {
                    setError(error);
               });
     }, [url]);
     if (error) {
          return <App />;
     }
     if (!weather) return null;

     const {
          weather: [{ main }],
     } = weather;

     return (
          <div
               className={`bg-default ${
                    main === 'Thunderstorm' && 'bg-thunderstorm'
               } ${main === 'Drizzle' && 'bg-drizzle'} ${
                    main === 'Rain' && 'bg-rainy'
               } ${main === 'Snow' && 'bg-snowy'} ${
                    main === 'Clear' && 'bg-clear'
               } ${main === 'Haze' && 'bg-haze'} ${
                    main === 'Clouds' && 'bg-clouds'
               } w-full h-screen bg-no-repeat bg-cover transition-all duration-300
                `}
          >
               <div className='w-full h-full bg-black bg-opacity-40'>
                    {isLoading ? (
                         <div className='w-full h-full md:flex md:justify-between '>
                              <Weather
                                   country={country}
                                   weather={weather}
                                   isOpened={isOpened}
                                   setIsOpened={setIsOpened}
                              />
                              <div
                                   className={`${
                                        isOpened
                                             ? ' transform w-4/5 md:w-full translate-x-0 h-screen md:transform-none'
                                             : ' transform -translate-x-full md:transform-none'
                                   } md:block md:w-full md:max-w-sm transition-all duration-300 top-0 left-0 absolute md:relative`}
                              >
                                   <SideBar
                                        country={country}
                                        stateFunction={setCountry}
                                        weather={weather}
                                        setIsLoading={setIsLoading}
                                        setIsOpened={setIsOpened}
                                   />
                              </div>
                         </div>
                    ) : (
                         <div className='z-20 absolute top-0 left-0 bg-black bg-opacity-90 h-screen w-screen flex justify-center items-center'>
                              <FaSpinner className='text-4xl rotate' />
                         </div>
                    )}
               </div>
          </div>
     );
};

export default App;
