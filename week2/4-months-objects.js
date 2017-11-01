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
  { name: 'December', days: 31 },
];

// Print out the month names and their durations
for (let index = 0; index < months.length; index++) {
  console.log(months[index].name, 'has', months[index].days, 'days');
}

// Make sure that the number of days of the 12 months
// add up to 365.
let yearLength = 0;

for (let index = 0; index < months.length; index += 1) {
  yearLength += months[index].days;
}

if (yearLength === 365) {
  console.log('Yep, confirming that the months add up to 365');
} else {
  console.log('Oh, no! There must be some mistake! I expected 365 but got:', yearLength);
}

// Print out only the month with 31 days
console.log('These are the months with 31 days:');
for (let index = 0; index < months.length; index += 1) {
  if (months[index].days === 31) {
    console.log(months[index].name, 'has 31 days');
  }
}

