//Problem 4.	Create Array
//Write a JavaScript function createArray(value) that allocates array of 20 integers and initializes each element by its index multiplied by 5.
//Write JS program arrayBuilder.js that invokes your function with the sample input data below and prints the output at the console.

    function createArray(maxElements) {
    var arr = [];
    for (var i = 0; i < maxElements; i++) {
        arr[i]=i*5;
    }
    return arr;
}

console.log(createArray(20));