'use strict';

let num = 0;
let result = 0;

function square() {
  result = num * num;
}

num = 5;
square();
console.log(result);
