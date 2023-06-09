// A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.

// Used for background tasks, uploading resources, printing / task processing
// Not a built in data structure in Javascript

// TIME COMPLEXITY OF QUEUE:
// INSERTION: O(1)
// REMOVAL: O(1)
// SEARCHING: O(N)
// ACCESS: O(N)

// Refer: https://www.geeksforgeeks.org/queue-data-structure/
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const node = new Node(val);
        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }
}

const queue = new Queue();
queue.enqueue('Hello');
// Hello -> null
queue.enqueue('How are you?');
// Hello -> How are you? -> null
queue.enqueue('Good Bye!');
// Hello -> How are you? -> Good Bye! -> null
console.log(queue);