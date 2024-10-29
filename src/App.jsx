import { useState } from "react";
import SearchForm from "./Components/SearchForm";
import Header from "./Components/Header";
import LocationWeatherDataPanel from "./Components/locationWeatherDataPanel";
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
  return (
    <div className='weather-app'>
      <div className='weather-app-container'>
        <Header />
        <SearchForm
          searchResponseData={searchResponseData}
          setSearchResponseData={setSearchResponseData}
          setLocationWeatherData={setLocationWeatherData}
        />
        {!searchResponseData && locationWeatherData && (
          <LocationWeatherDataPanel locationWeatherData={locationWeatherData} />
        )}
      </div>
    </div>
  );
}

export default App;
