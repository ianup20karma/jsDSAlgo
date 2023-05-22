// Write a function to sort an array using Quick Sort.

// We implement a helper function called pivot which takes an array as parameter
// and returns an array where all the values smaller than the pivot are pushed to the left side of it.
// Takes first any element's index as pivotIndex and start loop from 2nd element (i.e. arr[1]).
// Here Pivot is always the first element (as we implemented)
// If any elemet is greater than the pivot we first increment pivotIndex and then swap arr[pivotIndex] and arr[i].
// At the end swap arr[pivotIndex] and arr[i] to shift the pivot element to the end of smaller elements.

// Time Complexity for decompositions: O(log n)
// If For any number of elements entered, say 32, we go about 5 splits. That is 2 raise to the power 5.
// Time Complexity for comparisons per decomposition: O(n)
// We would compare each element for a split when we merge.
// TIME COMPLEXITY FOR QUICK SORT: O(n log n)
// Worst case - O(n^2) - When we minimum or maximum number as pivot.

// Refer: https://www.geeksforgeeks.org/quick-sort/
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1); // LEFT
        quickSort(arr, pivotIndex + 1, right); // RIGHT
    }
    return arr;
}

const pivot = (arr, start, end) => {
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    let pivotIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (arr[start] > arr[i]) {
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    }

    if (pivotIndex !== start) swap(arr, pivotIndex, start);
    return pivotIndex;
};

const result = quickSort([4, 6, 9, 1, 2, 5, 6, 3, 8]);
console.log(result);

const nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(quickSort(nums));
console.log(quickSort([]));