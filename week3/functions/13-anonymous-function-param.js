'use strict';

function reportTime(reporter) {
  const now = new Date();
  reporter('The current time is: ' + now.toLocaleTimeString());
}

reportTime(function (message) {
  console.log(message);
});
