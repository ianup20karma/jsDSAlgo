// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
    if (!arr.length) return [];
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        Array.isArray(arr[i]) ? newArr = newArr.concat(flatten(arr[i])) : newArr.push(arr[i]);
    }

    return newArr;
}

const result = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]);
console.log(result);