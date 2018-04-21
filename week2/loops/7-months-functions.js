'use strict';
const months = [
  {
    name: {
      en: 'January',
      nl: 'januari'
    },
    days: 31
  },
  {
    name: {
      en: 'February',
      nl: 'februari'
    },
    days: 28
  },
  {
    name: {
      en: 'March',
      nl: 'maart'
    },
    days: 31
  },
  {
    name: {
      en: 'April',
      nl: 'april'
    },
    days: 30
  },
  {
    name: {
      en: 'May',
      nl: 'mei'
    },
    days: 31
  },
  {
    name: {
      en: 'June',
      nl: 'juni'
    },
    days: 30
  },
  {
    name: {
      en: 'July',
      nl: 'juli'
    },
    days: 31
  },
  {
    name: {
      en: 'August',
      nl: 'augustus'
    },
    days: 31
  },
  {
    name: {
      en: 'September',
      nl: 'september'
    },
    days: 30
  },
  {
    name: {
      en: 'October',
      nl: 'oktober'
    },
    days: 31
  },
  {
    name: {
      en: 'November',
      nl: 'november'
    },
    days: 30
  },
  {
    name: {
      en: 'December',
      nl: 'december'
    },
    days: 31
  }
];

function filterMonthsByLetter(months, letter, language) {
  letter = letter.toUpperCase();
  const filteredMonths = [];
  for (let i = 0; i < months.length; i++) {
    const name = months[i].name[language];
    if (name.toUpperCase().includes(letter)) {
      filteredMonths.push(name);
    }
  }
  return filteredMonths;
}

const monthsWithO = filterMonthsByLetter(months, 'O', 'en');
console.log('The months (English) containing the letter O are:');
console.log(monthsWithO);

const monthsWithA = filterMonthsByLetter(months, 'A', 'nl');
console.log('The months (Dutch) containing the letter A are:');
console.log(monthsWithA);
