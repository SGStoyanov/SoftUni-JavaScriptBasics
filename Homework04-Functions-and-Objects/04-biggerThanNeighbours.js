//Problem 4.	Bigger Than Neighbors
//Write a JavaScript function biggerThanNeighbors(index,  arr) that accept a number and an integer array as parameters. The function should return
//a Boolean number: whether the element at the given position in the array is bigger than its two neighbors (when such exist).
//It should return undefined when the index doesn't exist.

function biggerThanNeighbours(index, arr) {

    if (index <= arr.length-1 && index >= 0) {
        if (arr[index] > arr[index-1] && arr[index] > arr[index+1]) {
            return "bigger";
        } else if (index - 1 < 0 || index >= arr.length) {
            return "only one neighbor";
        } else {
            return "not bigger";
        }
    } else {
        return "invalid index";
    }
}

console.log(biggerThanNeighbours(2, [1, 2, 3, 3, 5]));
console.log(biggerThanNeighbours(2, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbours(5, [1, 2, 5, 3, 4]));
console.log(biggerThanNeighbours(0, [1, 2, 5, 3, 4]));