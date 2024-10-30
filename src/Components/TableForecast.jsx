import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import convertKelvinToCelsius from "../Utils/convertKelvinToCelsius";
/**
 * A React component that displays a table with 3-hour forecast data for 5 days.
 *
 * @param {object} forecastData - An object containing the 3-hour forecast data
 *                                for 5 days.
 * @returns {JSX.Element} A JSX element that displays a table with 3-hour forecast
 *                        data for 5 days.
 */
function TableForecast({ forecastData }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {forecastData.map((data, index) => {
              return (
                <TableCell key={index}>{data.dt_txt.split(" ")[1]}</TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Forecast:</TableCell>
            {forecastData.map((data, index) => (
              <TableCell key={index}>
                <img
                  src={`
            https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt='Weather Icon'
                />
                {data.weather[0].description}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Temperature:</TableCell>
            {forecastData.map((data, index) => (
              <TableCell key={index}>
                {convertKelvinToCelsius(data.main.temp)}°C
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Feels like:</TableCell>
            {forecastData.map((data, index) => (
              <TableCell key={index}>
                {convertKelvinToCelsius(data.main.feels_like)}°C
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Max Temp:</TableCell>
            {forecastData.map((data, index) => (
              <TableCell key={index}>
                {convertKelvinToCelsius(data.main.temp_max)}°C
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Min Temp:</TableCell>
            {forecastData.map((data, index) => (
              <TableCell key={index}>
                {convertKelvinToCelsius(data.main.temp_min)}°C
              </TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell>Wind:</TableCell>
            {forecastData.map((data, index) => (
              <TableCell key={index}>{data.wind.speed} m/s</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell>Humidity:</TableCell>
            {forecastData.map((data, index) => (
              <TableCell key={index}>{data.main.humidity}%</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Pressure:</TableCell>
            {forecastData.map((data, index) => (
              <TableCell key={index}>{data.main.pressure} hPa</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableForecast;
