/**
 * A function that converts kelvin to celsius
 * @param {number} kelvin
 * @returns {number} the temperature in celsius
 */
export default function convertKelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}
