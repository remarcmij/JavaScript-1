'use strict';
// {
function sayHello(firstName, lastName) {
  // let firstName = ...
  // let lastName = ...
  const hello = 'Bonjour';
  console.log(hello + ' ' + firstName + ' ' + lastName);
}

sayHello('Maartje', 'Kruijt');

const myFirstName = 'Jim';
const myLastName = 'Cramer';

sayHello(myFirstName, myLastName);

var otherFirstName = 'Daniela';
var otherLastName = 'Olaru';

sayHello(otherFirstName, otherLastName);

console.log('done');
// }
