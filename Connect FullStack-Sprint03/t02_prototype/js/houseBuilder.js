// House Blueprint prototype
function HouseBlueprint() {
  this.address = '';
  this.date = new Date();
  this.description = '';
  this.owner = '';
  this.size = 0;
  this._building_speed = 0.5;
  this.getDaysToBuild = function() {
    return this.house.size / (this.house._building_speed);
  };
}

// House Builder constructor
function HouseBuilder(address, description, owner, size, roomCount) {
  this.house = new HouseBlueprint();
  this.getDate = function() {
    return this.house.date;
  }
  this.getSpeed = function() {
    return this.house._building_speed;
  }
  this.address = address;
  this.description = description;
  this.owner = owner;
  this.size = size;
  this.date = this.getDate();
  this._building_speed = this.getSpeed();
  this.roomCount = roomCount;
  this.getDaysToBuild = function() {
    return this.size / (this.house._building_speed);
  };
}
