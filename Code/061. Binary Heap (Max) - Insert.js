// HEAP : A Heap is a special Tree-based data structure in which the tree is a complete binary tree.

// OPERATIONS OF HEAP DATA STRUCTURE :
// Heapify: a process of creating a heap from an array.
// Insertion: process to insert an element in existing heap time complexity O(log N).
// Deletion: deleting the top element of the heap or the highest priority element, and then organizing the heap and returning the element with time complexity O(log N).
// Peek: to check or find the first (or can say the top) element of the heap.

// TYPES OF HEAP DATA STRUCTURE :
// Max-Heap: In a Max-Heap the key present at the root node must be greatest among the keys present at all of it’s children.
// Min-Heap: In a Min-Heap the key present at the root node must be minimum among the keys present at all of it’s children.

// For any index of an array n, the left child is stored at (2n + 1) and the right child is stored at (2n + 2).

// TIME COMPLEXITY :
// Insertion - O(log N)
// Removal - O(log N)
// Search - O(N)
 
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    // push the value into the array. It goes to the end.
    // Now BubbleUp the Value - We compare it to its parent and swap if it is greater than its parent.
    // We continue this until it is bubbled up to its intended place.
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const element = this.values[index];
            const parent = this.values[parentIndex];

            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
}

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(41); // [ 41 ]
maxHeap.insert(39); // [ 41, 39 ]
maxHeap.insert(33); // [ 41, 39, 33 ]
maxHeap.insert(18); // [ 41, 39, 33, 18 ]
maxHeap.insert(27); // [ 41, 39, 33, 18, 27 ]
maxHeap.insert(12); // [ 41, 39, 33, 18, 27, 12 ]
maxHeap.insert(55); // [ 55, 39, 41, 18, 27, 12, 33 ]