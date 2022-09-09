// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(dt) {
    if (this.data > dt && this.left === null) {
      this.left = new Node(dt);
    } else if (this.data > dt && this.left !== null) {
      this.left.insert(dt);
    } else if (this.data < dt && this.right === null) {
      this.right = new Node(dt);
    } else if (this.data < dt && this.right !== null) {
      this.right.insert(dt);
    }
  }
  contains(dt) {
    if (this.data === dt) {
      return this;
    } else if (this.data > dt && this.left !== null) {
      return this.left.contains(dt);
    } else if (this.data < dt && this.right !== null) {
      return this.right.contains(dt);
    } else {
      return null;
    }  
  }
}

module.exports = Node;
