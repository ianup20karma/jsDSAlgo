// WAP to check if the 2nd array consist square of all numbers of 1st array.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  else {
    const arrElCount = arr => arr.reduce((acc, crr) => {
      acc[crr] = (acc[crr] || 0) + 1;
      return acc;
    }, {});

    const arr1Count = arrElCount(arr1);
    const arr2Count = arrElCount(arr2);

    for (const key in arr1Count) {
        const arr2El = arr1Count[key] ** 2;
        if (arr2Count.hasOwnProperty(arr2El) && arr1Count[key] === arr2Count[arr2El]) continue;
        else return false;
    }

    return true;
  }
}

const result = same([1, 2, 3], [4, 1, 9]);
console.log(result);
