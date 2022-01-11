"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive:D');

// const interface = 'Audio';
// const private = 543;
// const if = 23;

// function logger() {
//     console.log('My name is Jonas');
// }
// // calling,running,invoking function
// logger();
// logger();
// logger();

// function fruitsProcessor(apples, oranges){

//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const applejuice = fruitsProcessor(5, 0); //arguments
// console.log(applejuice);
// console.log(fruitsProcessor(5, 0));

// const appleOrangeJuice = fruitsProcessor(2,4);
// console.log(appleOrangeJuice);

// const num = Number('23');

// Function declaration
// const age1 = calcAge1(1991);

// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }

// // Function expression
// const age2 = calcAge2(1991);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// console.log(age1, age2)

//Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Juyeon'));

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitsProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitsProcessor(2,3));
// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName){
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired `);
//         return -1;
//     }

// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael','Stenven','Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length -1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']

// const firstName = 'Jonas';
// const jonas = [firstName,'Lee','2037 - 1991','teacher',friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// function calcAge(birthYear){
//     return 2037 - birthYear;
// }
// const years = [ 1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);

// console.log(age1,age2, age3);

// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])]
// console.log(ages);

// Add elements
// const friends = ['Michael','Steven','Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if(friends.includes('Steven')) {
//     console.log('You have a friend called Steven')
// }

//group together, properties,
//order 별로 상관없음

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Lee',
//     age: 2037-1991,
//     job: 'teacher',
//     friends: ['Michael','Peter','Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
// console.log(interestedIn)

// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request!Choose between firstName, lastName, age, job and friends ')
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@juyeon';
// console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Lee",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//       calcAge: function(birthYear){
//           return 2037 - birthYear;
//       }
//   };
//     calcAge: function () {
//       // console.log(this);
//       return 2037 - this.birthYear;
//     },
//   };
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas['calcAge'](1991));

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

// console.log(jonas.getSummary());

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep = rep++) {
  console.log("Lifting weights repetition 1");
}
