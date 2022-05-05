/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.
emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

let ha = '';
const laugh = (count) => {
  for (let i = 1; i <= count; i++) {
    ha += 'ha';
  }
  return ha;
};

const emotions = (emotion, smile) => {
  return `I am ${emotion}, ${smile}!`;
};

console.log(emotions('happy', laugh(6)));
