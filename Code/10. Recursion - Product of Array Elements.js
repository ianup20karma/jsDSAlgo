// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
    if (!arr.length) return null;
    if (arr.length === 1) return arr[0];

    let [head, ...tail] = arr; // Array Destructuring (ES6 Feature)
    return head * productOfArray(tail);
}

const result = productOfArray([1, 2, 3, 10]);
console.log(result);