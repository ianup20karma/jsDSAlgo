// Write a function to sort an array using Radix Sort.

// Radix sort is the linear sorting algorithm that is used for integers.
// In Radix sort, there is digit by digit sorting is performed that is started from the least significant digit to the most significant digit.
// The process of radix sort works similar to the sorting of students names, according to the alphabetical order.

// ============================================================================================================================================

// We implement 3 helper functions called getDigit, digitCount and mostDigits.
// getDigit return the digit from the place speficied in param from the left side of the array.
// digitCount counts the number of digits present in a number.
// mostDigits returns the maximum digitCount from an array.

// TIME COMPLEXITY FOR RADIX SORT: O(nk)
// SPACE COMPLEXITY FOR RADIX SORT: O(n + k)
// n - length of array
// k - number of digits (average)

// Refer: https://www.geeksforgeeks.org/radix-sort/
function radixSort(nums) {
    const maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {
        // Buckets are arrays within a large array of length 10
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            const digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets);
    }

    return nums;
}

const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const digitCount = (num) => {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
    let maxDigits = 0;
    nums.forEach(num => maxDigits = Math.max(maxDigits, digitCount(num)));
    return maxDigits;
};

const result = radixSort([23, 345, 5467, 12, 2345, 9852]); // [ 12, 23, 345, 2345, 5467, 9852 ]
console.log(result);

console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])); // [ 4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637 ]