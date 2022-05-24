let array = [1, 2, 3, 4, 5];

// let result = array.forEach((item, index) => {
//   console.log(index);
// });

let resultMap = array.map((item, index) => {
  return item * 2;
});

let resultFilter = array.filter((item, index) => {
  if (item % 2 === 0) {
    return true;
  }
});

console.log(array);
console.log(resultMap);
console.log(resultFilter);
