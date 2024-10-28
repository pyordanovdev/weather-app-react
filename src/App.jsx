import { useState } from "react";
import SearchForm from "./Components/SearchForm";
import Header from "./Components/Header";
import LocationWeatherDataPanel from "./Components/locationWeatherDataPanel";
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
