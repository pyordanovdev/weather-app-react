import getCurrentHour from "../Utils/getCurrentHour";
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
