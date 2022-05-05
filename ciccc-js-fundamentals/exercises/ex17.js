/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
laugh(3);
Returns: hahaha!
*/
let ha = '';
const laugh = (count) => {
  for (let i = 1; i <= count; i++) {
    ha += 'ha';
  }
  return ha;
};

// laugh(3);
console.log(laugh(10) + '!');
