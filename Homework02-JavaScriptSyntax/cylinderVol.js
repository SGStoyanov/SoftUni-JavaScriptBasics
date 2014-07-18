function calcCylinderVol() {
    var volume = eval((Math.PI * Math.pow(arguments[0], 2) * arguments[1]).toFixed(3));
    return volume;
}

console.log(calcCylinderVol(2,4));
console.log(calcCylinderVol(5,8));
console.log(calcCylinderVol(12,3));