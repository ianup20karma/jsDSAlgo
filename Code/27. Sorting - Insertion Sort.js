// Write a function to sort an array using insertion sort.

// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands.
// The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
// It is an optimization over bubble sort.

// ================================================================================================================================================================

// Keep current value in a temp variable.
// Keep shifting arr elements to left if those elements are greater than current value.
// Stop and put the current value at the position just after where the array element is less than current value.

// TIME COMPLEXITY FOR INSERTION SORT: O(n^2)

// Refer: https://www.geeksforgeeks.org/insertion-sort/
// We put the smallest number first and the rearrange the rest of the array.
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const crrVal = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > crrVal) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = crrVal;
    }

    return arr;
}

// const result = insertionSort([29, 10, 14, 30, 37, 14, 18]);
const result = insertionSort([37, 45, 29, 8, 12, 88, -3]);
// const result = insertionSort([1, 2, 3, 5, 4, 6, 7, 8]);
console.log(result);