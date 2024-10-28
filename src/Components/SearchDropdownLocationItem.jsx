import convertKelvinToCelsius from "../Utils/convertKelvinToCelsius";
function SearchDropdownLocationItem({
  searchResponseItem,
  setLocationWeatherData,
  setSearchResponseData,
}) {
  function handleClick(e) {
    e.preventDefault();
    setLocationWeatherData(searchResponseItem);
    setSearchResponseData(null);
    console.log(searchResponseItem);
  }
  return (
    <li
      className='single-city-search'
      id={searchResponseItem.id}
      onClick={handleClick}
    >
      <span className='city-name__single-city-search'>
        {searchResponseItem.name}, {searchResponseItem.sys.country}
        <img
          src={`/country-flags/${searchResponseItem.sys.country.toLowerCase()}.svg`}
          alt={searchResponseItem.sys.country + " flag"}
        />
      </span>
      <span className='degrees__single-city-search'>
        {convertKelvinToCelsius(searchResponseItem.main.temp).toFixed(0)}
        °C
      </span>
      <span className='weather-icon-state__single-city-search'>
        <img
          src={`
            /weather-icons/${searchResponseItem.weather[0].main.toLowerCase()}.png`}
          alt='Weather Icon'
        />
      </span>
      <span className='coordinates__single-city-search'>
        {searchResponseItem.coord.lat}, {searchResponseItem.coord.lon}
      </span>
    </li>
  );
}

export default SearchDropdownLocationItem;
