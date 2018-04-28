'use strict';

function reportTime(reporter) {
  const now = new Date();
  reporter('The current time is: ' + now.toLocaleTimeString());
}

function writeToLog(message) {
  console.log(message);
}

function writeAllCapsToLog(message) {
  writeToLog(message.toUpperCase());
}

reportTime(writeToLog);
reportTime(writeAllCapsToLog);
