// Prompt the user to enter their first name
let firstName = prompt("Enter your first name:");

// Prompt the user to enter their last name
let lastName = prompt("Enter your last name:");

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Check if the input is valid and greet the user
if (firstName.match(/^\D+$/) && lastName.match(/^\D+$/)) {
  firstName = capitalizeFirstLetter(firstName);
  lastName = capitalizeFirstLetter(lastName);

  const fullName = `${firstName} ${lastName}`;
  console.log(`Welcome, ${fullName}!`);
  alert(`Welcome, ${fullName}!`);
} else {
  console.log('Wrong input!');
  alert('Wrong input!');
}
