//Problem 15.	Most Frequent Word
//Write a JavaScript function findMostFreqWord(value) that finds the most frequent word in a text and prints it, as well as how many times it
// appears in format "word -> count". Consider any non-letter character as a word separator. Ignore the character casing. If several words have
// the same maximal frequency, print all of them in alphabetical order. Write JS program frequentWord.js that invokes your function with the sample
// input data below and prints the output at the console.

function findMostFreqWord(inputText) {

    var words = inputText.toLowerCase().split(/[\W]+/);

    if (words[words.length - 1] === '') {
        words.pop();
    }

    var results = [],
        i;

    for (i in words) {
        if (words[i] in results) {
            results[words[i]]++;
        } else {
            results[words[i]] = 1;
        }
    }

    var maxCountTimes = 0,
        frequentWords = [],
        key;

    for (key in results) {
        if (maxCountTimes < results[key]) {
            maxCountTimes = results[key];
            frequentWords = [];
            frequentWords.push(key);
        } else if (maxCountTimes === results[key]) {
            frequentWords.push(key);
        }
    }

    frequentWords.sort();

    var outputString = '';

    for (i in frequentWords) {
        outputString += frequentWords[i] + ' -> ' + maxCountTimes + ' times \n'
    }

    return outputString;
}

console.log(findMostFreqWord('in the middle of the night'));
console.log(findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.'));
console.log(findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'));