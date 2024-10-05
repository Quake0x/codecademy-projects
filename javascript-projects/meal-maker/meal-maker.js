// Create an object to hold the meal and price information
const menu = {
  // Properties begin with _ should not be directly manipulated
  _meal: '',  
  _price: 0,

  // Setters
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    }
  },

  // Getters
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for ${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};

/* If the properties are directly manipulated there won't be type checking which could cause confusion
  menu._meal = 1;
  menu._price = 'hey';
  console.log(menu);
*/

// Use the setters to set the values of _meal and _price
menu.meal = 'Chicken Curry';
menu.price = 4;

// Use the getter to get and log today's special
console.log(menu.todaysSpecial);
