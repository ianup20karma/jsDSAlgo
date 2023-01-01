// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj, sumOfEven = 0) {
    if (!Object.keys(obj).length) null;

    Object.values(obj).forEach(val => {
        if (typeof val === 'object') sumOfEven += nestedEvenSum(val);
        else if (typeof val === 'number' && val % 2 === 0) sumOfEven += val;
    })

    return sumOfEven;
}

const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

const result1 = nestedEvenSum(obj1);
const result2 = nestedEvenSum(obj2);
console.log(result1, result2);