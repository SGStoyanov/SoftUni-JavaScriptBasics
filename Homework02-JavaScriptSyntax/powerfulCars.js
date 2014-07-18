function convertKWtoHP(value) {
    var value = Number(Math.floor((value/0.746)*100)/100);
    return value;
}

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));