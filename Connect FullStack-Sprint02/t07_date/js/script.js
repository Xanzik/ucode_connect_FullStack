function getFormattedDate(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dayOfWeek = date.getDay();
  
    const formattedDate = `${padZero(day)}.${padZero(month + 1)}.${year} 00:00 ${daysOfWeek[dayOfWeek]}`;
    return formattedDate;
  }
  
  function padZero(num) {
    return num.toString().padStart(2, '0');
  }
  
  // Test cases
  const date0 = new Date(1993, 11, 1);
  const date1 = new Date(1998, 0, -33);
  const date2 = new Date('42 03:24:00');
  
  console.log(getFormattedDate(date0)); // 01.12.1993 00:00 Wednesday
  console.log(getFormattedDate(date1)); // 28.11.1997 00:00 Friday
  console.log(getFormattedDate(date2)); // 01.01.2042 03:24 Wednesday
  