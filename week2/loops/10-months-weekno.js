'use strict';
const months = [
  { name: 'January', days: 31 },
  { name: 'February', days: 28 },
  { name: 'March', days: 31 },
  { name: 'April', days: 30 },
  { name: 'May', days: 31 },
  { name: 'June', days: 30 },
  { name: 'July', days: 31 },
  { name: 'August', days: 31 },
  { name: 'September', days: 30 },
  { name: 'October', days: 31 },
  { name: 'November', days: 30 },
  { name: 'December', days: 31 }
];

function weekNumberToDayNumber(weekNumber) {
  return (weekNumber - 1) * 7 + 1;
}

console.log(weekNumberToDayNumber(2));

function findMonthForDay(dayNumber) {
  let daysTotal = 0;
  for (let i = 0; i < months.length; i++) {
    daysTotal += months[i].days;
    if (daysTotal >= dayNumber) {
      return months[i].name;
    }
  }
  return 'error';
}

console.log(findMonthForDay(32));

console.log('Week 45 starts in the month ' + findMonthForDay(weekNumberToDayNumber(45)));
