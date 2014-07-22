// Problem 1.	Number Checker
//Write a JavaScript function printNumbers(n) that accepts as parameter integer n. The function finds all integer numbers from 1 to n that are
// not divisible by 4 or by 5. Write a JS program numberChecker.js that invokes your function with the sample input data below and prints the output
// at the console.

    function printNumbers(num) {
    var numbers = [];
    if (num > 0) {
        for (var i = 1; i< num; i++) {
            if ((i % 4 != 0) && (i % 5 != 0)) {
                numbers.push(i);
            }
        }
        return numbers;
    } else {
        return "no";
    }

}

console.log(printNumbers(20));
console.log(printNumbers(-5));
console.log(printNumbers(13));