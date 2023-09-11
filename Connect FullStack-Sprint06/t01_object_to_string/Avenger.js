class Avenger {
  constructor({name, alias, gender, age, powers}) {
    this.name = name;
    this.alias = alias;
    this.gender = gender;
    this.age = age;
    this.powers = powers;
  }

  toString() {
    return `name: ${this.name}\ngender: ${this.gender}\nage: ${this.age}`;
  }

  call() {
    return `${this.name}\n${this.powers.join('\n')}`;
  }
}

module.exports = {Avenger};
