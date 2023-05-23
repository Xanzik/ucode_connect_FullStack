class Human {
  constructor(firstName, lastName, gender, age, calories) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.calories = calories;
    this.hungryTimeout = null;
    this.startGettingHungry();
    this.updateProperties();
    this.updateMethods();
  }

  sleepFor() {
    const seconds = prompt('Enter the number of seconds to sleep:');
    if (seconds) {
      this.displayOutput("I'm sleeping...");
      setTimeout(() => {
        this.displayOutput("I'm awake now.");
      }, seconds * 1000);
    }
  }

  feed() {
    this.displayOutput('Nom nom nom...');
    setTimeout(() => {
      this.calories += 200;
      this.updateProperties();
      if (this.calories > 500) {
        this.displayOutput("I'm not hungry.");
      } else {
        this.displayOutput("I'm still hungry.");
      }
    }, 10000);
  }

  startGettingHungry() {
    if(this.calories < 200) {
    this.displayOutput("I'm getting hungry...");
    this.hungryTimeout = setTimeout(() => {
      this.displayOutput("I'm hungry! calories = 0.");
    }, 5000);
  }
  }

  displayOutput(message) {
    const output = document.createElement('p');
    output.textContent = message;
    document.querySelector('.container').appendChild(output);
  }

  updateProperties() {
    document.getElementById('first-name').textContent = 'First Name: ' + this.firstName;
    document.getElementById('last-name').textContent = 'Last Name: ' + this.lastName;
    document.getElementById('gender').textContent = 'Gender: ' + this.gender;
    document.getElementById('age').textContent = 'Age: ' + this.age;
    document.getElementById('calories').textContent = 'Calories: ' + this.calories;
  }

  updateMethods() {
    const superheroMethods = document.getElementsByClassName('superhero-method');
    for (let i = 0; i < superheroMethods.length; i++) {
      const method = superheroMethods[i];
      method.style.display = 'none';
    }
  }
  turnIntoSuperhero() {
    if (this.calories > 500) {
      this.isSuperhero = true;
      this.displayOutput('I turned into a superhero!');
      this.updateProperties();
      this.updateMethods(); // Add this line to update the methods
    } else {
      this.displayOutput("I can't turn into a superhero. I need more calories!");
    }
  }   
}


class Superhero extends Human {
  constructor(human) {
    super(human.firstName, human.lastName, human.gender, human.age, human.calories);
    this.isSuperhero = false;
    this.updateProperties();
    this.updateMethods();
  }

  fly() {
    this.displayOutput("I'm flying!");
    setTimeout(() => {
      this.displayOutput("I'm done flying.");
    }, 10000);
  }

  fightWithEvil() {
    this.displayOutput("Khhhh-chh... Bang-g-g-g... Evil is defeated!");
  }

  updateProperties() {
    super.updateProperties();
    if (this.isSuperhero) {
      document.getElementById('first-name').textContent = 'Superhero Name: ' + this.firstName;
      document.getElementById('last-name').textContent = 'Superhero Surname: ' + this.lastName;
      document.getElementById('image').src = 'assets/images/photo_2023-05-22_19-36-06.jpg';
    }
  }

  updateMethods() {
    const superheroMethods = document.getElementsByClassName('superhero-method');
    for (let i = 0; i < superheroMethods.length; i++) {
      const method = superheroMethods[i];
      if (this.isSuperhero) {
        method.style.display = 'inline-block';
      } else {
        method.style.display = 'none';
      }
    }
  }
}


let human; // Declare a global variable for the human object
let superhero; // Declare a global variable for the superhero object


function setFirstName() {
  if(human) {
  const firstName = prompt('Enter the First Name:');
  if (firstName) {
    human.firstName = firstName;
    human.updateProperties();
  }
} else {
  const firstName = prompt('Enter the First Name:');
  if (firstName) {
    superhero.firstName = firstName;
    superhero.updateProperties();
  }
}
}

function setLastName() {
  if(human) {
  const lastName = prompt('Enter the Last Name:');
  if (lastName) {
    human.lastName = lastName;
    human.updateProperties();
  } }else {
    const lastName = prompt('Enter the Last Name:');
    if (lastName) {
      superhero.lastName = lastName;
      superhero.updateProperties();
  }
}
}

function setGender() {
  if(human) {
  const gender = prompt('Enter the Gender:');
  if (gender) {
    human.gender = gender;
    human.updateProperties();
  }
  } else {
    const gender = prompt('Enter the Gender:');
    if (gender) {
      superhero.gender = gender;
      superhero.updateProperties();
    }
}
}

function setAge() {
  if(human) {
    const age = prompt('Enter the Age:');
    if (age) {
      human.age = age;
      human.updateProperties();
    }
  } else {
    const age = prompt('Enter the Age:');
    if (age) {
      superhero.age = age;
      superhero.updateProperties();
    }
  }
}

function setCalories() {
  if(human) {
    const calories = prompt('Enter the Calories:');
    if (calories) {
      human.calories = calories;
      human.updateProperties();
    }
  } else {
    const calories = prompt('Enter the Calories:');
    if (calories) {
      superhero.calories = calories;
      superhero.updateProperties();
    }
  }
}

function sleepFor() {
  if(human)
    human.feed();
  if(superhero)
    superhero.feed();
}

function feed() {
  if(human)
    human.feed();
  if(superhero)
    superhero.feed();
}

function fly() {
  superhero.fly();
}

function fightWithEvil() {
  superhero.fightWithEvil();
}

function turnIntoSuperhero() {
  if (human.calories > 500) {
    superhero = new Superhero(human); // Create a new Superhero instance
    human = null; // Remove the human object reference
    superhero.turnIntoSuperhero(); // Call the turnIntoSuperhero method on the Superhero instance
  } else {
    human.displayOutput("I can't turn into a superhero. I need more calories!");
  }

}

// Initialize the human object with default values
human = new Human('Is unknown', 'Is unknown', 'Is unknown', 0, 0);

// superhero = new Superhero('Is unknown', 'Is unknown', 'Is unknown', 0, 0);
