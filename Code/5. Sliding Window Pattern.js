// Write a function which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubArraySum(arr, n) {
    if (!arr.length || !n || n > arr.length) return null;

    let tempSumWindow = arr.slice(0, n).reduce((acc, crr) => acc + crr);
    let maxSum = tempSumWindow;
    for (let i = n; i < arr.length; i++) {
        tempSumWindow = tempSumWindow - arr[i - n] + arr[i];
        maxSum = Math.max(tempSumWindow, maxSum);
    }

    return maxSum;
}

let result = maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2);
console.log(result);