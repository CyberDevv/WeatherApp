import Input from './Input';

const SideBar = ({ state, stateFunction }) => {
     return (
          <div className='z-10 w-2/5 glassmorphism'>
               <Input value={state} stateFunction={stateFunction} />
          </div>
     );
};

export default SideBar;
