/**
 * Gets the user's current location using the Geolocation API.
 *
 * @example getUserCurrentLocation()
 * @returns {object} An object with keys "lat" and "long", containing the user's current latitude and longitude.
 * @throws {Error} If the user doesn't allow geolocation access, or if there is an error with the Geolocation API.
 */
export default function getUserCurrentLocation() {
  if (!navigator.geolocation) {
    return Promise.reject(
      new Error("Geolocation is not supported by your browser.")
    );
  }
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            reject(new Error("User denied the request for Geolocation."));
            break;
          case error.POSITION_UNAVAILABLE:
            reject(new Error("Location information is unavailable."));
            break;
          case error.TIMEOUT:
            reject(new Error("The request to get user location timed out."));
            break;
          case error.UNKNOWN_ERROR:
            reject(new Error("An unknown error occurred."));
            break;
        }
      }
    );
  });
}
