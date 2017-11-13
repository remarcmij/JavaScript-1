
// Q1
console.log('Hello World');
console.log("مرحبا العالم ");
console.log("Hallo Wereld");

// Q2
console.log('I\'m awesome');
console.log("I'm awesome");
console.log(`I'm awesome`);

//Q3
let x;
console.log('x is undefined');
console.log(x);
x = 7;
console.log(x);
console.log('the value of x will be: 7');

//Q4
let y = "Youtube";
console.log('the value of y will be: Youtube');
console.log(y);
y = "Yoga";
console.log('the value of y will be: Yoga');
console.log(y);

//Q5
const z = 7.25;
console.log(z);
const a = Math.round(z);
console.log(a);
const biggest = Math.max(z, a);
console.log(biggest);

//Q6
let emptyArray = [];
console.log("It'll give me only brackets without values");
console.log(emptyArray);
let myFavoriteAnimals = ['cat', 'dog', 'bunny', 'lion'];
console.log(myFavoriteAnimals);
myFavoriteAnimals.push('baby pig');
console.log(myFavoriteAnimals);

//Q7
let myString = "this,is,a,test";
console.log(myString);
let theLength = myString.length;
console.log(theLength);

//Q8
let theFirst = 10;
let theSecond = "Hello";
let theThird = 25;
let theFourth = "Google";

console.log('The value of my variable theFirst is: ' + theFirst);
console.log('The value of my variable theSecond is: ' + theSecond);
console.log('The value of my variable theThird is: ' + theThird);
console.log('The value of my variable theFourth is: ' + theFourth);

console.log("The value's of my variables are string and number ");

console.log(typeof theFirst);
console.log(typeof theSecond);
console.log(typeof theThird);
console.log(typeof theFourth);

// if statement that return TRUE because the variables have the same type.
if (typeof theFirst === typeof theThird) {
    console.log("SAME TYPE");
}
else {
    console.log("DIFFERENT TYPE");
}

//  if statement that return FALSE because the variables doesn't have the same type.
if (typeof theFirst === typeof theSecond) {
    console.log("SAME TYPE");
}
else {
    console.log("DIFFERENT TYPE");
}

//Q9

let num = 7;
let remainder = num % 3;
console.log(remainder);
console.log("This operator means that the numbers when you divide them by another number the rest would be 0 or more");
console.log("For instance if we change 3 with 5 the then the rest would be 2");

//Q10
const mixedTypes = [1, true, 'some string'];
console.log(mixedTypes);
console.log("Q1 >> yes we can store numbers and strings in a array")

if (6 / 0 === 10 / 0) {

    console.log("True");
}
else {
    console.log("False");
}

console.log(6 / 0 === 10 / 0);
console.log("we will get her True because both number don't have rest, the rest is 0 ");




