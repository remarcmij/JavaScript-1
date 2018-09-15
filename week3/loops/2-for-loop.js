'use strict';

console.log('BEFORE loop');

for (let i = 0; i < 5; i = i + 1) {
  console.log('INSIDE loop', i);
}

console.log('AFTER loop');
