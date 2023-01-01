// Given a sorted array of integers, write a function that accepts a value and returns the index
// where the value passed to the function is located. If the value is not found, return -1.

// SOLVED USING DIVIDE AND CONQUER ALGORITHM
function search(arr, n) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (arr[middle] > n) right = middle + 1;
        else if (arr[middle] < n) left = middle + 1;
        else return middle;
    }
    return -1;
}

const result = search([1, 2, 3, 4, 5, 6], 11);
console.log(result);