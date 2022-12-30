// Implement a function which accepts a sorted array, and count the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
    if (!arr.length) return undefined;
    else if (arr.length === 1) return 1;
    else {
        // SOLUTION 1:
        return new Set(arr).size;

        // SOLUTION 2:
        // const uniqueValues = arr.reduce((acc, crr) => {
        //     acc[crr] = (acc[crr] || 0) + 1;
        //     return acc;
        // }, {});
        // return Object.keys(uniqueValues).length;
    }
}

const result = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
console.log(result);
