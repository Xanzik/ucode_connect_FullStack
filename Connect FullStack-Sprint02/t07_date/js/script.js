function getFormattedDate(date) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let year, month, day, hours, minutes, dayOfWeek;

  year = date.getFullYear().toString();
  month = (date.getMonth() + 1).toString().padStart(2, '0');
  day = date.getDate().toString().padStart(2, '0');
  hours = date.getHours().toString().padStart(2, '0');
  minutes = date.getMinutes().toString().padStart(2, '0');
  dayOfWeek = daysOfWeek[date.getDay()];

  return `${day}.${month}.${year} ${hours}:${minutes} ${dayOfWeek}`;
}
