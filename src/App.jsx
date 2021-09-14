import { useEffect, useState } from 'react';
import axios from 'axios';
import SideBar from './components/SideBar';
import Weather from './components/Weather';

const apiKey = '7ddb92e5512e18d5ec7db71cfcd3c628';

const App = () => {
     const [weather, setWeather] = useState(null);
     const [country, setCountry] = useState('Nigeria');
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;
     useEffect(() => {
          axios.get(url).then((response) => {
               setWeather(response.data);
          });
     }, [url]);
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
                    <div className='flex justify-between w-full h-full'>
                         <Weather country={country} weather={weather} />
                         <SideBar
                              country={country}
                              stateFunction={setCountry}
                              weather={weather}
                         />
                    </div>
               </div>
          </div>
     );
};

export default App;
