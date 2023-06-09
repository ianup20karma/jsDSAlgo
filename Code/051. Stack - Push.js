// Stack is a linear data structure that follows a particular order in which the operations are performed.
// The order may be LIFO(Last In First Out) or FILO(First In Last Out).
// LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last.

// Used for call stack, undo/redo, browser history
// Not a built in data structure in Javascript

// TIME COMPLEXITY OF STACK:
// INSERTION: O(1)
// REMOVAL: O(1)
// SEARCHING: O(N)
// ACCESS: O(N)

// Refer: https://www.geeksforgeeks.org/stack-data-structure/
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const node = new Node(val);
        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            const prevFirstNode = this.first;
            this.first = node;
            this.first.next = prevFirstNode;
        }
        return ++this.size;
    }
}

const stack = new Stack();
stack.push('Hello');
// Hello -> null
stack.push('How are you?');
// How are you? -> Hello -> null
stack.push('Good Bye!');
// Good Bye! -> How are you? -> Hello -> null
console.log(stack);