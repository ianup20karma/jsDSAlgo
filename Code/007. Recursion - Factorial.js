// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it.
// Example - Factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24. Factorial zero (0!) is always 1.

// RECURSION RULES:
// 1. Base Condition
// 2. Operation
// 3. Return Statement

function factorial(n) {
    if (n === 0) return 1;
    if (n <= 2) return n;
    return n * factorial(n - 1);
}

const result = factorial(11);
console.log(result);