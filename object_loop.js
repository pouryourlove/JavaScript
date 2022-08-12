var memberArray = ['egoing', 'graphittie', 'leezche'];
console.group('array loop');
var i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i = i + 1;
}
console.groupEnd('array loop');

var memberObject = {
  manager: 'egoing',
  developer: 'graphittie',
  designer: 'leezche',
};

console.group('object loop');

for (member in memberObject) {
  console.log(member, memberObject[member]);
}

console.groupEnd('object loop');
