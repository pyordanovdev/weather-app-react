import { useState } from "react";
import Button from "./Button";
import SearchDropdownLocations from "./SearchDropdownLocations";
import { getLocationsDataBySearchInput } from "../Utils/getLocationsDataBySearchInput";
function SearchForm({ searchResponseData, setSearchResponseData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form className='search-form open' onSubmit={handleSearchFormSubmit}>
      <div className='search-form-container'>
        <input
          type='text'
          placeholder='Enter a city..'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        {isLoading ? <p>Loading, please wait...</p> : ""}
        {searchResponseData && !isLoading && (
          <SearchDropdownLocations searchResponseData={searchResponseData} />
        )}
      </div>
      <Button>Search city</Button>
    </form>
  );

  async function handleSearchFormSubmit(e) {
    e.preventDefault();
    if (searchQuery === "") return alert("Please enter a city name");
    setIsLoading(true);
    try {
      const returnedAPICallData = await getLocationsDataBySearchInput(
        searchQuery
      );

      if (returnedAPICallData) {
        setTimeout(() => {
          setSearchResponseData(returnedAPICallData.list);
          setSearchQuery("");
          setIsLoading(false);
          console.log(returnedAPICallData);
        }, 500);
      }
    } catch (err) {
      console.log(err);
      alert("Failed to fetch data");
    }
  }
}

export default SearchForm;
