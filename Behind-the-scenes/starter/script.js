// 'use strict';

// //Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'jonas';
// let job = 'teacher';
// const year = 1992;

// //Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //Example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this); //undefined
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   // console.log(this); //window object
// };
// calcAge(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); //jonas
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this); //jonas
//     console.log(2037 - this.year);

//     //Solution 1
//     // const self = this; //self or that
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 && this.year <= 1996);
//     // };
//     // isMillenial();

//     // Soulution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet();
// jonas.calcAge();

// //argument keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments); // Uncaught ReferenceError: arguments is not defined
//   return a + b;
// };
// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age); //31
// console.log(oldAge); //30

// const me = {
//   name: 'Juyeon',
//   age: 30,
// };

// const friend = me; //This is how we copy the object
// friend.age = 27;
// console.log('Friend', friend); //{name: 'Juyeon', age: 27}
// console.log('Me', me); // {name: 'Juyeon', age: 27}

//primitive types
// let lastName = 'Lee';
// let oldLastName = lastName;
// lastName = 'Dodd';
// console.log(lastName, oldLastName); //Dodd,Lee

// //reference types
// const juyeon = {
//   firstName: 'Juyeon',
//   lastName: 'Lee',
//   age: 30,
// };
// const marriedJuyeon = juyeon;
// marriedJuyeon.lastName = 'Dodd';
// console.log('Before marriage:', juyeon); //{firstName: 'Juyeon', lastName: 'Dodd', age: 30}
// console.log('After marriage:', marriedJuyeon); //{firstName: 'Juyeon', lastName: 'Dodd', age: 30}

// marriedJuyeon = {};
// //script.js:150 Uncaught TypeError: Assignment to constant variable.

//copying objects
const juyeon2 = {
  firstName: 'Juyeon',
  lastName: 'Lee',
  age: 30,
  family: ['Sangho', 'Doeksil'],
};

const juyeonCopy = Object.assign({}, juyeon2);
juyeonCopy.lastName = 'Dodd';

juyeonCopy.family.push('Maisy');
juyeonCopy.family.push('Zzong');

console.log('Before marriage:', juyeon2);
console.log('After marriage:', juyeonCopy);

// console.log('Before marriage:', juyeon2);
// //{firstName: 'Juyeon', lastName: 'Lee', age: 30}
// console.log('After marriage:', juyeonCopy);
// //{firstName: 'Juyeon', lastName: 'Dodd', age: 30}

//
