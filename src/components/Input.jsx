import { BiSearch } from 'react-icons/bi';

const Input = ({ value, stateFunction }) => {
     let countryVariable = value;
     return (
          <div className='flex items-end justify-center'>
               <input
                    type='text'
                    name='search'
                    placeholder='Search Location'
                    className='w-full px-4 py-3 text-gray-200 bg-transparent border-b-2 focus:outline-none border-opacity-70 '
                    onChange={(e) => {
                         countryVariable = e.target.value;
                    }}
                    onKeyDown={(e) => {
                         if (e.key === 'Enter') {
                              stateFunction(countryVariable);
                         }
                    }}
               />
               <button
                    type='submit'
                    onClick={() => {
                         stateFunction(countryVariable);
                    }}
                    className='p-4 transition-colors bg-pink-600 hover:bg-pink-800'
               >
                    <BiSearch className='text-xl text-gray-100' />
               </button>
          </div>
     );
};

export default Input;
