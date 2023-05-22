// Function to display the prompt and handle user input
function promptUser(previousResult) {
    // Display the prompt with the previous result
    var userInput = prompt('Previous result: ' + previousResult + '. Enter a new number:');
  
    // Check if the user input is a valid number
    var number = parseInt(userInput);
    if (isNaN(number)) {
      // Display an error message for invalid input
      console.error('Invalid number!');
      promptUser(previousResult); // Prompt again for a valid number
      return;
    }
  
    // Add the number to the previous result
    var newResult = previousResult + number;
  
    // Check if the new result exceeds 10000
    if (newResult > 10000) {
      newResult = 1; // Start from 1
    }
  
    // Display the prompt with the new result
    promptUser(newResult);
  }
  
  // Start the generator with the initial result as 1
  promptUser(1);
  