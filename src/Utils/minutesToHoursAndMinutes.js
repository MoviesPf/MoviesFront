export function minutesToHoursAndMinutes(minutes) {
  if (minutes === null || isNaN(minutes)) {
    return "N/A";
  }

  let hours = Math.floor(minutes / 60);

  let remainingMinutes = minutes % 60;

  let result = hours + " hours " + remainingMinutes + " minutes";

  return result;
}
