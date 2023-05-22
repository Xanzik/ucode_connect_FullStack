import { HardWorker } from './modules/hardWorker.js';

const worker = new HardWorker('John', 30, 5000);

// Use the class methods and properties
console.log(worker.toObject());
console.log(worker.age);
console.log(worker.salary);

// Update the age and salary
worker.age = 35;
worker.salary = 6000;

console.log(worker.toObject());
console.log(worker.age);
console.log(worker.salary);
