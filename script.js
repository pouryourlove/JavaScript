'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calAge = function () {
    console.log(2037 - this.birthYear);
  };
};

//Never do this!! We need to use Prototypes and prototypal inheritance
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// 1.New {} is created
// 2.function is called, this = {}
// 3.{} linked to prototype
// 4.function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);
console.log(matilda, jack);

const jay = 'jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);
