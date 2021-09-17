const countries = ['Birmingham', 'Spain', 'New York', 'California'];

const QuickClickCountry = ({
     stateFunction,
     setIsLoading,
     setIsOpened
}) => {
     return (
          <>
               {countries.map((country, index) => [
                    <button
                         key={index}
                         className='w-full font-thin tracking-wide text-left text-gray-300 hover:text-gray-50 transition-colors duration-300'
                         onClick={(e) => {
                              const countryVariable = e.target.outerText;
                              stateFunction(countryVariable);
                              setIsLoading(false);
                              setIsOpened(false);
                         }}
                    >
                         {country}
                    </button>
               ])}
          </>
     );
};

export default QuickClickCountry;
