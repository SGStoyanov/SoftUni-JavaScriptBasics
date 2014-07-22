//Problem 6.	Maximal Sequence
//Write a JavaScript function findMaxSequence(value) that finds the maximal sequence of equal elements in an array and returns the result as an array.
//If there is more than one sequence with the same maximal length, print the rightmost one. Write JS program sequenceFinder.js that invokes your function
//with the sample input data below and prints the output at the console.

function findMaxSequence (arr) {

    var tempLength = 0;
    var length = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            tempLength++;
            var index = arr[i];
            if (tempLength > length) {
                length = tempLength;
            }
        }
        else {
            tempLength = 0;
        }
    }

    var sequence = [];
    for (var i = 0; i <= length; i++) { //create a new array and insert the same element as many times as the longest sequence of symbols
        sequence[i] = index;
    }

    return sequence;
}

console.log(findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]));
console.log(findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']));