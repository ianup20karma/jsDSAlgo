// Write a function which accepts a number and adds up all the numbers from 0 to the number passed to the function.

function recursiveRange(n) {
    if (!n || n === 0) return 0;
    if (n === 1) return n;

    return n + recursiveRange(n - 1);
}

const result = recursiveRange(10);
console.log(result);