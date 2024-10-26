/**
 * A function which gets the current hour of the user, accepts NO parameters.
 * @example getCurrentHour()
 * @returns {number} the current hour of the user
 */
export default function getCurrentHour() {
  const date = new Date();
  const hours = date.getHours();
  return hours;
}
