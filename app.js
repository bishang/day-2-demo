'use strict';

var kids = prompt('How many kids does Brian have?');
console.log('Number of kids:', kids);

var hats = prompt('How many hats does Brian have?');
console.log('Number of hats:', hats);

if (kids === '3' || kids === '4') {
  alert('u right');
}

if (kids === '3' && hats.toLowerCase() === 'none') {
  alert('u right again.');
}
