function YourPizza (urSize, urSauce, urDip){
  this.size = urSize;
  this.sauce = urSauce;
  this.dipping = urDip;
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

const dippings = [
  {dipping: "Ranch", price: 1},
  {dipping: "Garlic Butter", price: 1},
  {dipping: "Marinara", price: 1},
  {dipping: "Blue Cheese", price: 1}
]

YourPizza.prototype.totalCost = function() {
  let cost = 0;
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
  if (this.toppings.length > 0) {
    cost += this.toppings.length;
  }
  return cost;
  }


$(document).ready(function() {
  $("#startOrder").on("click", function(event) {
    event.preventDefault();
    $("#startOrder, #landingPizza, #about").fadeOut("fast");
    $("#pizza").fadeIn(2500);
  })

  $("#pizza").submit(function(event){
    event.preventDefault();

    const yourSize = $("select#size").val();
    const yourSauce= $("select#sauce").val();
    const yourDip = $("select#dip").val();
    const yourTopping = [];

    $("input:checkbox[name=toppings]:checked").each(function() {
      yourTopping.push($(this).val());
    });

    let yourPizza = new YourPizza(yourSize, yourSauce, yourDip);
    yourPizza.toppings.push(yourTopping);
    const yourCost = yourPizza.totalCost();

    $("#yourSize").append(yourPizza.size);
    $("#yourSauce").append(yourPizza.sauce);
    $("#yourToppings").append(yourPizza.toppings);
    $("#yourDip").append(yourPizza.dipping);
    $("#totalCost").append(yourCost);

    $("#pizza, .jumbotron").fadeOut("fast");
    $("#yourOrder").fadeIn(2500);
  })
})
