import SearchDropdownLocationItem from "./SearchDropdownLocationItem";
/**
 * A component that renders a list of search results as dropdown items.
 *
 * @param {object} searchResponseData - The data returned from the API call
 * @param {function} setLocationWeatherData - A function to update the
 *                                           locationWeatherData state
 * @param {function} setSearchResponseData - A function to update the
 *                                          searchResponseData state
 */
function SearchDropdownLocations({
  searchResponseData,
  setLocationWeatherData,
  setSearchResponseData,
}) {
  return (
    <ul className='search-dropdown-menu'>
      {searchResponseData &&
        searchResponseData.length > 0 &&
        searchResponseData.map((item) => {
          return (
            <SearchDropdownLocationItem
              searchResponseItem={item}
              key={item.id}
              setLocationWeatherData={setLocationWeatherData}
              setSearchResponseData={setSearchResponseData}
              setCurrentLocation={setSearchResponseData}
            />
          );
        })}
    </ul>
  );
}

export default SearchDropdownLocations;
