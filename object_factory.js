var kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

var lee = {
  name: 'lee',
  first: 10,
  second: 10,
  sum: function () {
    return this.first + this.second;
  },
};
// console.log('kim.sum(kim.first,kim.second)', kim.sum(kim.first, kim.second));
console.log('kim.sum(kim.first,kim.second)', kim.sum());
console.log('lee.sum(kim.first,kim.second)', lee.sum());

//위의 객체 형태를 수정하면 밑에 아이도수동으로 수정해야함
// 이런 코드가 1억개있다고 생각하면 불가능..

var d1 = new Date('2019-4-10');
console.log('d1.getFullYear()', d1.getFullYear());
