// Write a function to implement binary search and search for a value inside an array.
// It uses divide and conquer algorithm.

// NOTE: TO IMPLEMENT BINARY SEARCH, THE ARRAY MUST BE SORTED.

// Time Complexity - O(log n) - Better than O(n)
// Example - if there are 16 elements in the array, the steps it would take to find the element will be 4.
// So the relation would be log n for its time complexity.

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === val) return middle;

        if (arr[middle] > val) right = middle - 1;
        else left = middle + 1;
    }

    return -1;
}

// const result = binarySearch([34, 51, 1, 2, 3, 45, 56, 687], 100);
const result = binarySearch([1, 2, 3, 4, 5, 6, 11], 11);
console.log(result);