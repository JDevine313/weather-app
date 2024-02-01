export const calcDay = (day: any) => {
  let x = new Date(day.date).getDay();
  if (x === 0) {
    return "Monday";
  } else if (x === 1) {
    return "Tuesday";
  } else if (x === 2) {
    return "Wedensday";
  } else if (x === 3) {
    return "Thursday";
  } else if (x === 4) {
    return "Friday";
  } else if (x === 5) {
    return "Saturday";
  } else if (x === 6) {
    return "Sunday";
  }
};
