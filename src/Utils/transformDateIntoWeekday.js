/**
 * Given a date string in the format "YYYY-MM-DD", this function returns the
 * weekday that the date falls on (e.g. "Monday", "Tuesday", etc.).
 *
 * @param {string} dateString - The date string in the format "YYYY-MM-DD"
 * @returns {string} The weekday of the given date string
 */
export default function transformDateIntoWeekday(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}
