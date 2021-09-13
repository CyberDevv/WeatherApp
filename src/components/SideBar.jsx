import Input from './Input';
import QuickClickCountry from './QuickClickCountry';
import WeatherDetails from './WeatherDetails';

const SideBar = ({ state, stateFunction, weather }) => {
     return (
          <div className='z-10 w-2/5 glassmorphism'>
               <Input value={state} stateFunction={stateFunction} />
               <div className='px-4 py-8 space-y-6 border-b-2'>
                    <QuickClickCountry
                         value={state}
                         stateFunction={stateFunction}
                    />
               </div>
               <WeatherDetails weather= {weather} />
          </div>
     );
};

export default SideBar;
