function changeCharset() {
    const inputString = document.getElementById("inputString").value;
    const selectedCharset = document.getElementById("charset").value;
    
    // Perform charset conversion
    const convertedString = new TextEncoder(selectedCharset, { NONSTANDARD_allowLegacyEncoding: true }).encode(inputString).toString();
    
    // Display the converted string
    const outputContainer = document.getElementById("output-container");
    const convertedStringElement = document.createElement("p");
    convertedStringElement.textContent = `Converted String (${selectedCharset}): ${convertedString}`;
    outputContainer.appendChild(convertedStringElement);
}

function clearFields() {
    document.getElementById("inputString").value = "";
    document.getElementById("output-container").innerHTML = "";
}