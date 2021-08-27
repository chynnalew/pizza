// function YourPizza (urSize, urSauce, urDip, urSide, urDrink) {
//   this.size = urSize;
//   this.sauce = urSauce;
//   this.toppings = [];
//   this.dipping = urDip;
//   this.sides = urSide;
//   this.drinks = urDrink;
// }

function YourPizza (urSize) {
  this.size = urSize;
  this.toppings = []

}

const sizes = [
  {size: "Small", price: 5},
  {size: "Medium", price: 8},
  {size: "Large", price: 12},
  {size: "X-large", price: 15}
]

const sauces = [
  {sauce: "Classic Red", price: 0},
  {sauce: "Garlic Alfredo", price: 2},
  {sauce: "Pesto", price: 2}
]

const toppings = [
  {topping: "Pepperoni", price: 2},
  {topping: "Sausage", price: 2},
  {topping: "Canadian Bacon", price: 2},
  {topping: "Anchovies", price: 2},
  {topping: "Grilled Chicken", price: 2},
  {topping: "Mushrooms", price: 1},
  {topping: "Onion", price: 1},
  {topping: "Black Olives", price: 1},
  {topping: "Green Pepper", price: 1},
  {topping: "Artichoke Hearts", price: 1},
  {topping: "Pineapple", price: 1},
  {topping: "Extra Cheese", price: 1},
  {topping: "none", price: 0}
]

const dippings = [
  {dipping: "Ranch", price: 1},
  {dipping: "Garlic Butter", price: 1},
  {dipping: "Marinara", price: 1},
  {dipping: "Blue Cheese", price: 1},
  {dipping: "none", price: 0}
]

const sides = [
  {side: "Cesar Salad", price: 3},
  {side: "Garlic Bread", price: 3},
  {side: "6 Hot Wings", price: 5},
  {side: "none", price:0}
]

const drinks = [
  {drink: "Cola", price: 2},
  {drink: "Lemon Lime Soda", price: 2},
  {drink: "Orange Soda", price: 2},
  {drink: "Root Beer", price: 2},
  {drink: "Sparkling Water", price: 2},
  {drink: "none", price: 0}
]


YourPizza.prototype.totalCost = function() {
  let cost = 0
  for (let i=0; i<sizes.length; i++) {
    const theSize = sizes[i].size;
    if (this.size === theSize){
      cost += sizes[i].price;
    }
  }
  for (let i=0; i<toppings.length; i++) {
    const theTopping = toppings[i].topping;
    if (this.toppings.includes(theTopping)){
      cost += toppings[i].price;
    }
    console.log(cost);
  }
}

