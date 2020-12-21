import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('Hello World!!!!!!');

const carId= 10;
console.log(carId);

/*let i=0;
for (; i<12; i++) {
  if (i === 8) {
    break;
  }
}

console.log(i);*/

for (let i=0; i<5; i++) {
  if (i === 3) 
    continue;
    console.log(i);
  }
