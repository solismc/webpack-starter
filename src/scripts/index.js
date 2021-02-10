import { from } from 'core-js/fn/array';
import '../styles/index.scss';

/*if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('Hello World!!!!!!');

const carId= 10;
console.log(carId);

let i=0;
for (; i<12; i++) {
  if (i === 8) {
    break;
  }
}

console.log(i);

for (let i=0; i<5; i++) {
  if (i === 3) 
    continue;
    console.log(i);
  }

//Operators//

  console.log(1 === true);


  /*let year = 1967;
  console.log(year++);
  console.log(year);
  */

  /*if (5 === 5 && 6 === 6) {
    console.log(true);
  }
  else {
    console.log(false);
  }

  let s1 = 'Zoo';
  let s2 = 'alphabet';

  if (s1.toUpperCase() < s2.toUpperCase()) {
    console.log(true);
  }
  else {
    console.log(false);
  }

  console.log( (5 > 6) ? 'yes' : 'no' );

  let year = 2020;
  let age = 21;
  console.log (year);
  year -= age;
  console.log('You were born in ' + year);

//Functions and Scope//

function startCar(carId) {
  let message = 'Starting...';
  let startFn = function turnkey() {
    let message = 'Override';
  };
  startFn();
  console.log(message);
}
startCar(123);*/
//Override is not displayed because it is out of scope. console.log is outside the nested curly braces.//

//Block Scope// -- Only Applies to LET, not to VAR

/*let message = 'Outside';
if (5 === 5) {
  let message = 'Equal';
  console.log(message);
}
console.log(message);

//IIFE Example//

/*let app = (function() {
  let carId = 123;
  console.log('in function');
  return {};
})();
console.log(app);*/

//Closure Example//

/*let app = (function() {
  let carId = 123;
  let getId = function() {
    return carId;
  };
  return {
    getId: getId
  };
}) ();
console.log(app.getId() );

//This keyword// - usually applies to objects

/*let o = {
  carId: 123,
  getId: function() {
    console.log(this);
    return this.carId;
  }
};
console.log(o.getId());*/

//Call and Apply Examples//

/*let o = {
  carId: 123,
  getId: function(prefix) {
    return prefix + this.carId;
  }
};
let newCar = { carId: 456 };
console.log( o.getId.apply(newCar, ['ID: ']));*/

//Constructor Functions//

/*function Car(id) {
  this.carId = id;
}

let car = new Car(123);
console.log( car.carId); //should log out 123//
*/

//Method//

/*function Car(id) {
  this.carId = id;
  this.start = function() {
    console.log('start: ' + this.carId);
  };
}

let vehicle = new Car(123);
vehicle.start(); */

//Array Iteration// forEach, filter, find, every

/*let carIds = [
  { carId: 123, style: 'sedan'},
  { carId: 456, style: 'convertible'},
  { carId: 789, style: 'sedan'}
];

let convertibles = carIds.filter(
  car => car.style === 'convertible'
);
console.log(convertibles);

/*carIds.forEach( car => console.log( car )); //arrow function//
carIds.forEach(
  (car,index) => console.log( car, index));*/

//Classes

/*class Car {
  constructor(id) {
    this.id = id;
  }
}

let car = new Car(123);
car.id = 456;
console.log( car.id);*/

//Methods

/*class Car {
  constructor(id) {
    this.id = id;
  }
  identify(suffix) {
    return `Car ID: ${this.id} ${suffix}`;
  }
}
let car = new Car(123);
console.log( car.identify('!!!'));*/

//Inheritance

/*class Vehicle {
  constructor() {
    this.type = 'car';
  }
  start() {
    return `Starting: ${this.type}`;
  }
}

class Car extends Vehicle {
    start() {
      return 'in Car start ' + super.start();
    }
}*/

/*try {
let car = null;
}
catch(error) {
console.log('error: ', error);
}
console.log('this always executes');*/

/*try {
  // code here...
  throw new Error('my custom error');
}

catch(error) {
  console.log('error: ', error);

}
finally {
  console.log('this always executes');
}*/

/*let promise = new Promise(
  function(resolve, reject) {
    setTimeout(reject, 100, 'someValue');
  }
);
promise.then(
  value => console.log('fulfilled: ' + value),
  error => console.log('rejected: ' + error)
);*/

/*import $ from 'jquery';

let promise = $.get('http://5b32a4fd82407e001413f1df.mock.api.io/api/v1/users');

promise.then(
  data => console.log('success: ', data),
  error => console.log('error: ',error)
);*/

import $ from 'jquery';

let form = document.getElementById('user-form');

form.addEventListener('submit', event => {

  let user = form.elements['user'];
  let avatarFile = form.elements ['avatar-file'];

  let posting = {
    user: user.value,
    avatarFile: avatarFile.value
  };

  let promise = $.post(
    
  );
  
  if (user.value.length < 6) {
  userError.textContent = 'User must be more than 6 characters';
  userError.style.color = 'red';
  user.style.borderColor = 'red';
  user.focus();
  //console.log(user.value, avatarFile.value);//
  event.preventDefault();
  }
});

//Simple Switch Example//

function simpleSwitch() {
  let productId = 2;

  switch(productId) {
    case 1:
      console.log("product 1");
      break;
   case 2:
     console.log("product 2");
     break;
   default:
     console.log("Unknown Product");
     break;
  }
}
//Multiple Case Statements//

/*function multipleCase() {
  let color = "Red";

  switch (color) {
    case "Red":
    case "Pink":
      console.log("The color is red");
      break;
    case "Blue":
    case "Light Blue":
    case "Dark Blue":
      console.log("The color is blue");
      break;
    case "Gray":
    case "Grey":
      console.log("The color is grey");
      break;
    default:
      console.log("Unknown color");
      break;
  }
}
// Why is it important to ADD a break?//
//Lets see what happens when you don't add a break in a switch statement//

function forgetABreak() {
  let productId = 2;
  
  switch (productId) {
    case 1:
      console.log("HL Road Frame - Black, 58");
      break;
    case 2:
      console.log("Sport-100 Helmet, Red");
    case 3:
      console.log("Mountain Bike Socks, M");
      break;
    default:
      console.log("Unknown product");
      break;
      }
  }*/

  //Break and Continue Statements//

  let _products = [
    {
      "productID": 680,
      "name": "HL Road Frame - Black, 58",
      "productNumber": "FR-R92B-58",
      "color": "Black",
      "standardCost": 1059.31,
      "listPrice": 1431.50
    },
    {
      "productID": 707,
      "name": "Sport-100 Helmet, Red",
      "productNumber": "SO-B909-M",
      "color": "White",
      "standardCost": 13.08,
      "listPrice": 34.99
    },
    {
      "productID": 709,
      "name": "Mountain Bike Socks, M",
      "productNumber": "SO-B909-M",
      "color": "White",
      "standardCost": 3.3963,
      "listPrice": 9.50
    }
  ];

  function breakSample() {
    for (const item of _products) {
      if (item.standardCost < 20) {
        break;
      }
      console.log(JSON.stringify(item));
    }
  }

  function continueSample() {
    for (const item of _products) {
      if (item.standardCost > 1000){
        continue;
      }
      console.log(JSON.stringify(item));
    }
  }

  //Labeled Statement - Not recommended for use!!!//

  function labelSample() {
    even:
    for (let index = 1; index <= 10; index++) {
      continue even;
    }
    console.log(index);
  }

// Math and Comparison Operators//

function mathSample() {
  let price = 200;
  let result = 0;

  console.log("price = " + price.toString());
//Addition
  result = price + 100;
  console.log("price + 100 =" + result.toString());

// Subtraction
  result = price - 10;
  console.log("price - 10 = " + result.toString());

// Multiplication 
  result = price * 2;
  console.log("price * 2 = " + result.toString());

// Division
  result = price / 2;
  console.log("price * 2 = " + result.toString());

// Exponentiation
result = price ** 2;
console.log("price ** 2 = " + result.toString());

// Modulus
result = price % 3;
console.log("price % 3 = " + result.toString());

// Increment
result = price++;
console.log("result = price++ = " + result.toString());
console.log("price = " + result.toString());
result = ++price;
console.log("result = ++price = " + result.toString());

// Decrement
result = price++;
console.log("result = price-- = " + result.toString());
console.log("price = " + result.toString());
result = ++price;
console.log("result = --price = " + result.toString());
}

// Assignment Operators //

function assignmentSample() {
  let price = 200;
  console.log("price = " + price.toString());

  // Addition //
  price += 100;
  console.log("price += 100 = " + price.toString());

  // Subtraction //
  price -= 100;
  console.log("price -= 100 = " +price.toString());

  // Multiplication//
  price *+ 2;
  console.log("price *= 2 = " + price.toString());

  // Division //
  price /= 2;
  console.log("price /= 2 = " + price.toString());
  
} 