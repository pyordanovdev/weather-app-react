import getCurrentHour from "../Utils/getCurrentHour";
/**
 * A functional component that displays a greeting message
 * based on the current hour of the day.
 * It fetches the current hour using the getCurrentHour utility function
 * and determines whether to display a "Good Morning", "Good Afternoon",
 * or "Good Evening" message.
 *
 * @returns {JSX.Element} A div containing an h1 element with a greeting message.
 */
function Header() {
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
      <h1>{message}, traveller!</h1>
    </div>
  );
}

export default Header;
