'use strict';

function makeGreeting(prefix) {
  return function greeting(thingOrPerson) {
    return prefix + ', ' + thingOrPerson + '!';
  };
}

const hello = makeGreeting('Hello');
const goodAfternoon = makeGreeting('Good afternoon');

console.log(hello('students'));
console.log(goodAfternoon('teacher'));
