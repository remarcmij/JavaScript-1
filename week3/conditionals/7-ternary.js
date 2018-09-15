'use strict';

const age = 0.5;

// if-then-else

let carCondition;

if (age < 1) {
  carCondition = 'new';
} else {
  carCondition = 'used';
}

console.log('carCondition :', carCondition);


// ternary operator

const bikeCondition = age < 1 ? 'new' : 'used';

console.log('bikeCondition :', bikeCondition);
