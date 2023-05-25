// Collect odd values in an array using Recursion.

// For arrays, use SLICE, the SPREAD operator, and CONCAT that make copies of arrays so you do not mutate them
// Remember that strings are mutable so you will need to use methods like SLICE, SUBSTR, or SUBSTRING to make copies of strings.
// To make copies of objects use Object.assign, or the spread operator.

function collectOddValues(arr) {
    if (!arr.length) return [];

    let newArr = [];
    const [head, ...tail] = arr; // Array Destructuring (ES6 Feature)

    if (head % 2 !== 0) newArr.push(head);
    newArr = newArr.concat(collectOddValues(tail));

    return newArr;
}

const result = collectOddValues([1, 2, 3, 4, 5]);
console.log(result);