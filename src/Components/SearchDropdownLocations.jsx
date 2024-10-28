import SearchDropdownLocationItem from "./SearchDropdownLocationItem";
function SearchDropdownLocations({
  searchResponseData,
  setLocationWeatherData,
  setSearchResponseData,
}) {
  return (
    <ul className='search-dropdown-menu'>
      {searchResponseData &&
        searchResponseData.map((item) => {
          return (
            <SearchDropdownLocationItem
              searchResponseItem={item}
              key={item.id}
              setLocationWeatherData={setLocationWeatherData}
              setSearchResponseData={setSearchResponseData}
            />
          );
        })}
    </ul>
  );
}

export default SearchDropdownLocations;
