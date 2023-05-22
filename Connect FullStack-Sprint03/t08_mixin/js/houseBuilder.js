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
    // Method to calculate the number of days needed to build the house
  }
  // House Builder constructor
  function HouseBuilder(address, description, owner, size, roomCount) {
    this.house = new HouseBlueprint();
    this.address = address;
    this.description = description;
    this.owner = owner;
    this.size = size;
    this._building_speed = this.house._building_speed;
    this.getDaysToBuild = function() {
      return this.size / (this.house._building_speed);
    };
    this.roomCount = roomCount;
  };