import SearchDropdownCityItem from "./SearchDropdownCityItem";
function SearchDropdownCities({ weatherData }) {
  return (
    <ul className='search-dropdown-menu'>
      {weatherData &&
        weatherData.map((item) => {
          return (
            <SearchDropdownCityItem
              weatherData={item}
              key={item.lat + item.lon}
            />
          );
        })}
    </ul>
  );
}

export default SearchDropdownCities;
