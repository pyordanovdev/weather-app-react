/**
 * Makes an API call to fetch the current weather data for a given set of coordinates.
 * Utilizes the OpenWeatherMap API.
 *
 * @param {number} lat - The latitude of the location
 * @param {number} long - The longitude of the location
 * @example getLocationWeatherDataFromCoords(37.7749, -122.4194)
 * @returns {object|null} The fetched data or null if the API call fails
 */
export default async function getLocationWeatherDataFromCoords(lat, long) {
  const apiKey = import.meta.env.VITE__OPENWEATHER_API;
  const coordsAPIURLCall = import.meta.env.VITE_OPENWEATHER_COORDS_CALL_URL;
  try {
    const res = await fetch(
      `${coordsAPIURLCall}?lat=${lat}&lon=${long}&appid=${apiKey}`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
}
