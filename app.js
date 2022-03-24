// ==============
// FUNCTION SCOPE
// ==============
// let totalEggs = 0;
// function collectEggs() {
//   totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// const bird = "Scarlet Macaw";
// function birdWatch() {
//   const bird = "Great Blue Heron";
//   console.log(bird);
// }
// birdWatch();

// ==============
// BLOCK SCOPE
// ==============
// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14159;
//   let msg = "HIII!";
// }
// console.log(radius);
// console.log(msg);

// for (let i = 0; i < 5; i++) {
//   let msg = "ASKLDJAKLSJD";
//   console.log(msg);
// }
// console.log(msg);
// console.log(i);

// ==============
// LEXICAL SCOPE
// ==============

// function bankRobbery() {
//   const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batwoman"];
//   function cryForHelp() {
//     let color = "purple";
//     function inner() {
//       for (let hero of heroes) {
//         console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
//       }
//     }
//     inner();
//   }
//   cryForHelp();
// }

// ==============
// function expression
// ==============

// const add = function (x, y) {
//   return x + y;
// };
// function doesn't have name
// functions are values in javascript

// ==============
// Higher order function
// ==============

// 1) functions as arguments

// function callTwice(func) {
//   func();
//   func();
// }

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDie);

// 2) returning functions

// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// Method

// const myMath = {
//   PI: 3.14159,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   },
// };

const myMath = {
  PI: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

const dog = {
  name: "zzong",
  color: "white and brown",
  breed: "mixed",
  woof() {
    console.log("woof woof woof");
  },
};
