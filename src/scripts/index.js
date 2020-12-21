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


  let year = 1967;
  console.log(year++);
  console.log(year);

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
