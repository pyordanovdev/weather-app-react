import getCurrentHour from "../Utils/getCurrentHour";
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
function Header({ usingCurrentLocation, handleClickUseLocation }) {
  const currentHour = getCurrentHour();
  let message = "";
  if (currentHour < 12) {
    message = "Good Morning";
  } else if (currentHour < 18) {
    message = "Good Afternoon";
  } else {
    message = "Good Evening";
  }
  return (
    <div className='header'>
      <div className='col-3'>
        {usingCurrentLocation ? (
          <p className='status-box'>
            <FaCircle color={"#0f0"} /> Using current location...
          </p>
        ) : (
          <Button onClickHandler={handleClickUseLocation}>
            Use my current location <FaMapMarkerAlt />
          </Button>
        )}
      </div>
      <div className='col-3'>
        <h1>{message}, traveller!</h1>
      </div>
      <div className='col-3'>some other info</div>
    </div>
  );
}

export default Header;
