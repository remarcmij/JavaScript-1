'use strict';

console.log('BEFORE loop');

for (let index = 0; index < 5; index = index + 1) {
  console.log('INSIDE loop', index);
}

console.log('AFTER loop');
