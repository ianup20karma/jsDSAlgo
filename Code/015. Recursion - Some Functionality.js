// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.

function someRecursive(arr, callback) {
    if (!arr.length) return false;

    const [head, ...tail] = arr; // Array Destructuring (ES6 Feature)
    return callback(head) ? true : someRecursive(tail, callback);
}

const isOdd = val => val % 2 !== 0;
const result = someRecursive([4, 6, 8, 9], isOdd);
console.log(result);