// Prompt the user to enter a number from 1 to 10
let inputNumber = parseInt(prompt("Enter a number from 1 to 10:"));

// Validate the input
while (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 10) {
  inputNumber = parseInt(prompt("Invalid input. Please enter a number from 1 to 10:"));
}

// Display an idiom based on the input value
let idiom;
switch (inputNumber) {
  case 1:
    idiom = "Back to square 1";
    break;
  case 2:
    idiom = "Goody two-shoes";
    break;
  case 3:
  case 6:
    idiom = "Two's company, three's a crowd";
    break;
  case 4:
  case 9:
    idiom = "Counting sheep";
    break;
  case 5:
    idiom = "Take five";
    break;
  case 7:
    idiom = "Seventh heaven";
    break;
  case 8:
    idiom = "Behind the eight-ball";
    break;
  case 10:
    idiom = "Cheaper by the dozen";
    break;
}

// Display the idiom with alert()
alert(idiom);
