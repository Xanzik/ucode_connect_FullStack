String.prototype.removeDuplicates = function() {
    return this.replace(/\s+/g, ' ') // Replace multiple spaces with a single space
               .trim() // Remove leading and trailing spaces
               .split(' ') // Split the string into an array of words
               .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicate words
               .join(' '); // Join the words back into a string
  };
  