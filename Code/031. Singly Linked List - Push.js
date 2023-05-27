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
}

const list = new SinglyLinkedList();
list.push('Hello');
// Hello -> null
list.push('How are you?');
// Hello -> How are you? null
list.push('Good Bye!');
// Hello -> How are you? -> Good Bye! -> null
console.log(list);