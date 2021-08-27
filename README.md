# Pizza Parlor

#### An Epicodus independent project that allows a user to make selections to build their pizza, then returns the final price.

#### By: Chynna Lew

## Technologies Used

* HTML
* CSS / Bootstrap
* JavaScript / JQuery

## Description

This project was created using Test Driven Development. The plain text tests can be found in the test section of this document.
This application allows the user to make multiple selections using radio buttons to create their own pizza. When the user clicks the Order Now! button, the total cost of the custom pizza will display.
This application was created as an independent project at Epicodus so showcase proper use of JavaScript Objects, Constructors, and Prototypes.

## Setup/Installation Requirements

* Go to the [project repository](https://github.com/chynnalew/pizza)
* Download the files or Clone the repository to your local machine.
* Open the pizza folder on your local machine.
* Open index.html in your local browser.
* Make selections using the radio buttons and click Order Now! to see the total price.
* Click the order again button to make new selections.

## Known Bugs

*  The checkbox values are pushing to arrays, but are failing to add to the total, even though the function worked during testing.

## License

 [MIT](https://opensource.org/licenses/MIT) 2021
 
## Contact Information

 Chynna Lew <chynnalew@yahoo.com>

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
let yourPizza = new YourPizza("Large","Sausage");
yourPizza.totalCost();
Expected Outcome: true

Test: "It should compare the properties in yourPizza to the names in pizzaToppings"
Code:
let yourPizza = new YourPizza("Large","Sausage");
yourPizza.totalCost();
Expected Outcome: true

Test: "It should add the price property of each selected size and topping to a base cost variable"
Code:
let yourPizza = new YourPizza("Large","Sausage");
yourPizza.totalCost();
Expected Outcome: 14

Test: "It should recognize multiple topping selections and loop through the topppings to get all the prices."
code:
let yourPizza = new YourPizza("Large");
yourPizza.toppings.push("Sausage");
yourPizza.toppings.push("Extra Cheese");
yourPizza.totalCost();
Expected Outcome: 15
```
```
"Add additional option objects and functionality to add prices together"
```




