'use strict';

function reportTime(messagePrefix) {
  const now = new Date();
  console.log(messagePrefix + now.toLocaleTimeString());
}

reportTime('The current time is: ');
