//Problem 11.	Check the Brackets
//Write a JavaScript function checkBrackets(value) to check if in a given expression the brackets are put correctly. Write JS program bracketsChecker.js
//that invokes your function with the sample input data below and prints the output at the console.

function bracketsChecker(expr) {

    var brackets = 0;

    for (var char in expr) {
        if (expr[char] == '(') {
            brackets++;
        } else if (expr[char] == ')') {
            brackets--;
        }
    }

    if (brackets == 0) {
        return 'correct';
    } else {
        return 'incorrect';
    }
}

console.log(bracketsChecker('( ( a + b ) / 5 – d )'));
console.log(bracketsChecker(') ( a + b ) )'));
console.log(bracketsChecker('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));