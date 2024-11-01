import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import SearchDropdownLocationItem from "./SearchDropdownLocationItem";

function FavoriteLocations({
  favoriteLocations,
  setLocationWeatherData,
  setSearchResponseData,
  isUsingCurrentLocation,
}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  console.log("Fav locations");
  console.log(favoriteLocations);
  return (
    <div
      className='fav-locations-wrapper'
      onMouseOver={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <ul className='fav-locations-button'>
        <span className='fav-locations-number'>{favoriteLocations.length}</span>
        <span className='fav-locations-text'>Favorite locations</span>

        <FaHeart color={"#007BFF"} size={20} />
      </ul>

      {dropdownVisible && (
        <div className='fav-locations__list'>
          {favoriteLocations.length === 0
            ? "No places. Add a place to show up here."
            : favoriteLocations.map((item) => {
                return (
                  <SearchDropdownLocationItem
                    searchResponseItem={item}
                    key={item.id}
                    setLocationWeatherData={setLocationWeatherData}
                    setSearchResponseData={setSearchResponseData}
                    isUsingCurrentLocation={isUsingCurrentLocation}
                    fullRender={false}
                  />
                );
              })}
        </div>
      )}
    </div>
  );
}

export default FavoriteLocations;
