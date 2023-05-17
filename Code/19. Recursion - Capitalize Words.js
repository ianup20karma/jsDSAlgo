// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeFirst(arr) {
    if (!arr.length) return [];
    else if (arr.length === 1) return arr[0].toUpperCase();
    else {
        let newArr = [];

        const [ head, ...tail ] = arr;
        newArr.push(capitalizeFirst([head]));
        newArr = newArr.concat(capitalizeFirst(tail));

        return newArr;
    }
}

const result = capitalizeFirst(['i', 'am', 'learning', 'recursion']);
console.log(result);