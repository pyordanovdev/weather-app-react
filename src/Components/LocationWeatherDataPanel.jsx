import convertKelvinToCelsius from "../Utils/convertKelvinToCelsius";
import {
  FaWater,
  FaWind,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaFan,
} from "react-icons/fa";

function LocationWeatherDataPanel({ locationWeatherData }) {
  const iconStylesObject = {
    fontSize: "25px",
    color: "#007bff",
  };
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
        <div className='col-6'>here goes the map</div>
      </div>
    </div>
  );
}

export default LocationWeatherDataPanel;
