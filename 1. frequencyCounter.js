// Write a function which accepts two arrays. The function should return true if every value in the array
// has its corresponding value squared in the second array. The frequency of values must be the same.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  else {
    if (arr1.length === 0 || arr2.length === 0) return true;
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
}

const result = same([1, 2, 3], [4, 1, 9]);
console.log(result);
