'use strict';

function pickNumberBetweenZeroAnd(num) {
  return Math.floor(Math.random() * num);
}

console.log(pickNumberBetweenZeroAnd(25));
