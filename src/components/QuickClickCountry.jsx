const countries = ['Birmingham', 'Spain', 'New York', 'California'];

const QuickClickCountry = ({ stateFunction }) => {
     return (
          <>
               {countries.map((country, index) => [
                    <button key= {index}
                         className='w-full font-thin tracking-wide text-left text-gray-300 hover:text-gray-50 transition-colors duration-300'
                         onClick={(e) => {
                              //  countryVariable = e.target;
                              const countryVariable = e.target.outerText;
                              stateFunction(countryVariable);
                         }}
                    >
                         {country}
                    </button>,
               ])}
          </>
     );
};

export default QuickClickCountry;
