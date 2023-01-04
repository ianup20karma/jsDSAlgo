// Given and array and value. Find the position at which the given number exists. If it doesn't, return -1;
// replicate indexOf functionality

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

const result = linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100);
console.log(result);