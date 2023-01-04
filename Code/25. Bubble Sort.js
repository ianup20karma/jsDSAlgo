// Write a function to sort an array using bubble sort.

function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
        }
    }

    return arr;
}

const result = bubbleSort([29, 10, 14, 30, 37, 14, 18]);
console.log(result);