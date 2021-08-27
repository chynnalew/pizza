## TESTS
```
"Make a YourPizza constructor that can create yourPizza object."
"Make objects for pizza size, sauce, toppings, dipping sauces, sides, drinks, etc. that include nested objects with name and price as their properties"
"Make input fields with values corresponding to the nested object names so the user can make their selections"
```
```
Test: "It should take the user inputs and create a new YourPizza"

Test: "It should compare the properties in yourPizza to the names in pizzaSize"
Code:
yourPizza {
  size: large;
  topping: sausage;
}
yourPizza.getCost();
Expected Outcome: true

Test: "It should compare the properties in yourPizza to the names in pizzaToppings"
Code:
yourPizza {
  size: large;
  topping: sausage;
}
yourPizza.getCost();
Expected Outcome: true

Test: "It should add the price property of each selected size and topping to a base cost variable"
Code:
let cost = 0
yourPizza {
  size: large;
  topping: sausage;
}
yourPizza.getCost();
Expected Outcome: 14

Test: "It should loop through the toppings array? If multiple toppings can be selected at once? Maybe just have fields for topping1, topping2, topping3?"




