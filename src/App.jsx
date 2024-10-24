import { useState } from "react";
import SearchForm from "./Components/SearchForm";
import Header from "./Components/Header";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <div className='weather-app'>
      <Header />
      <SearchForm setWeatherData={setWeatherData} weatherData={weatherData} />
    </div>
  );
}

export default App;
