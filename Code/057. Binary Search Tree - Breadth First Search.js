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
console.log(BST);

//            10
//     5             13
// 2       7    11       16