const months = [
  { name: { en: 'January', nl: 'januari', ar: 'كانون الثاني' }, days: 31 },
  { name: { en: 'February', nl: 'februari', ar: 'شباط' }, days: 28 },
  { name: { en: 'March', nl: 'maart', ar: 'آذار' }, days: 31 },
  { name: { en: 'April', nl: 'april', ar: 'نيسان' }, days: 30 },
  { name: { en: 'May', nl: 'mei', ar: 'أيار' }, days: 31 },
  { name: { en: 'June', nl: 'juni', ar: 'حزيران' }, days: 30 },
  { name: { en: 'July', nl: 'juli', ar: 'تموز' }, days: 31 },
  { name: { en: 'August', nl: 'augustus', ar: 'آب' }, days: 31 },
  { name: { en: 'September', nl: 'september', ar: 'أيلول' }, days: 30 },
  { name: { en: 'October', nl: 'oktober', ar: 'تشرين الأول' }, days: 31 },
  { name: { en: 'November', nl: 'november', ar: 'تشرين الثاني' }, days: 30 },
  { name: { en: 'December', nl: 'december', ar: 'كانون الأول' }, days: 31 },
];

const language = 'nl';

// Print out the month names and their durations
for (let index = 0; index < months.length; index++) {
  const month = months[index];
  console.log(month.name[language], 'has', month.days, 'days');
}

// Make sure that the number of days of the 12 months
// add up to 365.
let yearLength = 0;

for (const month of months) {
  yearLength += month.days;
}

if (yearLength === 365) {
  console.log('Yep, confirming that the months add up to 365');
} else {
  console.log('Oh, no! There must be some mistake! I expected 365 but got:', yearLength);
}

// Print out only the month with 31 days
console.log('These are the months with 31 days:');
for (let index = 0; index < months.length; index += 1) {
  const month = months[index];
  if (month.days === 31) {
    console.log(month.name[language], 'has 31 days');
  }
}

// Create a new array of months that have an 'r' in the name
console.log('In these months you are more likely to catch a cold:');
const coldCatchMonths = [];
for (let i = 0; i < months.length; i++) {
  const month = months[i];
  if (month.name.en.includes('r') || month.name.en.includes('R')) {
    coldCatchMonths.push(month);
  }
}
console.log(coldCatchMonths);

function filterMonthsByLetter(letter) {
  letter = letter.toUpperCase();
  const filteredMonths = [];
  for (let i = 0; i < months.length; i++) {
    const month = months[i];
    const upperName = month.name.en.toUpperCase();
    if (upperName.includes(letter)) {
      filteredMonths.push(month);
    }
  }
  return filteredMonths;
}

const monthsWithLetterO = filterMonthsByLetter('O');
console.log('The months containing the letter O are:');
console.log(monthsWithLetterO);

function filterMonthsByLetter2(letter) {
  letter = letter.toUpperCase();
  const filteredMonths = [];
  for (const month of months) {
    const upperName = month.name.en.toUpperCase();
    if (upperName.includes(letter)) {
      filteredMonths.push(month.name);
    }
  }
  return filteredMonths;
}

const monthsWithLetterO2 = filterMonthsByLetter2('O');
console.log('The months containing the letter O are:');
console.log(monthsWithLetterO2);
