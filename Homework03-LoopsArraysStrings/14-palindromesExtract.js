// Problem 14.	Palindromes
//Write a JavaScript function findPalindromes(value) that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
//Write JS program palindromesExtract.js that invokes your function with the sample input data below and prints the output at the console.

function findPalindromes(inputStr) {

    var palindromes = [];
    var inputs = inputStr.split(/[^a-zA-Z]+/);

    for (var i = 0; i < inputs.length - 1; i++) {
        var word = inputs[i];
        var reversedWord = '';

        for (var j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }

        if (reversedWord.toLowerCase() === word.toLowerCase()) {
            palindromes.push(reversedWord.toLowerCase());
        }
    }

    var output = palindromes.join(', ');
    console.log(output);
}

findPalindromes('There is a man, his name was Bob.');