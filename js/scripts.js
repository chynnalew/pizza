function YourPizza (urSize, urSauce, urDip){
  this.size = urSize;
  this.sauce = urSauce;
  this.dipping = urDip;
  this.sides = [];
  this.drinks = [];
  this.toppings = [];
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
  {topping: "Extra Cheese", price: 1}
]

const dippings = [
  {dipping: "Ranch", price: 1},
  {dipping: "Garlic Butter", price: 1},
  {dipping: "Marinara", price: 1},
  {dipping: "Blue Cheese", price: 1}
]

const sides = [
  {side: "Cesar Salad", price: 3},
  {side: "Garlic Bread", price: 3},
  {side: "6 Hot Wings", price: 5}
]

const drinks = [
  {drink: "Cola", price: 2},
  {drink: "Lemon Lime Soda", price: 2},
  {drink: "Orange Soda", price: 2}
]


YourPizza.prototype.totalCost = function() {
  let cost = 0
  for (let i=0; i<sizes.length; i++) {
    if (this.size === sizes[i].size){
      cost += sizes[i].price;
    }
  }
  for (let i=0; i<sauces.length; i++) {
    if (this.sauce === sauces[i].sauce){
      cost += sauces[i].price;
    }
  }
  for (let i=0; i<dippings.length; i++) {
    if (this.dipping === dippings[i].dipping){
      cost += dippings[i].price;
    }
  }
  for (let i=0; i<sides.length; i++) {
    if (this.sides.includes(sides[i].side)){
      cost += sides[i].price;
    }
  }
  for (let i=0; i<drinks.length; i++) {
    if (this.drinks.includes(drinks[i].drink)){
      cost += drinks[i].price;
    }
  }
  for (let i=0; i<toppings.length; i++) {
    if (this.toppings.includes(toppings[i].topping)){
      cost += toppings[i].price;
    }
  }
  return cost;
}

$(document).ready(function() {
  $("#startOrder").on("click", function(event) {
    event.preventDefault();
    $("#startOrder").fadeOut("fast");
    $("#pizza").fadeIn(2500);
  })

  $("#pizza").submit(function(event){
    event.preventDefault();
    const yourSize = $("select#size").val();
    const yourSauce= $("select#sauce").val();
    const yourDip = $("select#dip").val();
    const yourSide = $("input:checkbox[name=side]:checked").val();
    const yourDrink = $("input:checkbox[name=drink]:checked").val();
    const yourTopping = $("input:checkbox[name=topping]:checked").val();
    let yourPizza = new YourPizza(yourSize, yourSauce, yourDip);
    yourPizza.sides.push(yourSide);
    yourPizza.drinks.push(yourDrink);
    yourPizza.toppings.push(yourTopping);
    let yourCost = yourPizza.totalCost();
    $("#yourSize").append(yourPizza.size);
    $("#yourSauce").append(yourPizza.sauce);
    $("#yourToppings").append(yourPizza.toppings);
    $("#yourSide").append(yourPizza.sides);
    $("#yourDrink").append(yourPizza.drinks);
    $("#yourDip").append(yourPizza.dipping);
    $("#totalCost").append(yourCost);

    $("#pizza, .jumbotron").fadeOut("fast");
    $("#yourOrder").fadeIn(2500);
  })
})
