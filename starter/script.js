'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive:D');

// const interface = 'Audio';
// const private = 543;
// const if = 23;

function logger() {
    console.log('My name is Jonas');
}
// calling,running,invoking function
logger();
logger();
logger();

function fruitsProcessor(apples, oranges){
   
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitsProcessor(5, 0); //arguments
console.log(applejuice);
console.log(fruitsProcessor(5, 0));

const appleOrangeJuice = fruitsProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');