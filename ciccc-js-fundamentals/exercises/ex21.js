/*
Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array.
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
TIP: The 1st element of any array has an index of 0.
Afterwards, print out the prices array to the console.
*/

var prices = [1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.0];
prices[0] = 0;
prices[2] = 0;
prices[6] = 0;
// prices.splice(0, 1, 0);
// prices.splice(2, 1, 0);
// prices.splice(6, 1, 0);
console.log(prices);
