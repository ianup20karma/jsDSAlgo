// A doubly linked list (DLL) is a special type of linked list in which each node contains a pointer to the previous node
// as well as the next node of the linked list.

// TIME COMPLEXITY OF DLL:
// INSERTION: O(1)
// REMOVAL: O(1)
// SEARCHING: O(N)
// ACCESS: O(N)
// Technically SEARCHING it is O(N/2) but that's still O(N)
// Better than SLL, but comes at the cost of extra memory for the extra pointer (previous pointer).

class Node {
    constructor(val) {
        this.val = val;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    pop() {
        if (this.length === 0) return undefined;
        else if (this.length === 1) {
            const crrNode = this.head;
            this.head = null;
            this.tail = this.head;
            this.length--;
            return crrNode;
        } else {
            let crrNode = this.head;
            let newTail = crrNode;

            while(crrNode.next) {
                newTail = crrNode;
                crrNode = crrNode.next;
            }

            crrNode.previous = null;
            newTail.next = null;
            this.tail = newTail;
            this.length--;
            return crrNode;
        }
    }

    shift() {
        if (this.length === 0) return undefined;

        const crrNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = this.head;
            this.length--;
            return crrNode;
        }
        else {
            this.head = crrNode.next;
            this.head.previous = null;
            crrNode.next = null;
            this.length--;
            return crrNode;
        }
    }
}

const list = new DoublyLinkedList();
list.push('Hello');
// null <- Hello -> null
list.push('How are you?');
// null <- Hello <- -> How are you? -> null
list.push('Good Bye!');
// null <- Hello <- -> How are you? <- -> Good Bye! -> null
list.pop();
// null <- Hello <- -> How are you? -> null
list.push('Good Bye!');
// null <- Hello <- -> How are you? <- -> Good Bye! -> null
list.shift();
// null <- How are you? <- -> Good Bye! -> null
list.shift();
// null -> Good Bye! -> null
console.log(list);