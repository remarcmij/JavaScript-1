'use strict';

function fullName(firstName, lastName) {
  let result = firstName;
  if (lastName !== undefined) {
    result += ' ' + lastName;
  }
  return result;
}

console.log(fullName('Maartje', 'Kruijt'));
console.log('Sukarno');
