'use strict';

function celsiusToFahrenheit(degreesC) {
  return degreesC * 9 / 5 + 32;
}

const tempC = 37;
const tempF = celsiusToFahrenheit(tempC);

console.log(tempC + '°C = ' + tempF + '°F');
