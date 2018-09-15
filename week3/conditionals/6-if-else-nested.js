'use strict';

const distance = 1;
const raining = false;

if (distance < 10) {
  if (raining) {
    console.log('I will go public transportation.');
  } else {
    console.log('I will walk.');
  }
} else {
  console.log('I will go by car.');
}

console.log('done');
