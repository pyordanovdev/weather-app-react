import convertKelvinToCelsius from "../Utils/convertKelvinToCelsius";
import { useEffect, useState } from "react";
import {
  FaWater,
  FaWind,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaFan,
} from "react-icons/fa";
import LocationMap from "./LocationMap";
import DisplayForecastData from "./DisplayForecastData";
import get3HourForecastFor5Days from "../Utils/get3HourForecastFor5Days";
import categorizeArrayItemsIntoSingleObject from "../Utils/categorizeArrayItemsIntoSingleObject";

function LocationWeatherDataPanel({ locationWeatherData }) {
  const [fiveDayForecastData, setfiveDayForecastData] = useState(null);
  const iconStylesObject = {
    fontSize: "25px",
    color: "#007bff",
  };
  useEffect(() => {
    const fetchAndCategorizeData = async () => {
      const fetchedDataForecast = await get3HourForecastFor5Days(
        locationWeatherData.coord.lat,
        locationWeatherData.coord.lon
      );
      const categorizedDataItems = await categorizeArrayItemsIntoSingleObject(
        fetchedDataForecast.list,
        "dt_txt"
      );
      console.log(categorizedDataItems);
      setfiveDayForecastData(categorizedDataItems);
    };
    fetchAndCategorizeData();
  }, [locationWeatherData.coord.lat, locationWeatherData.coord.lon]);

  return (
    <div className='location-weather-data-panel current-location'>
      <div className='flex-row'>
        <div className='col-6'>
          <h2 className='location-heading__current-location'>
            {locationWeatherData.name}, {locationWeatherData.sys.country}{" "}
            <img
              src={`/country-flags/${locationWeatherData.sys.country.toLowerCase()}.svg`}
              alt={locationWeatherData.sys.country + " flag"}
            />
          </h2>
          <div className='current-weather__current-location'>
            <img
              src={`
            /weather-icons/${locationWeatherData.weather[0].main.toLowerCase()}.png`}
              alt='Weather Icon'
            />
            {convertKelvinToCelsius(locationWeatherData.main.temp).toFixed(0)}
            °C
          </div>
          <div className='feels-like-forecast'>
            <strong>
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
            </strong>
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
                Temp. Max:{" "}
                {convertKelvinToCelsius(locationWeatherData.main.temp_max)}°C
              </li>
              <li>
                <FaTemperatureLow style={iconStylesObject} /> Temp. Min:{" "}
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
      <h2>3 hour forecast: 5 days</h2>
      {fiveDayForecastData && (
        <DisplayForecastData forecastDataObject={fiveDayForecastData} />
      )}
    </div>
  );
}

export default LocationWeatherDataPanel;
