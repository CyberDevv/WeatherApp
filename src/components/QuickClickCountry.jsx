const countries = ['Birmingham', 'Manchester', 'New York', 'California'];

const QuickClickCountry = ({ stateFunction }) => {
     return (
          <>
               {countries.map((country) => [
                    <button
                         className='w-full font-thin tracking-wide text-left text-gray-300'
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
