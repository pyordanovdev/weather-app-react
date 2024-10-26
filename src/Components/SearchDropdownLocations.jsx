import SearchDropdownLocationItem from "./SearchDropdownLocationItem";
function SearchDropdownLocations({ searchResponseData }) {
  return (
    <ul className='search-dropdown-menu'>
      {searchResponseData &&
        searchResponseData.map((item) => {
          return (
            <SearchDropdownLocationItem
              searchResponseItem={item}
              key={item.id}
            />
          );
        })}
    </ul>
  );
}

export default SearchDropdownLocations;
