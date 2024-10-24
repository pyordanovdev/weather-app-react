/**
 * A function which gets the current hour of the user, accepts NO parameters.
 * @example getCurrentTime()
 * @returns {number} the current hour of the user
 */
export default function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  return hours;
}
