class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new node(data);
    if (this.root == null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (data < currentNode.data) {
          if (currentNode.left == null) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else if (data > currentNode.data) {
          if (currentNode.right == null) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        } else if (data == currentNode.data) {
          if (currentNode.right == null) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(data) {
    if (this.root == null) {
      console.log("Data not found.");
      return;
    } else {
      let currentNode = this.root;
      while (currentNode != null) {
        if (data < currentNode.data) {
          currentNode = currentNode.left;
        } else if (data > currentNode.data) {
          currentNode = currentNode.right;
        } else {
          console.log("Found - ", JSON.stringify(currentNode));
          currentNode = currentNode.right; // Getting all matching nodes
          //   return;  // Getting first matching node
        }
      }
      console.log("Data not found.");
      return;
    }
  }

  printData() {
    console.log("BST nodes - ", JSON.stringify(this.root));
  }
}

let bst = new BST();

bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
bst.insert(9);
bst.insert(4);
bst.insert(11);
bst.insert(8);
bst.insert(3);
bst.insert(1);
bst.insert(3);

bst.lookup(11);
bst.lookup(6);
bst.lookup(50);
bst.lookup(11);
bst.lookup(4);

// bst.printData();
