// Write a function called stringifyNumbers which takes in an object and finds all of the values
// which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
    if (!Object.keys(obj).length) return;
    else {
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'number') obj[key] = obj[key].toString();
            else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) stringifyNumbers(obj[key]);
        });
        return obj;
    }
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