class EatException extends Error {
    constructor() {
      super("No more junk food, dumpling");
      this.name = "EatException";
    }
  }
  
  module.exports = EatException;
  