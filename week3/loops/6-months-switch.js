'use strict';

const months = [
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


for (let i = 0; i < months.length; i++) {
  let days;

  switch (months[i]) {
    case 'January':
      days = 31;
      break;
    case 'February':
      days = 28;
      break;
    case 'March':
      days = 31;
      break;
    case 'April':
      days = 30;
      break;
    case 'May':
      days = 31;
      break;
    case 'June':
      days = 30;
      break;
    case 'July':
      days = 31;
      break;
    case 'August':
      days = 31;
      break;
    case 'September':
      days = 30;
      break;
    case 'October':
      days = 31;
      break;
    case 'November':
      days = 30;
      break;
    case 'December':
      days = 31;
      break;
    default:
      days = -1;
  }

  console.log(months[i], 'has', days, 'days');
}
