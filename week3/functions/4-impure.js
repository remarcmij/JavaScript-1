'use strict';

function pickSomeNumberBetweenZeroAnd(num) {
  return Math.floor(Math.random() * num);
}

console.log(pickSomeNumberBetweenZeroAnd(25));
