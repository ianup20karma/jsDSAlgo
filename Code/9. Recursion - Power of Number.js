// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()

function power(base, exp) {
    if (exp === 1) return base;
    if (exp === 0) return 1;
    if (exp < 0) return 1 / power(base, - exp);

    return base * power(base, exp - 1);
}

const result = power(3, 5);
console.log(result);