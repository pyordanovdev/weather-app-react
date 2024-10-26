import { useState } from "react";
import SearchForm from "./Components/SearchForm";
import Header from "./Components/Header";
function App() {
  const [searchResponseData, setSearchResponseData] = useState(null);
  return (
    <div className='weather-app'>
      <Header />
      <SearchForm
        searchResponseData={searchResponseData}
        setSearchResponseData={setSearchResponseData}
      />
    </div>
  );
}

export default App;
