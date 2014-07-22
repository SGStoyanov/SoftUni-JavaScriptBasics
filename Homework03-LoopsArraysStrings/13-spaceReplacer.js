//Problem 13.	Replace the White-Spaces
//Write a JavaScript function replaceSpaces(value) that replaces the white-space characters in a text with &nbsp;.
// Write JS program spaceReplacer.js that invokes your function with the sample input data below and prints the output at the console.

function replaceSpaces(str) {

    return str.replace(/\s/g,''); // the Regular expression searches globally (/g) for all blank spaces (including \t\n\r and ' ') and replaces them with ''
}

console.log(replaceSpaces('But you were living in another world tryin\' to get your message through'));
console.log(replaceSpaces('And this RegEx methods are aweeesome!'))