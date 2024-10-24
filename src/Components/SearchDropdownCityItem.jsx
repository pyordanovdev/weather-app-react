function SearchDropdownCityItem({ weatherData }) {
  return (
    <li className='single-city-search'>
      <span className='city-name__single-city-search'>
        {weatherData.name}, {weatherData.country}{" "}
        <img
          src={`/country-flags/${weatherData.country.toLowerCase()}.svg`}
          alt={weatherData.country + " flag"}
        />
      </span>
      {/* <span className='degrees__single-city-search'>
        {(weatherData.main.temp - 273.15).toFixed(2)}°C
      </span> */}
      {/* <span className='weather-icon-state__single-city-search'>
        <img
          src={`${
            process.env.PUBLIC_URL
          }/weather-icons/${weatherData.weather[0].main.toLowerCase()}.png`}
          alt='Weather Icon'
        />
      </span> */}
      <span className='coordinates__single-city-search'>
        {weatherData.lat.toFixed(4)}, {weatherData.lon.toFixed(4)}
      </span>
    </li>
  );
}

export default SearchDropdownCityItem;
