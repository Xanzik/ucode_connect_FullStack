const EatException = require('./eat-exception');

class Ingestion {
  constructor(id, meal_type, day_of_diet) {
    this.id = id;
    this.meal_type = meal_type;
    this.day_of_diet = day_of_diet;
    this.products = [];
  }

  setProduct(product) {
    this.products.push(product);
  }

  getProductInfo(productName) {
    const product = this.products.find((p) => p.name === productName);
    if (product) {
      return { name: product.name, kcal: product.kcal };
    }
    return null;
  }

  getFromFridge(productName) {
    const product = this.products.find((p) => p.name === productName);
    if (!product) {
      throw new Error(`${productName} not found in the fridge.`);
    }
  
    if (product.kcal_per_portion > 400) {
      throw new Error(`Too many calories in ${productName} for breakfast! Throw ${productName} away.`);
    }
  
    this.products = this.products.filter((p) => p.name !== productName);
    return product;
  }
  

  isJunkFood(product) {
    return product.kcal_per_portion > 200;
  }
}

module.exports = {Ingestion};
