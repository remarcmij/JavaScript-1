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

// Make sure that the number of days of the 12 months
// add up to 365.

let yearLength = 0;
let index = 0;

while (index < monthDays.length) {
  yearLength = yearLength + monthDays[index];
  index = index + 1;
}

if (yearLength === 365) {
  console.log('Yep, confirming that the months add up to 365');
} else {
  console.log('Oh, no! There must be some mistake! I expected 365 but got:', yearLength);
}
