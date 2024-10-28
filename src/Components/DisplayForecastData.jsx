import TableForecast from "./TableForecast";
function DisplayForecastData({ forecastDataObject }) {
  return (
    <div className='three-hour-forecast-container'>
      {Object.keys(forecastDataObject).map((key) => {
        const date = key;
        return <span key={date}>{date}</span>;
      })}
      <TableForecast forecastData={forecastDataObject} />
    </div>
  );
}

export default DisplayForecastData;
