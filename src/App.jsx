import SideBar from './components/SideBar';
import Weather from './components/Weather';

const App = () => {
     return (
          <div className=' w-full h-screen bg-hero-pattern bg-cover bg-no-repeat'>
               <div className='bg-black bg-opacity-40 h-full w-full'>
                    <div className='w-full h-full flex justify-between'>
                         <Weather />
                         <SideBar />
                    </div>
               </div>
          </div>
     );
};

export default App;
