const MONTHS = [
  { name: { en: 'January', nl: 'januari' }, days: 31 },
  { name: { en: 'February', nl: 'februari' }, days: 28 },
  { name: { en: 'March', nl: 'maart' }, days: 31 },
  { name: { en: 'April', nl: 'april' }, days: 30 },
  { name: { en: 'May', nl: 'mei' }, days: 31 },
  { name: { en: 'June', nl: 'juni' }, days: 30 },
  { name: { en: 'July', nl: 'juli' }, days: 31 },
  { name: { en: 'August', nl: 'augustus' }, days: 31 },
  { name: { en: 'September', nl: 'september' }, days: 30 },
  { name: { en: 'October', nl: 'oktober' }, days: 31 },
  { name: { en: 'November', nl: 'november' }, days: 30 },
  { name: { en: 'December', nl: 'december' }, days: 31 }
];

const LANGUAGE = 'en';

// Create a new array of months that have an 'r' in the name
console.log('In these months with an R in the name you are more likely to catch a cold:');
const coldCatchMonths = [];
for (let i = 0; i < MONTHS.length; i++) {
  const name = MONTHS[i].name[LANGUAGE];
  if (name.includes('r') || name.includes('R')) {
    coldCatchMonths.push(name);
  }
}
console.log(coldCatchMonths);
