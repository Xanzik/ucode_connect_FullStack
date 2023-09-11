const calculateTime = () => {
    const normalTime = require('./normal').calculateTime();
    const normalYears = normalTime.years();
    const normalMonths = normalTime.months();
    const normalDays = normalTime.days();
  
    // Calculate quantum years, months, and days
    const quantumYears = Math.floor(normalYears / 7);
    const quantumMonths = normalMonths + (normalYears % 7) * 12;
    const quantumDays = normalDays;
  
    return [quantumYears, quantumMonths, quantumDays];
  };
  
  module.exports = { calculateTime };
  