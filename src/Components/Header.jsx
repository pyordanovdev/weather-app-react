import getCurrentHour from "../Utils/getCurrentHour";
import FavoriteLocations from "./FavouriteLocations";
import Button from "./Button";
import { FaMapMarkerAlt, FaCircle } from "react-icons/fa";

/**
 * A functional component that displays a greeting message
 * based on the current hour of the day.
 * It fetches the current hour using the getCurrentHour utility function
 * and determines whether to display a "Good Morning", "Good Afternoon",
 * or "Good Evening" message.
 *
 * @returns {JSX.Element} A div containing an h1 element with a greeting message.
 */
function Header({
  handleClickUseLocation,
  favoriteLocations,
  setLocationWeatherData,
  setSearchResponseData,
  isUsingCurrentLocation,
  currentLocation,
  setCurrentLocation,
}) {
  const currentHour = getCurrentHour();
  let message = "";
  if (currentHour < 12) {
    message = "Good Morning";
  } else if (currentHour < 18) {
    message = "Good Afternoon";
  } else {
    message = "Good Evening";
  }
  function handleStopUsingCurrentLocation() {
    setCurrentLocation(null);
  }
  return (
    <div className='header'>
      <div className='col-3'>
        {currentLocation !== null ? (
          <p className='status-box'>
            <FaCircle color={"#0f0"} /> Using current location...{" "}
            <Button
              onClickHandler={handleStopUsingCurrentLocation}
              style={"underline"}
            >
              Stop
            </Button>
          </p>
        ) : (
          <Button onClickHandler={handleClickUseLocation} style={"primary"}>
            Use my current location <FaMapMarkerAlt />
          </Button>
        )}
      </div>
      <div className='col-3'>
        <h1>{message}, traveller!</h1>
      </div>
      <div className='col-3'>
        <FavoriteLocations
          favoriteLocations={favoriteLocations}
          setLocationWeatherData={setLocationWeatherData}
          setSearchResponseData={setSearchResponseData}
          isUsingCurrentLocation={isUsingCurrentLocation}
          setCurrentLocation={setCurrentLocation}
        />
      </div>
    </div>
  );
}

export default Header;
