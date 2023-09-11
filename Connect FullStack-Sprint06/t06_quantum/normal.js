const calculateTime = () => {
    const currentTime = new Date();
    const startYear = 1939;
    
    const yearsPassed = currentTime.getFullYear() - startYear;
    const monthsPassed = currentTime.getMonth();
    const daysPassed = currentTime.getDate() - 1; // Subtract 1 to avoid counting the current day
    
    return {
      years: () => yearsPassed,
      months: () => monthsPassed,
      days: () => daysPassed,
    };
  };
  
  module.exports = { calculateTime };
  