const validator = {
    get(target, property) {
      console.log(`Trying to access the property '${property}'...`);
      if (!(property in target)) {
        return false;
      }
      return target[property];
    },
    set(target, property, value) {
      if (property === 'age') {
        if (typeof value !== 'number' || !Number.isInteger(value)) {
          console.log('Uncaught TypeError: The age is not an integer');
          return;
        }
        if (value < 0 || value > 200) {
          console.log('Uncaught RangeError: The age is invalid');
          return;
        }
      }
      console.log(`Setting value '${value}' to '${property}'...`);
      target[property] = value;
      return true;
    }
  };
  
  const person = new Proxy({}, validator);
  
  person.age = 100; // Setting value '100' to 'age'
  console.log(person.age); // Trying to access the property 'age'... 100
  
  person.gender = 'male'; // Setting value 'male' to 'gender'
  person.age = 'young'; // Throws a TypeError: The age is not an integer
  
  person.age = 300; // Throws a RangeError: The age is invalid
  