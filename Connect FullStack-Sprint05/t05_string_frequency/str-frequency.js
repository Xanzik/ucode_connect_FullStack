class StrFrequency {
    constructor(inputString) {
        this.inputString = inputString;
}

letterFrequencies() {
    const letterCount = {};

    for (const char of this.inputString) {
        if (/[a-z]/.test(char)) {
        const capitalizedChar = char.toUpperCase();
        if (letterCount[capitalizedChar]) {
            letterCount[capitalizedChar]++;
        } else {
            letterCount[capitalizedChar] = 1;
        }
        }
    }

    return letterCount;
}

wordFrequencies() {
    const words = this.inputString.match(/\b[A-Za-z]+\b/g);
    const wordCount = {};

    if (!words && this.inputString.trim() === "") {
        // Handle the case when the input string is empty
        wordCount[''] = 1;
    } else if (words) {
        for (const word of words) {
        const lowerCaseWord = word.toUpperCase();
        const capitalizedWord = lowerCaseWord.replace(/^\w/, (c) => c.toUpperCase());
        if (wordCount[capitalizedWord]) {
            wordCount[capitalizedWord]++;
        } else {
            wordCount[capitalizedWord] = 1;
        }
        }
    }

    return wordCount;
}
  
reverseString() {
    const reversedArray = this.inputString.split('').reverse();
    const reversedString = reversedArray.join('');

    return reversedString;
}
}

module.exports = StrFrequency;
  