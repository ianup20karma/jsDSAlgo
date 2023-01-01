// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
    // SOLUTION 1 (Slightly Faster)
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];

    // SOLUTION 2
    // if (!str.length) return '';
    // if (str.length === 1) return str;
    // return str.charAt(str.length - 1) + reverse(str.slice(0, str.length - 1));
}

const result = reverse('rithmschool');
console.log(result);