const WeatherDetails = ({ weather }) => {
     const {
          main: { humidity },
          wind: { speed },
       clouds: { all },
          weather: [{description}]
     } = weather;
     return (
          <div className='py-8 px-4'>
               <h5 className='tracking-wider text-gray-200'>Weather Details</h5>
               <div className='mt-8 space-y-6'>
                    <h4 className='flex justify-between font-thin text-gray-300 tracking-wide'>
                         Cloudiness <span>{all}%</span>
                    </h4>
                    <h4 className='flex justify-between font-thin text-gray-300 tracking-wide'>
                         Humidity <span>{humidity}%</span>
                    </h4>
                    <h4 className='flex justify-between font-thin text-gray-300 tracking-wide'>
                         Wind <span>{speed}m/h</span>
                    </h4>
                    <h4 className='flex justify-between font-thin text-gray-300 tracking-wide'>
                         Description <span>{description}</span>
                    </h4>
               </div>
          </div>
     );
};

export default WeatherDetails;
