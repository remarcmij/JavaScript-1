'use strict';

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const person = new Person('Maartje', 'Kruijt');

console.log(person);
