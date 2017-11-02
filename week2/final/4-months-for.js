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

// Print out the month names and their durations using a for loop
for (let index = 0; index < monthNames.length; index++) {
  console.log(monthNames[index], 'has', monthDays[index], 'days');
}

// Filter out and print only the months with 31 days
console.log('These are the long months:');
for (let index = 0; index < monthDays.length; index++) {
  if (monthDays[index] === 31) {
    console.log(monthNames[index]);
  }
}