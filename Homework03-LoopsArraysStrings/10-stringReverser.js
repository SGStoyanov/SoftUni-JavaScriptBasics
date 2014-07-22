//Problem 10.	Reverse String
//Write a JavaScript function reverseString(value) that reverses string and returns it. Write JS program stringReverser.js that invokes your
//function with the sample input data below and prints the output at the console.

    function reverseString(str) {

    var strAsArray = str.split('');
    strAsArray.reverse();

    return strAsArray.join('');
}

console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));