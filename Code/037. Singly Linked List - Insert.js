// A singly linked list is a linear data structure in which the elements are not stored in contiguous memory locations
// and each element is connected only to its next element using a pointer.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    pop() {
        if (!this.head) return undefined;
        else if (this.length === 1) {
            let current = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return current;
        } else {
            let current = this.head;
            let newTail = current;

            while(current.next) {
                newTail = current;
                current = current.next;
            }

            newTail.next = null;
            this.tail = newTail;
            this.length--;
            return current;
        }
    }

    shift() {
        if (!this.head) return undefined;
        else if (this.length === 1) {
            let current = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return current;
        } else {
            let current = this.head;
            this.head = this.head.next;
            this.length--;
            return current;
        }
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (!this.head || (index < 0) || (index >= this.length)) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        let nodeValue = this.get(index);
        if (nodeValue) {
            nodeValue.val = value;
            return nodeValue;
        } else return null;
    }

    insert(index, value) {
        if ((index < 0) || (index > this.length)) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        const newNode = new Node(value);
        const preIndexNode = this.get(index - 1);
        const preIndexNodeNext = preIndexNode.next;
        preIndexNode.next = newNode;
        newNode.next = preIndexNodeNext;
        this.length++;
        return true;
    }
}

const list = new SinglyLinkedList();
list.push('Hello');
// Hello -> null
list.push('How are you?');
// Hello -> How are you? null
list.push('Good Bye!');
// Hello -> How are you? -> Good Bye! -> null
list.pop();
// Hello -> How are you? -> null
list.shift();
// How are you? -> null
list.unshift('Hello');
// Hello -> How are you? -> null
console.log(list.get(1)); // How are you?
console.log(list.set(1, 'How are you mate?')); // How are you mate?
list.insert(2, 'Good Bye!');
// Hello -> How are you mate? -> Good Bye! -> null
list.insert(2, 'Nice to meet you');
// Hello -> How are you mate? -> Nice to meet you -> Good Bye! -> null
console.log(list);