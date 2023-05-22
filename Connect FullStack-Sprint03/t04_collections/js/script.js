//function to work with a guestlist
function GuestList() {
const guestList = new WeakSet();
  this.addGuest = (name) => {
    guestList.add(name);
  };
  this.removeGuest = (name) => {
    guestList.delete(name);
  };
  this.hasGuest = (name) => {
    return guestList.has(name);
  };
}
// Function to list dishes
const listAvailableDishes = () => {
  let dishesString = '';
  for (let [dish, price] of menu) {
    dishesString += `${dish}: ${price}$\n`;
  }
  return dishesString;
};

// Function to check box contents with provided credentials
const getBoxContents = (credentials) => {
  const box = bankVault.get(credentials);
  if (box) {
    return box.contents;
  }
  return 'Invalid credentials';
};
// Get all coins
const getAllCoinsAsString = () => {
  let coinsString = '';
  for (let coin of coinCollection) {
    coinsString += coin.type + ', ';
  }
  return coinsString;
};

const guestList = new GuestList();
const menu = new Map();
const bankVault = new WeakMap();
const coinCollection = new Set();

const name1 = { type: 'John' };
const name2 = { type: 'Shrek' };
const name3 = { type: 'Witcher' };
const name4 = { type: 'Illia'}

guestList.addGuest(name1);
guestList.addGuest(name2);
guestList.addGuest(name3);

// console.log(guestList.hasGuest(name1)); // true
// console.log(guestList.hasGuest(name3)); // true
// console.log(guestList.hasGuest(name4)); // false

guestList.removeGuest(name1);
// console.log(guestList.hasGuest(name1)); // false
// console.log(guestList.size);

menu.set('Pizza', 12.99);
menu.set('Burger', 8.99);
menu.set('Salad', 6.99);

const availableDishes = listAvailableDishes();
// console.log(availableDishes);

// Generate unique credentials for each box
const box1Credentials = { code: '1234' };
const box2Credentials = { code: '5678' };
const box3Credentials = { code: '9012' };

// Create box objects
const box1 = { contents: 'Valuable items' };
const box2 = { contents: 'Important documents' };
const box3 = { contents: 'Cash' };

// Store boxes in the bankVault using credentials as keys
bankVault.set(box1Credentials, box1);
bankVault.set(box2Credentials, box2);
bankVault.set(box3Credentials, box3);

// console.log(getBoxContents(box1Credentials)); // Valuable items in Box 1
// console.log(getBoxContents({ code: '9999' })); // Invalid credentials

const goldCoin = { type: 'Gold Coin' };
const silverCoin = { type: 'Silver Coin' };
const bronzeCoin = { type: 'Bronze Coin' };

coinCollection.add(goldCoin);
coinCollection.add(silverCoin);
coinCollection.add(bronzeCoin);

const collectionString = getAllCoinsAsString();
// console.log(collectionString);