'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this!! We need to use Prototypes and prototypal inheritance
  // this.calAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1.New {} is created
// 2.function is called, this = {} this keyword is set to the new empty object as no.1 this keyword point to this object
// 3.{} linked to prototype (new object linked to prototype)
// 4.function automatically return {} (no.1 object)

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);
console.log(matilda, jack);

const jay = 'jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calAge();
matilda.calAge();
jack.calAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

//Person.prototype is not a prototype of a Person. It is a prototype of linked Objects

Person.prototype.species = 'Homo Spiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

//Second one says false because this property is not really inside of the jonas object. it only has access to it because of prototype of a person
