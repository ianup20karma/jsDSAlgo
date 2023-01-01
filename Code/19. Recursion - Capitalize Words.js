// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeFirst(arr) {
    if (!arr.length) return [];
    if (arr.length === 1) {
        return arr[0].toUpperCase();
    }

    const [head, ...tail] = arr;
    let newArr = [];

    newArr.push(capitalizeFirst([head]));
    newArr = newArr.concat(capitalizeFirst(tail));
    
    return newArr;
}

const result = capitalizeFirst(['i', 'am', 'learning', 'recursion']);
console.log(result);