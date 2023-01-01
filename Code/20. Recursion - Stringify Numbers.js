// Write a function called stringifyNumbers which takes in an object and finds all of the values
// which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
    if (!Object.keys(obj).length) null;

    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') stringifyNumbers(obj[key]);
        else if (typeof obj[key] === 'number') obj[key] = obj[key].toString();
    })

    return obj;
}

const obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

const result = stringifyNumbers(obj);
console.log(result);