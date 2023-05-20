// Write a function to sort an array using merge sort.

// The Merge Sort algorithm is a sorting algorithm that is based on the Divide and Conquer paradigm.
// In this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner.

// Divide the array into smallest parts and take two halves of the array and sort them along with merge at last.
// Doing this recursively will merge the arrays back into the original size and the new array will also be sorted.
// A helper function is also made to sort and merge two halves. Rest is taken care of using recursion.

// Refer: https://www.geeksforgeeks.org/merge-sort/
function mergeSort(arr) {

    if (arr.length <= 1) return arr;

    const sortAndMerge = (arr1, arr2) => {
        const pushAndIncrement = (arr, index, newArr) => {
            newArr.push(arr[index]);
            return index + 1;
        };

        let results = [];
        let i = 0;
        let j = 0;
    
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) i = pushAndIncrement(arr1, i, results);
            else j = pushAndIncrement(arr2, j, results);
        }
        while (i < arr1.length) i = pushAndIncrement(arr1, i, results);
        while (j < arr2.length) j = pushAndIncrement(arr2, j, results);
    
        return results;
    };

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return sortAndMerge(left, right);
}

// const result = mergeSort([29, 10, 14, 30, 37, 14, 18]);
const result = mergeSort([37, 45, 29, 8, 12, 88, -3]);
// const result = mergeSort([1, 2, 3, 5, 4, 6, 7, 8]);
console.log(result);