/**
 * Makes an API call to search for locations (cities) that match the search query
 * @param {string} searchInput - Used to search for locations (cities) in the API call
 * @example getLocationsDataBySearchInput("london")
 * @returns {array} - An array of objects containing the search results
 */
async function getLocationsDataBySearchInput(searchInput) {
  try {
    const apiKey = import.meta.env.VITE__OPENWEATHER_API;
    const searchResultsLimit = import.meta.env.VITE__GENERAL_SEARCH_API_LIMIT;
    const findBySearchInputAPIURLCall = import.meta.env
      .VITE_OPENWEATHER_SEARCH_BY_INPUT_URL;
    const res = await fetch(
      `${findBySearchInputAPIURLCall}?q=${searchInput}&limit=${searchResultsLimit}&appid=${apiKey}`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data;
  } catch (err) {
    alert("Failed to fetch data, please try again.");
    console.log(err.message);
    return null;
  }
}

export { getLocationsDataBySearchInput };
