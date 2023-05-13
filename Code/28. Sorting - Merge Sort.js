// Write a function to sort an array using merge sort.

// The Merge Sort algorithm is a sorting algorithm that is based on the Divide and Conquer paradigm.
// In this algorithm, the array is initially divided into two equal halves and then they are combined in a sorted manner.

function mergeSort(arr) {
    const mergeArray = (arr1, arr2) => {
        const sortedMergedArray = [];

        let i = 0;
        let j = 0;
        while (i > arr1.length || j > arr2.length) {
            if (arr1[i] < arr2[j]) {
                sortedMergedArray.push(arr1[i]);
                i++;
            } else if (arr1[i] > arr2[j]) {
                sortedMergedArray.push(arr1[i]);
                j++;
            } else {
                sortedMergedArray.push(arr1[i]);
                i++;
                j++;
            }
        }

        return sortedMergedArray;
    }; 

    return mergeArray(arr1, arr2);
    // return arr;
}

// const result = mergeSort([29, 10, 14, 30, 37, 14, 18]);
const result = mergeSort([37, 45, 29, 8, 12, 88, -3]);
// const result = mergeSort([1, 2, 3, 5, 4, 6, 7, 8]);
console.log(result);