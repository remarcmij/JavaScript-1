'use strict';

console.log('BEFORE loop');

let i = 0;

while (i < 5) {
  console.log('INSIDE loop', i);
  i = i + 1;
}

console.log('AFTER loop');
