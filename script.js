'use strict';
const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  this.calAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const juyeon = new Person('Juyeon', 1992);
console.log(juyeon); //Person {firstName: 'Juyeon', birthYear: 1992}

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. functin automatically return {}

const anna = new Person('Anna', 1995);
const maisy = new Person('Maisy', 1993);
console.log(anna, maisy);

console.log(juyeon instanceof Person);

//Prototypes
Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(juyeon);

juyeon.calAge(); //46

// Person.prototype.speicies = 'homo sapiens';
// console.log(juyeon.speicies); //homo sapiens
