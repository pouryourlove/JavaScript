// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "yellow";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "brown";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext();
//   }, delay);
// };

// delayedColorChange("red", 1000, () => {
//   delayedColorChange("orange", 1000, () => {
//     delayedColorChange("yellow", 1000, () => {
//       delayedColorChange("green", 1000);
//     });
//   });
// });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("white", 1000))
//   .then(() => delayedColorChange("yellow", 1000));

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("white", 1000);
  await delayedColorChange("yellow", 1000);
}
