// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string.

function collectStrings(obj) {
    if (!Object.keys(obj).length) return;
    else {
        let strArr = [];

        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'string') strArr.push(obj[key]);
            else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) strArr = strArr.concat(collectStrings(obj[key]));
        });

        return strArr;
    }
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const result = collectStrings(obj);
console.log(result);