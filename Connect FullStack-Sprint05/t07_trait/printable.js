const Printable = {
    print() {
        this.weapons.forEach((weapon, index) => {
        console.log(`${weapon}`);
        index++;
        });
    },
};
  
module.exports = Printable;
