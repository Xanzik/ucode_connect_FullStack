const Model = require('../model');

class Hero extends Model {
  constructor(attributes) {
    super(attributes);
    this.id = attributes.id;
    this.name = attributes.name;
    this.description = attributes.description;
    this.class_role = attributes.class_role;
  }
}

module.exports = Hero;
