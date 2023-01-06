// Write a function to sort an array using bubble sort.

// Note: In Bubble sort, the largest number gets pushed to last index in every pass.

function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

    // Since, in every pass the largest number gets to the last index, so we want to minimize the number of iterations.
    // This is because there is no point comapring the last elements since they are already sorted.
    // That's why we run j from 0 till whatever value (i - 1) is right then.
    // Till (i - 1) because we run comparision for arr[j] > arr[j + 1] inside inner loop.
    
    // i is initialized from greater to smaller number because we want to use i in inner loop.
    // Also, if no swaps are made in any pass, we break.
    // Reason - If we didn't swap last time, that means we'll not swap even in next pass.
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        console.log(`${i} PASS COMPLETED`);
        if (noSwaps) break;
    }

    return arr;
}

// const result = bubbleSort([29, 10, 14, 30, 37, 14, 18]);
const result = bubbleSort([37, 45, 29, 8, 12, 88, -3]);
// const result = bubbleSort([1, 2, 3, 5, 4, 6, 7, 8]);
console.log(result);