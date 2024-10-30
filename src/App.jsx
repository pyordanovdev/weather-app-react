import { useState, useEffect } from "react";
import SearchForm from "./Components/SearchForm";
import Header from "./Components/Header";
import LocationWeatherDataPanel from "./Components/locationWeatherDataPanel";
import getUserCurrentLocation from "./Utils/getUserCurrentLocation";
import getLocationWeatherDataFromCoords from "./Utils/getLocationWeatherDataFromCoords";
/**
 * The main App component. It renders a Header, a SearchForm, and a
 * LocationWeatherDataPanel. The LocationWeatherDataPanel is only rendered
 * when the user has searched for a location and the locationWeatherData state
 * is set to a truthy value.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  const [searchResponseData, setSearchResponseData] = useState(null);
  const [locationWeatherData, setLocationWeatherData] = useState(null);
  const [usingCurrentLocation, isUsingCurrentLocation] = useState(false);
  const fetchLocationData = async () => {
    try {
      const userLocation = await getUserCurrentLocation();
      console.log(userLocation);
      const locationWeatherDataFromCoords =
        await getLocationWeatherDataFromCoords(
          userLocation.lat,
          userLocation.long
        );
      setLocationWeatherData(locationWeatherDataFromCoords);
      isUsingCurrentLocation(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchLocationData();
  }, []);
  return (
    <div className='weather-app'>
      <div className='weather-app-container'>
        <Header
          usingCurrentLocation={usingCurrentLocation}
          handleClickUseLocation={fetchLocationData}
        />
        <SearchForm
          searchResponseData={searchResponseData}
          setSearchResponseData={setSearchResponseData}
          setLocationWeatherData={setLocationWeatherData}
          isUsingCurrentLocation={isUsingCurrentLocation}
        />
        {!searchResponseData && locationWeatherData && (
          <LocationWeatherDataPanel locationWeatherData={locationWeatherData} />
        )}
      </div>
    </div>
  );
}

export default App;
