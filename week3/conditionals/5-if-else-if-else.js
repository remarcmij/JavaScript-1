'use strict';

const distance = 1;

if (distance < 1) {
  console.log('I will walk.');
} else if (distance < 10) {
  console.log('I will take the bike.');
} else if (distance < 50) {
  console.log('I will go by car.');
} else {
  console.log('I will take the train.');
}

console.log('done');
