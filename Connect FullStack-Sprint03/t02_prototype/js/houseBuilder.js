// House Blueprint prototype
function HouseBlueprint() {
  this.address = '';
  this.date = new Date();
  this.description = '';
  this.owner = '';
  this.size = 0;
  this._building_speed = 0.5;

  // Method to calculate the number of days needed to build the house
  this.getDaysToBuild = function() {
    var roomCount = this.size / 50; // Assuming each room is 50m2
    return roomCount * this._building_speed;
  };
}

// House Builder constructor
function HouseBuilder(address, description, owner, size, roomCount) {
  this.house = new HouseBlueprint();
  this.house.address = address;
  this.house.description = description;
  this.house.owner = owner;
  this.house.size = size;
  this.roomCount = roomCount;
}