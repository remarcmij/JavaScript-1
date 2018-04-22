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

  if (months[i] === 'January') {
    days = 31;
  } else if (months[i] === 'February') {
    days = 28;
  } else if (months[i] === 'March') {
    days = 31;
  } else if (months[i] === 'April') {
    days = 30;
  } else if (months[i] === 'May') {
    days = 31;
  } else if (months[i] === 'June') {
    days = 30;
  } else if (months[i] === 'July') {
    days = 31;
  } else if (months[i] === 'August') {
    days = 31;
  } else if (months[i] === 'September') {
    days = 30;
  } else if (months[i] === 'October') {
    days = 31;
  } else if (months[i] === 'November') {
    days = 30;
  } else if (months[i] === 'December') {
    days = 31;
  } else {
    days = -1;
  }

  console.log(months[i], 'has', days, 'days');
}
