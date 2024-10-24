import { useState } from "react";
import Button from "./Button";
import SearchDropdownCities from "./SearchDropdownCities";
import { getWeatherDataBySearchInput } from "../Utils/GetWeatherData";
function SearchForm({ weatherData, setWeatherData }) {
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
        {weatherData && !isLoading && (
          <SearchDropdownCities weatherData={weatherData} />
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
      const weatherData = await getWeatherDataBySearchInput(searchQuery);

      if (weatherData) {
        setTimeout(() => {
          setWeatherData(weatherData);
          setSearchQuery("");
          setIsLoading(false);
          console.log(weatherData);
        }, 500);
      }
    } catch (err) {
      console.log(err);
      alert("Failed to fetch data");
    }
  }
}

export default SearchForm;
