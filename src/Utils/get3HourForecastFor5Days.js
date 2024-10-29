/**
 * Makes an API call to fetch the 3 hour forecast data for the next 5 days for a
 * given location with latitude and longitude. The API call is made to the
 * OpenWeatherMap API. If the API call is successful, the function returns the
 * fetched data. If the API call fails, the function logs the error message and
 * returns null.
 *
 * @param {number} lat - The latitude of the location
 * @param {number} long - The longitude of the location
 * @example get3HourForecastFor5Days(37.7749, -122.4194)
 * @returns {object|null} The fetched data or null if the API call fails
 */
export default async function get3HourForecastFor5Days(lat, long) {
  try {
    const apiKey = import.meta.env.VITE__OPENWEATHER_API;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
}
