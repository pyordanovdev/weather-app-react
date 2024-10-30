import TableForecast from "./TableForecast";
import transformDateIntoWeekday from "../Utils/transformDateIntoWeekday";

/**
 * A React component that displays the 3 hour forecast data for 5 days for a given location.
 *
 * @param {object} forecastDataObject - An object containing the 3 hour forecast data for 5 days, with dates as the keys.
 * @returns {JSX.Element} A JSX element that displays the 3 hour forecast data for 5 days for the given location.
 */
function DisplayForecastData({ date, forecastDataObject }) {
  return (
    <div className='forecast-data'>
      <h4 className='h4__current-location'>
        {transformDateIntoWeekday(date)} - {date}
      </h4>
      <TableForecast forecastData={forecastDataObject} />
    </div>
  );
}

export default DisplayForecastData;
