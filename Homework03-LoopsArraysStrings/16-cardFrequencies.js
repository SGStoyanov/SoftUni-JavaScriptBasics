//Problem 16.	Cards Frequencies
//Write a JavaScript function findCardFrequency(value) that that accepts the following parameters: array of several cards (face + suit), separated by a space.
//The function calculates and prints at the console the frequency of each card face in format "card_face -> frequency".
//The frequency is calculated by the formula appearances / N and is expressed in percentages with exactly 2 digits after the decimal point.
//The card faces with their frequency should be printed in the order of the card face's first appearance in the input.
//The same card can appear multiple times in the input, but its face should be listed only once in the output. Write JS program cardFrequencies.js
//that invokes your function with the sample input data below and prints the output at the console.

function findCardFrequency(inputString) {

    function getUniqueElements(arr) {
        var uniqueElements = [];

        for (var i in arr) {
            if (uniqueElements.indexOf(arr[i]) === -1) { // if elements doesn't exist, add it to the array
                uniqueElements.push(arr[i]);
            }
        }

        return uniqueElements;
    }

    var cards = inputString.split(/[♣♦♥♠ ]+/);
    var frequencies = [];

    cards.pop(); //removing the last element

    //calculate the frequency of the cards
    for (var i in cards) {
        if (cards[i] in frequencies) {
            frequencies[cards[i]]++; // if exists, frequencies is + 1
        } else {
            frequencies[cards[i]] = 1; // if does not exist, create new instance equals to 1
        }
    }

    var cardsLength = cards.length;

    cards = getUniqueElements(cards);
    // now we have all unique cards and their frequencies
    for (i in cards) {
        var percent = (frequencies[cards[i]] / cardsLength * 100).toFixed(2); // calculate percent for each element
        console.log(cards[i] + ' -> ' + percent + '%'); //printing the results
    }
}

console.log(findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦'));
console.log(findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠'));
console.log(findCardFrequency('10♣ 10♥'));