// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
    if (!arr.length) return [];
    else if (arr.length === 1) return arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    else {
        let newArr = [];
        const [ head, ...tail ] = arr;
        newArr.push(capitalizeFirst([head]));
        newArr = newArr.concat(capitalizeFirst(tail));
        return newArr;
    }
}

const result = capitalizeFirst(['car', 'taco', 'banana']);
console.log(result);