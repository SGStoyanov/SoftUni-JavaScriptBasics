//Problem 5.	Reverse Every Word in a String
//Write a JavaScript function reverseWordsInString(str) to reverse the characters of every word in the string but leaves the words in the same order.
// Words are considered to be sequences of characters separated by spaces. Write a JavaScript program reverseWords.js that prints on the console the output

function reverseWordsInString(str) {

    var words = str.split(" ");
    var result = "";

    for (var i = 0; i < words.length; i++) {
        result += words[i].split("").reverse().join("") + " ";
    }
    return result;
}

console.log(reverseWordsInString("Hello, how are you."));