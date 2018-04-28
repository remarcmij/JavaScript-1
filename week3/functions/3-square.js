'use strict';

// hoisting

console.log(square2(5));

// NOT hoisted
const square1 = function (num) {
  return num * num;
};

// hoisted
function square2(num) {
  return num * num;
}
