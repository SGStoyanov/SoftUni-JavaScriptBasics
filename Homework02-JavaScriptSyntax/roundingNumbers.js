function roundNumber(value) {
    var valueFloor = Math.floor(value);
    var valueRound = Math.round(value);
    return [valueFloor, valueRound];
}

console.log(roundNumber(22.7)[0]);
console.log(roundNumber(22.7)[1]);

console.log(roundNumber(12.3)[0]);
console.log(roundNumber(12.3)[1]);

console.log(roundNumber(58.7)[0]);
console.log(roundNumber(58.7)[1]);