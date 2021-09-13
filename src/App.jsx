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

     return (
          <div className=' w-full h-screen bg-hero-pattern bg-cover bg-no-repeat'>
               <div className='bg-black bg-opacity-40 h-full w-full'>
                    <div className='w-full h-full flex justify-between'>
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
