// Prompt the user to enter an animal name
let animalName = prompt("What animal is the superhero most similar to?");

// Validate animal name input
if (!/^[a-zA-Z]+$/.test(animalName) || animalName.length > 20) {
  alert("Invalid animal name input. Please enter a single word with only letters (length <= 20).");
} else {
  // Prompt the user to enter the gender
  let gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");

  // Validate gender input
  if (!/^(male|female)?$/i.test(gender)) {
    alert("Invalid gender input. Please enter 'male', 'female', or leave it blank.");
  } else {
    // Prompt the user to enter the age
    let age = prompt("How old is the superhero?");

    // Validate age input
    if (!/^\d{1,5}$/.test(age) || age == 0) {
      alert("Invalid age input. Please enter digits only (length <= 5) and cannot start with zero.");
    } else {
      // Generate description based on gender and age
      let description;
      if (gender === "male" || gender === "Male") {
        description = age < 18 ? "boy" : "man";
      } else if (gender === "female" || gender === "Female") {
        description = age < 18 ? "girl" : "woman";
      } else {
        description = age < 18 ? "kid" : "hero";
      }

      // Display the superhero name
      let superheroName = `${animalName}-${description}!`;
      alert(`The superhero name is: ${superheroName}`);
    }
  }
}
