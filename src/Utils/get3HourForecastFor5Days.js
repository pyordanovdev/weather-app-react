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
