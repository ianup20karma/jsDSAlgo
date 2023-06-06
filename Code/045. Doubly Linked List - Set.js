// A doubly linked list (DLL) is a special type of linked list in which each node contains a pointer to the previous node
// as well as the next node of the linked list.

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

    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.head = this.tail;
        } else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if ((this.length === 0) || (index < 0) || (index >= this.length)) return null;
        let crrNode, counter;
        if (index <= this.length / 2) {
            crrNode = this.head;
            counter = 0;
            while(index !== counter) {
                crrNode = crrNode.next;
                counter++;
            }
        } else {
            crrNode = this.tail;
            counter = this.length - 1;
            while(index !== counter) {
                crrNode = crrNode.previous;
                counter--;
            }
        }
        return crrNode;
    }

    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = value;
            return foundNode;
        } else return null;
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
list.unshift('How are you?');
// null <- How are you? <- -> Good Bye! -> null
list.unshift('Hello');
// null <- Hello <- -> How are you? <- -> Good Bye! -> null
console.log(list.get(1)); // How are you?
console.log(list.get(2)); // Good Bye!
console.log(list.set(1, 'How are you mate?')); // How are you mate?
console.log(list);