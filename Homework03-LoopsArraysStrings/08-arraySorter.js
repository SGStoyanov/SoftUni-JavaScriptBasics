//Problem 8.	Sort Array
//Sorting an array means to arrange its elements in increasing order. Write a JavaScript function sortArray(value) to sort an array.
//Use the "selection sort" algorithm: find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position,
//etc. Write JS program arraySorter.js that invokes your function with the sample input data below and prints the output at the console. Use a second array.

function sortArray(arr) {

    var sortedArr = arr;

    for(var k = 0; k < sortedArr.length-1; k++)
    {
        for(var j = k+1; j < sortedArr.length; j++)
        {
            if (sortedArr[k] > sortedArr[j])
            {
                var temp = sortedArr[k];
                sortedArr[k] = sortedArr[j];
                sortedArr[j] = temp;
            }
        }
    }

    return sortedArr;
}

console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));