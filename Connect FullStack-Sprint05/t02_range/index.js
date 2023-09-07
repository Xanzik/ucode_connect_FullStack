function checkDivision(start = 1, end = 60) {
    for (let i = start; i <= end; i++) {
        let info = `The number ${i}`;

        if (i % 2 === 0 && i % 3 === 0 && i % 10 === 0) {
        info += ' is divisible by 2, divisible by 3, divisible by 10';
        } else if (i % 2 === 0 && i % 3 === 0) {
        info += ' is divisible by 2, divisible by 3';
        } else if (i % 2 === 0 && i % 10 === 0) {
        info += ' is divisible by 2, divisible by 10';
        } else if (i % 3 === 0 && i % 10 === 0) {
        info += ' is divisible by 3, divisible by 10';
        } else if (i % 2 === 0) {
        info += ' is divisible by 2';
        } else if (i % 3 === 0) {
        info += ' is divisible by 3';
        } else if (i % 10 === 0) {
        info += ' is divisible by 10';
        } else {
        info += ' -';
        }

        console.log(info);
    }
}

module.exports = {
    checkDivision
};
  