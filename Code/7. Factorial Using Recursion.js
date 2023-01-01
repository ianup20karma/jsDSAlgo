// Find Factorial of a number using Recursion.

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