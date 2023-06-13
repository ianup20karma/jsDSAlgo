// Binary Search Tree is a node-based binary tree data structure which has the following properties:
// - The left subtree of a node contains only nodes with keys lesser than the node’s key.
// - The right subtree of a node contains only nodes with keys greater than the node’s key.
// - The left and right subtree each must also be a binary search tree.

// TIME COMPLEXITY OF BINARY SEARCH TREE:
// Insertion: O(log n)
// Searching: O(log n)
// Note: If we have only 1-sided BST, then the time complexity would be O(n).
// Therefore O(log n) is NOT GUARANTEED in this case.

// Refer: https://www.geeksforgeeks.org/binary-search-tree-data-structure/
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new Node(val);
        const insertAndUpdateRoot = (root) => {
            if (root === null) return node;
            if (node.value > root.value) { root.right = insertAndUpdateRoot(root.right); }
            if (node.value < root.value) { root.left = insertAndUpdateRoot(root.left); }
            return root;
        };
        this.root = insertAndUpdateRoot(this.root);
        return this.root;
    }

    find(val) {
        const search = (root) => {
            if (this.root === null || root.value === val) return root;
            if (val > root.value) return search(root.right);
            return search(root.left);
        };
        return search(this.root);
    }

    // We Store all the values present at a level, then we go below it for the same task until there is no node left.
    breadthFirstSearch() {
        const values = [];
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            const node = queue.shift();
            values.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return values;
    }

    // Storing root value first, we store the left and right values first then we visit left and right nodes to do the same.
    depthFirstSearchPreOrder(node = this.root, values = []) {
        values.push(node.value);
        if (node.left) this.depthFirstSearchPreOrder(node.left, values);
        if (node.right) this.depthFirstSearchPreOrder(node.right, values);
        return values;
    }

    // Starting from left node We store the bottom most node values first then the right ones till we reach the top. Root stored at last.
    depthFirstSearchPostOrder(node = this.root, values = []) {
        if (node.left) this.depthFirstSearchPostOrder(node.left, values);
        if (node.right) this.depthFirstSearchPostOrder(node.right, values);
        values.push(node.value);
        return values;
    }
}

const BST = new BinarySearchTree();
BST.insert(10);
BST.insert(5);
BST.insert(13);
BST.insert(2);
BST.insert(7);
BST.insert(11);
BST.insert(16);
console.log(BST.find(16)); // Node { value: 16, left: null, right: null }
console.log(BST.breadthFirstSearch()); // [ 10,  5, 13, 2, 7, 11, 16 ]
console.log(BST.depthFirstSearchPreOrder()); // [ 10,  5,  2, 7, 13, 11, 16 ]
console.log(BST.depthFirstSearchPostOrder()); // [ 2,  7,  5, 11, 16, 13, 10 ]
console.log(BST);

//            10
//     5             13
// 2       7    11       16