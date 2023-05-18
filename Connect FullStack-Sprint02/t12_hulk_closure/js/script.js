function concat(string1, string2) {
  promptForString.count = 0;
  function promptForString(string) {
    promptForString.count++;
    return concat(string1, prompt("Enter secong string!"));
  }
  if (typeof string2 !== 'undefined') {
    return string1 + ' ' + string2;
  } else {
    return promptForString;
  }
}
