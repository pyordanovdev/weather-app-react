import convertKelvinToCelsius from "../Utils/convertKelvinToCelsius";
/**
 * A component that represents a single location item in the search dropdown.
 * When clicked, it sets the weather data for the selected location and clears
 * the search response data.
 *
 * @param {object} searchResponseItem - An object containing the data for a
 *                                       specific search result location.
 * @param {function} setLocationWeatherData - A function to update the state
 *                                            with the weather data of the
 *                                            selected location.
 * @param {function} setSearchResponseData - A function to update the state
 *                                           with the search response data.
 * @returns {JSX.Element} A list item element representing a city with its
 *                        name, country, temperature, weather icon, and
 *                        coordinates.
 */
function SearchDropdownLocationItem({
  searchResponseItem,
  setLocationWeatherData,
  setSearchResponseData,
  isUsingCurrentLocation,
  fullRender = true,
}) {
  const openWeatherImageURL = import.meta.env.VITE_OPENWEATHER_IMG_URL;
  function handleClick(e) {
    e.preventDefault();
    setLocationWeatherData(searchResponseItem);
    setSearchResponseData(null);
    isUsingCurrentLocation(false);
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
      {fullRender && (
        <>
          <span className='degrees__single-city-search'>
            {convertKelvinToCelsius(searchResponseItem.main.temp).toFixed(0)}
            °C
          </span>
          <span className='weather-icon-state__single-city-search'>
            <img
              src={`
            ${openWeatherImageURL}${searchResponseItem.weather[0].icon}@2x.png`}
              alt='Weather Icon'
            />
          </span>
          <span className='coordinates__single-city-search'>
            {searchResponseItem.coord.lat}, {searchResponseItem.coord.lon}
          </span>
        </>
      )}
    </li>
  );
}

export default SearchDropdownLocationItem;
