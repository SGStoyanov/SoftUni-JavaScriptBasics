// Problem 8.	* Sum of Two Huge Numbers
// Write a JavaScript function sumTwoHugeNumbers(value) that accepts as parameter an array of the two numbers for summing.
// The input numbers are represented as strings. The result should be printed on the console.

var BigNumber = require('./bignumber.js');

function sumTwoHugeNumbers(numbers) {

    var num1 = BigNumber(numbers[0]);
    var num2 = BigNumber(numbers[1]);

    return num1.plus(num2).toString(10);
}

console.log(sumTwoHugeNumbers(['155', '65']));
console.log(sumTwoHugeNumbers(['123456789', '123456789']));
console.log(sumTwoHugeNumbers(['887987345974539','4582796427862587']));
console.log(sumTwoHugeNumbers(['347135713985789531798031509832579382573195807', '817651358763158761358796358971685973163314321']));