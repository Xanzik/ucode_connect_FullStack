function checkBrackets(str) {
  if (typeof str !== 'string' || !/\(|\)/.test(str)) {
    return -1;
  }

  let count = 0;
  let openCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      openCount++;
    } else if (str[i] === ')') {
      if (openCount > 0) {
        openCount--;
      } else {
        count++;
      }
    }
  }

  // Adjust the count to get the minimum number of brackets needed
  while (openCount > 0) {
    count++;
    openCount--;
  }

  return count;
}
