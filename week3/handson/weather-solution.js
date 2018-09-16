'use strict';

// Weather forecast NYC 16-30 Sept 2018

const temperaturesF = [82, 80, 79, 80, 72, 82, 74, 74, 70, 66, 73, 72, 71, 70, 68];

// Convert °F to °C
function f2c(tempF) {
  return (tempF - 32) * 5 / 9;
  // your code here
}

// Convert an array of temperatures from °F to °C
// and return the result
function convertArrayF2C(temperatures) {
  const converted = [];
  for (let i = 0; i < temperatures.length; i++) {
    const tempC = f2c(temperatures[i]);
    converted.push(tempC);
  }
  return converted;
}

// Find and return the average value in an array
function getAvgValue(values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum / values.length;
}

const temperaturesC = convertArrayF2C(temperaturesF);

console.log('The average temperature in NYC is expected to be', getAvgValue(temperaturesC));
