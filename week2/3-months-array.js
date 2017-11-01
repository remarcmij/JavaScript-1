const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const monthDays = [
  31, // January
  28, // February
  31, // March
  30, // April
  31, // May
  30, // June
  31, // July
  31, // August
  30, // September
  31, // October
  30, // November
  31  // December
];


// Print out the month names and their durations using a while loop
console.log('WHILE loop');
let index = 0;
while (index < monthNames.length) {
  console.log(monthNames[index], 'has', monthDays[index], 'days');
  index += 1;
}

console.log('FOR loop');
// Print out the month names and their durations using a for loop
for (let index = 0; index < monthNames.length; index++) {
  console.log(monthNames[index], 'has', monthDays[index], 'days');
}

// Make sure that the number of days of the 12 months
// add up to 365.
let yearLength = 0;

for (let index = 0; index < monthDays.length; index += 1) {
  yearLength += monthDays[index];
}

if (yearLength === 365) {
  console.log('Yep, confirming that the months add up to 365');
} else {
  console.log('Oh, no! There must be some mistake! I expected 365 but got:', yearLength);
}

// Print out only the month with 31 days
console.log('These are the months with 31 days:');
for (let index = 0; index < monthDays.length; index += 1) {
  if (monthDays[index] === 31) {
    console.log(monthNames[index], 'has 31 days');
  }
}