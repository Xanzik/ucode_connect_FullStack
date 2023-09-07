function firstUpper(string) {
    if(string === null) {
        return '';
    }
    // Remove leading and trailing whitespaces
    string = string.trim();

    if (string.length === 0) {
        return ''; // Return an empty string if the input is empty after trimming
    }

    // Capitalize the first letter and make the rest of the string lowercase
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

module.exports = {
    firstUpper
};