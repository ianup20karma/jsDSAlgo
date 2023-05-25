// Write a function which accepts two arrays. The function should return true if every value in the array
// has its corresponding value squared in the second array. The frequency of values must be the same.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  else if (arr1.length === 0 || arr2.length === 0) return true;
  else {
    const counts = arr => arr.reduce((acc, crr) => {
      acc[crr] = (acc[crr] || 0) + 1;
      return acc;
    }, {});

    const arr1Counts = counts(arr1);
    const arr2Counts = counts(arr2);

    for (const key in arr1Counts) {
      if (arr1Counts[key] !== arr2Counts[key ** 2]) return false;
    }

    return true;
  }
}

const result = same([1, 2, 3], [4, 1, 9]);
console.log(result);
