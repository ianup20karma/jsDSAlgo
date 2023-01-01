// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
    if (!arr.length) return [];
    if (arr.length === 1) {
        const newStr = arr[0].split('');
        newStr[0] = newStr[0].toUpperCase();
        return newStr.join('');
    }

    const [head, ...tail] = arr;
    let newArr = [];

    newArr.push(capitalizeFirst([head]));
    newArr = newArr.concat(capitalizeFirst(tail));
    
    return newArr;
}

const result = capitalizeFirst(['car', 'taco', 'banana']);
console.log(result);