'use strict';

// const flight = 'LH234';
// const juyeon = {
//   name: 'Juyeon Lee',
//   passport: 2343254667,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mrs.' + passenger.name;

//   if (passenger.passport === 2343254667) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, juyeon);
// console.log(flight);
// console.log(juyeon);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('❤');
};
document.body.addEventListener('click', high5);

['juyeon', 'Stephnaie', 'Maisy'].forEach(high5);

//Is the same as doing...
// const flightNum = flight;
// const passenger = juyeon;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(juyeon);
// checkIn(flight, juyeon);
