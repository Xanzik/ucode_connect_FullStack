class Building {
    constructor(address) {
        this.address = address;
    }

    toString() {
        return "";
    }
    }

    class Tower extends Building {
    constructor(floors, material, address) {
        super(address);
        this.floors = floors;
        this.material = material;
    }

    hasElevator;
    arcCapacity;
    height;

    getFloorHeight() {
        return this.height / this.floors;
    }

    toString() {
        return `${super.toString()}\nFloors: ${this.floors}\nMaterial: ${this.material}\nAddress: ${this.address}\nElevator: ${this.hasElevator ? '+' : '-'}\nArc reactor capacity: ${this.arcCapacity}\nHeight: ${this.height}\nFloor height: ${this.getFloorHeight()}`;
    }
}
