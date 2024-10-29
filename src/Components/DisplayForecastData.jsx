import TableForecast from "./TableForecast";
/**
 * A React component that displays the 3 hour forecast data for 5 days for a given location.
 *
 * @param {object} forecastDataObject - An object containing the 3 hour forecast data for 5 days, with dates as the keys.
 * @returns {JSX.Element} A JSX element that displays the 3 hour forecast data for 5 days for the given location.
 */
function DisplayForecastData({ forecastDataObject }) {
  return (
    <div className='forecast-data'>
      {Object.keys(forecastDataObject).map((key) => {
        const date = key;
        return <span key={date}>{date}</span>;
      })}
      <TableForecast forecastData={forecastDataObject} />
    </div>
  );
}

export default DisplayForecastData;
