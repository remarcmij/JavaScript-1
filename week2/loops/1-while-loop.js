'use strict';

console.log('BEFORE loop');

let index = 0;

while (index < 5) {
  console.log('INSIDE loop', index);
  index = index + 1;
}

console.log('AFTER loop');
