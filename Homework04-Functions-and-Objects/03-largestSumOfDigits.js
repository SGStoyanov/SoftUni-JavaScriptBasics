// Problem 3.	Number with Largest Sum of Digits
// Write a JavaScript function findLargestBySumOfDigits(nums) that takes as an input a sequence of positive integer numbers and returns the element
// with the largest sum of its digits. The function should take a variable number of arguments. It should return undefined when 0 arguments are passed
// or when some of the arguments is not an integer number. Write a JS program largestSumOfDigits.js that invokes your function with the sample input data
// below and prints its output at the console.

function findLargestSumOfDigits(nums) {
    if (arguments.length < 1) {
        return undefined;
    }
    var maxSum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (parseInt(nums[i]) !== nums[i]) {
            return undefined;
        }
        var currentNum = Math.abs(nums[i]).toString();
        var currentSum = 0;
        for (var j = 0; j < currentNum.length; j++) {
            currentSum += Number(currentNum[j]);
        }
        if (currentSum >= maxSum) {
            var result = nums[i];
            maxSum = currentSum;
        }
    }
    return result;
}
console.log(findLargestSumOfDigits([5, 10, 15, 111]));
console.log(findLargestSumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestSumOfDigits(['hello']));
console.log(findLargestSumOfDigits([5, 3.3]));