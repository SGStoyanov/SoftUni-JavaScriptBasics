//Problem 2.	N-th Digit of Number
//Write a JavaScript function findNthDigit(arr) that accepts as a parameter an array of two numbers num and n and returns the n-th digit of given
// decimal number num counted from right to left. Return undefined when the number does not have n-th digit. Write a JS program nthDigitOfNumber.js
// that invokes your function with the sample input data below and prints the output at the console.

function findNthDigit(arr) {

    var n = arr[0];
    var num = Math.abs(arr[1]);

    while (num % 1 != 0) {
        num *= 10;
    }

    if (num / Math.pow(10, n-1) >= 1) {
        var neededDigit = Math.floor(num % Math.pow(10, n)/Math.pow(10, n-1));
        return neededDigit;
    } else {
        return "The number doesn’t have " + n + " digits";
    }

}

console.log(findNthDigit([1, 6]));
console.log(findNthDigit([2, -55]));
console.log(findNthDigit([6, 923456]));
console.log(findNthDigit([3, 1451.78]));
console.log(findNthDigit([6, 888.88]));