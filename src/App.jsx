import { useState, useEffect } from "react";
import SearchForm from "./Components/SearchForm";
import Header from "./Components/Header";
import LocationWeatherDataPanel from "./Components/LocationWeatherDataPanel";
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
  const [currentLocation, setCurrentLocation] = useState(null);
  const [favoriteLocations, setFavoriteLocations] = useState(
    localStorage.getItem("favoriteLocations")
      ? JSON.parse(localStorage.getItem("favoriteLocations"))
      : []
  );
  const fetchLocationData = async () => {
    try {
      // setLocationWeatherData(null);
      const userLocation = await getUserCurrentLocation();
      // console.log(userLocation);
      const locationWeatherDataFromCoords =
        await getLocationWeatherDataFromCoords(
          userLocation.lat,
          userLocation.long
        );
      setLocationWeatherData(locationWeatherDataFromCoords);
      setCurrentLocation(locationWeatherDataFromCoords.id);
    } catch (err) {
      console.log(err);
      alert("Failed to get location, please try again");
    }
  };
  useEffect(() => {
    fetchLocationData();
  }, []);
  return (
    <div className='weather-app'>
      <div className='weather-app-container'>
        <Header
          handleClickUseLocation={fetchLocationData}
          favoriteLocations={favoriteLocations}
          setSearchResponseData={setSearchResponseData}
          setLocationWeatherData={setLocationWeatherData}
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
        />
        <SearchForm
          searchResponseData={searchResponseData}
          setSearchResponseData={setSearchResponseData}
          setLocationWeatherData={setLocationWeatherData}
          setCurrentLocation={setCurrentLocation}
        />
        {!searchResponseData && locationWeatherData && (
          <LocationWeatherDataPanel
            locationWeatherData={locationWeatherData}
            setFavoriteLocations={setFavoriteLocations}
            favoriteLocations={favoriteLocations}
            currentLocation={currentLocation}
          />
        )}
      </div>
    </div>
  );
}

export default App;
