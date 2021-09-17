import Input from './Input';
import QuickClickCountry from './QuickClickCountry';
import WeatherDetails from './WeatherDetails';

const SideBar = ({
     state,
     stateFunction,
     weather,
     setIsLoading,
     setIsOpened,
     isOpened,
}) => {
     return (
          <div className='z-10 h-full glassmorphism'>
               <Input
                    value={state}
                    stateFunction={stateFunction}
                    setIsLoading={setIsLoading}
               />
               <div className='px-4 py-8 space-y-6 border-b-2'>
                    <QuickClickCountry
                         value={state}
                         stateFunction={stateFunction}
                         setIsLoading={setIsLoading}
                         setIsOpened={setIsOpened}
                         isOpened={isOpened}
                    />
               </div>
               <WeatherDetails weather={weather} />
          </div>
     );
};

export default SideBar;
