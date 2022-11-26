// 'use strict';
// const Person = function (firstName, birthYear) {
//   //Instance Properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Never do this
//   //   this.calAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const juyeon = new Person('Juyeon', 1992);
// console.log(juyeon); //Person {firstName: 'Juyeon', birthYear: 1992}

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. functin automatically return {}

// const anna = new Person('Anna', 1995);
// const maisy = new Person('Maisy', 1993);
// console.log(anna, maisy);

// console.log(juyeon instanceof Person);

// //Prototypes
// Person.prototype.calAge = function () {
//   console.log(2037 - this.birthYear);
// };
// console.log(juyeon);

// juyeon.calAge(); //46

// Person.prototype.speicies = 'homo sapiens';
// console.log(juyeon.speicies); //homo sapiens

// console.log(juyeon.hasOwnProperty('firstName'));
// console.log(juyeon.hasOwnProperty('species'));

// console.log(juyeon.__proto__);
// //Person.prototype
// console.log(juyeon.__proto__.__proto__);
// //Object.prototype(top of prototype chain)
// console.log(juyeon.__proto__.__proto__.__proto__); //null

// console.dir(Person.prototype.constructor);
// //constructor property points back at person

// const arr = [1, 2, 2, 4, 4, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// //the prototype property of the constructor is gonna be the prototype of all the objects created by that constructor.
// console.log(arr.__proto__.__proto__);
// //=>Object.prototype

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// class expression
// const PersonCl = class {};
//class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     (this.firstName = firstName), (this.birthYear = birthYear);
//   }
//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// const juyeon = new PersonCl('Juyeon', 1992);
// console.log(juyeon);
// juyeon.calcAge();

// console.log(juyeon.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// juyeon.greet();

//1. Classes are not hoisted even if they are class declarations. function declarations are hoisted which means we can use them before they are declared in the code. But with classes, that doesn't work.
//2. Classes are first-class citizens. we can pass them into functions also return them from functions.That is because classes are really just a special kind of function behind the scenes.
//3. Classes are executed in strict mode.

//this is the method we want the person object to inherit
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const juyeon = Object.create(PersonProto);
// console.log(juyeon);
// juyeon.name = 'Juyeon';
// juyeon.birthYear = 1992;
// juyeon.calcAge();

// // constructor - it automatically sets the prototype of the instances to the constructors prototype property.
// //We manually set the prototype of the juyeon object to the PersonProto object.

// console.log(juyeon.__proto__ === PersonProto);

// const maisy = object.create(PersonProto);
// maisy.init('maisy', 1993);
// maisy.calcAge();

//Linking prototypes
const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  console.log(this);
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
//usually child one has additional property which is course in this case

//Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const zzong = new Student('Zzong', 2012, 'Computre Science');
console.log(zzong);
zzong.introduce();
zzong.calcAge();

console.log(zzong.__proto__);
console.log(zzong.__proto__.__proto__);
console.log(zzong instanceof Object);

console.log(zzong instanceof Student);
console.log(zzong instanceof Person);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
