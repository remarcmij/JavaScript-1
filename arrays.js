'use strict'

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

favoriteAnimals.push("turtle");

console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");


console.log("The new value of the array is the initial value with two new elements added blowfish ,meerkat ,capricorn ,giraffe ,turtle");

console.log(favoriteAnimals);

console.log("The array has a length of " + favoriteAnimals.length);

favoriteAnimals.splice(3,1);

console.log(favoriteAnimals);

console.log("The item you're looking for is at index : " + favoriteAnimals.indexOf("meerkat"));

// we can use the property typeOf to locate a certain element within an array *Can also be used in strings


favoriteAnimals.splice(1, 1);


console.log(favoriteAnimals);