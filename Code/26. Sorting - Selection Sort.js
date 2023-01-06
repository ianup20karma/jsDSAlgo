// Write a function to sort an array using selection sort.

// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning.

// Note: Selection sort places smallest values in sorted position in every pass, i.e., start of array.

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    for (let i = 0; i < arr.length - 1; i++) {
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) smallest = Math.min(arr[smallest], arr[j]) === arr[smallest] ? smallest : j;
        }
        if (i !== smallest) swap(arr, i, smallest);
    }

    return arr;
}

// const result = selectionSort([29, 10, 14, 30, 37, 14, 18]);
const result = selectionSort([37, 45, 29, 8, 12, 88, -3]);
// const result = selectionSort([1, 2, 3, 5, 4, 6, 7, 8]);
console.log(result);