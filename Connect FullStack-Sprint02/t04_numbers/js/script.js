function checkDivision(beginRange, endRange) {
  if (beginRange === "" || endRange === "" || beginRange >= endRange) {
    beginRange = 1;
    endRange = 100;
  } 
  for (let number = beginRange; number <= endRange; number++) {
    let description = number;
    if (number % 3 === 0) {
      if ((number % 3) === 0 && (number % 2) === 0 && (number % 10) !== 0) {
        description = number + " is even, a multiple of 3";
      } else if ((number % 3) === 0 && (number % 10) === 0 && (number % 2) !== 0) {
        description = number + "a multiple of 3, a multiple of 10";
      } else if ((number % 3) === 0 && (number % 2) === 0 && (number % 10) === 0) {
        description = number + " is even, a multiple of 3, a multiple of 10";
      } else {
        description = description + " is a multiple of 3";
      }
    } else if (number % 2 === 0) {
        if ((number % 2) === 0 && (number % 10) === 0) {
          description = number + " is even, a multiple of 10";
        }
        else {
          description = description + " is even";
        }
    } else if (number % 10 === 0) {
        description = description + " is a multiple of 10";
    }
    console.log(String(description));
  }
}

let beginRange = prompt("Enter the beginning of the range:");
let endRangeRange = prompt("Enter the endRange of the range:");

checkDivision(beginRange, endRangeRange);
