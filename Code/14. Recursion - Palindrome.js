// Write a recursive function called isPalindrome which returns true if the string passed to
// it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function reverse(str) {
    // SOLUTION 1 (Slightly Faster)
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];

    // SOLUTION 2
    // if (!str.length) return '';
    // if (str.length === 1) return str;
    // return str.charAt(str.length - 1) + reverse(str.slice(0, str.length - 1));
}

const word = 'tacocat';
const result = word === reverse(word);
console.log(result);