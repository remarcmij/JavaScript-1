'use strict';

const hyfModule = 'JavaScript-1';

switch (hyfModule) {
  case 'HTML/CSS':
    console.log('In this module you will learn HTML and CSS.');
    break;
  case 'JavaScript-1':
    console.log('In this module you will learn Git and JavaScript basics.');
    break;
  case 'JavaScript-2':
    console.log('In this module you will learn about JavaScript in the browser with HTML and CSS.');
    break;
  case 'JavaScript-3':
    console.log('In this module you will learn about Async and API calls.');
    break;
  case 'Node':
    console.log('This module is about building server and CLI applications using Node.');
    break;
  case 'Database':
    console.log('In this module is about Relational and Non-Relational Data and Database Systems.');
    break;
  case 'React':
    console.log('In this module you will to build Single Page Applications using React.');
    break;
  case 'Project':
    console.log('In this final module you will do your graduation project.');
    break;
  default:
    console.log('This module is unknown: ' + hyfModule);
}

