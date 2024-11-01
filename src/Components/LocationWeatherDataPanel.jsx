import convertKelvinToCelsius from "../Utils/convertKelvinToCelsius";
import { useEffect, useState } from "react";
import SlickSlider from "./SlickSlider";
import Button from "./Button";

import {
  FaWater,
  FaWind,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaFan,
  FaHeart,
} from "react-icons/fa";
import LocationMap from "./LocationMap";
import get3HourForecastFor5Days from "../Utils/get3HourForecastFor5Days";
import categorizeArrayItemsIntoSingleObject from "../Utils/categorizeArrayItemsIntoSingleObject";

/**
 * A React component that displays the current weather data and 3 hour forecast data for 5 days for a given location.
 *
 * @param {object} locationWeatherData - An object containing the current weather data for the location.
 * @returns {JSX.Element} A JSX element that displays the current weather data and 3 hour forecast data for 5 days for the given location.
 */
function LocationWeatherDataPanel({
  locationWeatherData,
  favoriteLocations,
  setFavoriteLocations,
  currentLocation,
}) {
  const [fiveDayForecastData, setFiveDayForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const iconStylesObject = {
    fontSize: "25px",
    color: "#007bff",
  };
  const openWeatherImageURL = import.meta.env.VITE_OPENWEATHER_IMG_URL;
  useEffect(() => {
    /**
     * Fetches the 3-hour forecast data for the next 5 days using the given latitude and longitude from the
     * locationWeatherData object, categorizes the data by date, and updates the fiveDayForecastData state.
     * Utilizes the get3HourForecastFor5Days utility function to retrieve the forecast data and the
     * categorizeArrayItemsIntoSingleObject function to organize the data into categorizedDataItems.
     * Logs the categorized data to the console.
     */
    const fetchAndCategorizeData = async () => {
      const fetchedDataForecast = await get3HourForecastFor5Days(
        locationWeatherData.coord.lat,
        locationWeatherData.coord.lon
      );
      const categorizedDataItems = await categorizeArrayItemsIntoSingleObject(
        fetchedDataForecast.list,
        "dt_txt"
      );
      // console.log(categorizedDataItems);
      setFiveDayForecastData(categorizedDataItems);
      setIsLoading(false);
    };
    fetchAndCategorizeData();
    setIsFavorite(
      favoriteLocations.some(
        (favLoc) =>
          favLoc.id === locationWeatherData.id &&
          favLoc.name === locationWeatherData.name
      )
    );
  }, [locationWeatherData, favoriteLocations]);
  /**
   * Handles the favorite button click event.
   * If the location is already in the favorites list, removes it.
   * If the location is not in the favorites list, adds it.
   */
  function handleFavoriteButtonClick() {
    if (isFavorite) {
      setFavoriteLocations((prevFavoriteLocations) => {
        const newFavoriteLocations = prevFavoriteLocations.filter(
          (favoriteLocation) => favoriteLocation.id !== locationWeatherData.id
        );
        localStorage.setItem(
          "favoriteLocations",
          JSON.stringify(newFavoriteLocations)
        );
        return newFavoriteLocations;
      });
    } else {
      setFavoriteLocations((prevFavoriteLocations) => {
        const newFavoriteLocations = [
          ...prevFavoriteLocations,
          locationWeatherData,
        ];
        localStorage.setItem(
          "favoriteLocations",
          JSON.stringify(newFavoriteLocations)
        );
        return newFavoriteLocations;
      });
    }
    setIsFavorite((prev) => !prev);
  }
  return (
    <div className='location-weather-data-panel current-location'>
      <div className='flex-row'>
        <div className='col-6'>
          <Button
            onClickHandler={handleFavoriteButtonClick}
            style={"secondary"}
          >
            {isFavorite
              ? "Remove from favorite locations"
              : "Add as a favorite location"}
            <FaHeart style={iconStylesObject} size={15} />
          </Button>
          {currentLocation === locationWeatherData.id && (
            <span className='label label--success'>Current Location</span>
          )}
          {isFavorite && (
            <span className='label label--info'>Favorite Location</span>
          )}
          <h2 className='location-heading__current-location h2__current-location'>
            {locationWeatherData.name}, {locationWeatherData.sys.country}{" "}
            <img
              src={`/country-flags/${locationWeatherData.sys.country.toLowerCase()}.svg`}
              alt={locationWeatherData.sys.country + " flag"}
            />
          </h2>
          <div className='current-weather__current-location h2__current-location'>
            <img
              src={`
            ${openWeatherImageURL}${locationWeatherData.weather[0].icon}@2x.png`}
              alt='Weather Icon'
            />
            {convertKelvinToCelsius(locationWeatherData.main.temp).toFixed(0)}
            °C
          </div>
          <div className='feels-like-forecast'>
            <h3 className='h3__current-location'>
              Feels like{" "}
              {convertKelvinToCelsius(
                locationWeatherData.main.feels_like
              ).toFixed(0)}
              °C.{" "}
              {locationWeatherData.weather[0].description
                .slice(0, 1)
                .toUpperCase() +
                locationWeatherData.weather[0].description.slice(1)}
              .
            </h3>
          </div>
          <div className='other-data__current-location'>
            <ul>
              <li>
                <FaWater style={iconStylesObject} /> Humidity:{" "}
                {locationWeatherData.main.humidity}%
              </li>
              <li>
                <FaWind style={iconStylesObject} /> Wind:{" "}
                {locationWeatherData.wind.speed} m/s
              </li>
              <li>
                <FaTemperatureHigh style={iconStylesObject} />
                Max Temp:{" "}
                {convertKelvinToCelsius(locationWeatherData.main.temp_max)}°C
              </li>
              <li>
                <FaTemperatureLow style={iconStylesObject} /> Min Temp:{" "}
                {convertKelvinToCelsius(locationWeatherData.main.temp_min)}°C
              </li>
              <li>
                <FaFan style={iconStylesObject} /> Pressure:{" "}
                {locationWeatherData.main.pressure} hPa
              </li>
            </ul>
          </div>
        </div>
        <div className='col-6'>
          <LocationMap
            lat={locationWeatherData.coord.lat}
            long={locationWeatherData.coord.lon}
            popupText={locationWeatherData.name}
            zoom={10}
          />
        </div>
      </div>
      <h2 className='h2__current-location'>3 hour forecast: 5 days</h2>
      {isLoading ? (
        <p className='loading'>Loading forecast data...</p>
      ) : (
        <SlickSlider dataObject={fiveDayForecastData} />
      )}
    </div>
  );
}

export default LocationWeatherDataPanel;
