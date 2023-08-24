// PRIORITY QUEUE : A priority queue is a type of queue that arranges elements based on their priority values.
// Elements with higher priority values are typically retrieved before elements with lower priority values.

// PROPERTIES OF PRIORITY QUEUE :
// Every item has a priority associated with it.
// An element with high priority is dequeued before an element with low priority.
// If two elements have the same priority, they are served according to their order in the queue.

// For any index of an array n, the left child is stored at (2n + 1) and the right child is stored at (2n + 2).
 
// TIME COMPLEXITY :
// Insertion - O(log N)
// Removal - O(log N)
// Search - O(N)

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// can also be configured with name MinBinaryHeap
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    // push the value into the array. It goes to the end.
    // Now BubbleUp the Value - We compare it to its parent and swap if it is greater than its parent.
    // We continue this until it is bubbled up to its intended place.
    enqueue(val, priority) {
        const node = new Node(val, priority)
        this.values.push(node);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const element = this.values[index];
            const parent = this.values[parentIndex];

            if (element.priority >= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    // if in max heap, delete the root node from the array.
    // Now Sink Down - We compare it to its children and swap if it is smaller than its children.
    // We continue this until it is sunk down to its intended place.
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
              leftChild = this.values[leftChildIdx];
              if (leftChild.priority < element.priority) swap = leftChildIdx;
            }

            if (rightChildIdx < length) {
              rightChild = this.values[rightChildIdx];
              if (
                (swap === null && rightChild.priority < element.priority) ||
                (swap !== null && rightChild.priority < leftChild.priority)
              ) {
                swap = rightChildIdx;
              }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

const priorityQ = new PriorityQueue();
priorityQ.enqueue('Common Cold', 5);
priorityQ.enqueue('Gunshot Wound', 1);
priorityQ.enqueue('High Fever', 4);
priorityQ.enqueue('Broken Arm', 2);
priorityQ.enqueue('Glass in Foot', 3);
// [
//   { val: 'Gunshot Wound', priority: 1 },
//   { val: 'Broken Arm', priority: 2 },
//   { val: 'High Fever', priority: 4 },
//   { val: 'Common Cold', priority: 5 },
//   { val: 'Glass in Foot', priority: 3 }
// ]

priorityQ.dequeue(); // { val: 'Gunshot Wound', priority: 1 }
priorityQ.dequeue(); // { val: 'Broken Arm', priority: 2 }
priorityQ.dequeue(); // { val: 'Glass in Foot', priority: 3 }
priorityQ.dequeue(); // { val: 'High Fever', priority: 4 }
priorityQ.dequeue(); // { val: 'Common Cold', priority: 5 }
priorityQ.dequeue(); // undefined
console.log(priorityQ.values) // []