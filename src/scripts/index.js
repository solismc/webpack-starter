import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
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

  if (5 === 5 && 6 === 6) {
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
startCar(123);
//Override is not displayed because it is out of scope. console.log is outside the nested curly braces.//

//Block Scope// -- Only Applies to LET, not to VAR

let message = 'Outside';
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

let app = (function() {
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

let o = {
  carId: 123,
  getId: function(prefix) {
    return prefix + this.carId;
  }
};
let newCar = { carId: 456 };
console.log( o.getId.apply(newCar, ['ID: ']));

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

class Car {
  constructor(id) {
    this.id = id;
  }
  identify(suffix) {
    return `Car ID: ${this.id} ${suffix}`;
  }
}
let car = new Car(123);
console.log( car.identify('!!!'));