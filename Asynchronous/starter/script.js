'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////
// // https://restcountries.com/v2/

const renderCountry = function (data, className = '') {
  const html = ` <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// // const getCountryAndNeighbour = function (country) {
// //   //AJAX call country 1
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v2/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     console.log(this.responseText);

// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     //Render country 1
// //     renderCountry(data);

// //     //Get neighbour Country(2)
// //     const neighbour = data.borders?.[0];

// //     if (!neighbour) return;

// //     //AJAX call country2
// //     const request2 = new XMLHttpRequest();
// //     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
// //     request2.send();

// //     request2.addEventListener('load', function () {
// //       const data2 = JSON.parse(this.responseText);
// //       console.log(data2);

// //       renderCountry(data2, 'neighbour');
// //     });
// //   });
// // };

// // getCountryAndNeighbour('portugal');

// // const request = new XMLHttpRequest();
// // request.open('GET', `https://restcountries.com/v2/name/${country}`);
// // request.send();

// // const request = fetch('https://restcountries.com/v2/name/portugal');
// // console.log(request);

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0]?.borders?.[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       //Country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`something went wrong ${err.message}, Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });
// getCountryData('australia');

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];

//       const neighbour = 'dafds';
//       if (!neighbour) return;

//       //Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`something went wrong ${err.message}, Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });
// // getCountryData('dafdsfsd');

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000; i++) {}
//   console.log(res);
// });

// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening!');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN!');
//     } else {
//       reject(new Error('You lost your money'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// //timer doesnt fail so i don't need to write reject

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 second passed');
//     return wait(1);
//   })

//   .then(() => console.log('5 second passed'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('abc')).catch(x => console.error(x));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     //Geolocation
//     const pos = await getPosition();

//     const { latitude: lat, longtitude: lng } = pos.coords;
//     //Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error(`Problem getting location data`);
//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     //Country data
//     // fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
//     //   console.log(res)
//     // );
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error(`Problem getting location data`);

//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err}`);
//     renderError(`something went wrong! ${err.message}`);
//   }
// };

// whereAmI();
// whereAmI();
// whereAmI();

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

// console.log([data1.capital, data2.capital, data3.capital]);
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');
