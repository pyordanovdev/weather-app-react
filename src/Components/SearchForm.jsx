import { useState } from "react";
import Button from "./Button";
import SearchDropdownLocations from "./SearchDropdownLocations";
import { getLocationsDataBySearchInput } from "../Utils/getLocationsDataBySearchInput";
/**
 * A SearchForm component that renders an input field, a button, and a
 * SearchDropdownLocations component.
 *
 * When the form is submitted, it checks if the search query is empty, and if
 * so, alerts the user to fill in a city name. If the query is not empty, it
 * sets the loading state to true, makes an API call to fetch the data, and if
 * the API call is successful, updates the searchResponseData state and resets
 * the searchQuery state after a short delay.
 *
 * @param {object} searchResponseData - The data returned from the API call
 * @param {function} setSearchResponseData - A function to update the
 *                                          searchResponseData state
 * @param {function} setLocationWeatherData - A function to update the
 *                                           locationWeatherData state
 */

function SearchForm({
  searchResponseData,
  setSearchResponseData,
  setLocationWeatherData,
}) {
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
        {isLoading ? <p className='loading'>Loading, please wait...</p> : ""}
        {searchResponseData && !isLoading && (
          <SearchDropdownLocations
            setSearchResponseData={setSearchResponseData}
            searchResponseData={searchResponseData}
            setLocationWeatherData={setLocationWeatherData}
          />
        )}
      </div>
      <Button>Search city</Button>
    </form>
  );

  /**
   * Handles the form submission for searching locations.
   * Prevents the default form submission behavior, checks if the search query is empty,
   * sets the loading state to true, and makes an API call to fetch location data.
   * If the API call is successful, updates the searchResponseData state and clears
   * the search query after a short delay. Alerts the user if the query is empty or
   * if the API call fails.
   *
   * @param {Event} e - The event object from the form submission
   */
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
