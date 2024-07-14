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

  delete(data) {
    if (this.root == null) {
      console.log("Tree is empty.");
      return;
    } else {
      // Deleting root node
      if (data == this.root.data) {
        let currentNode = this.root.left;
        let prevNode = this.root;
        while (currentNode.right.right != null) {
          currentNode = currentNode.right;
        }
        prevNode = currentNode;
        currentNode = currentNode.right;
        if (currentNode.left != null) {
          prevNode.right = currentNode.left;
        }
        currentNode.left = this.root.left;
        currentNode.right = this.root.right;
        this.root = currentNode;
        console.log("Data deleted successfully.");
      }
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
bst.insert(7);
bst.insert(17);
bst.insert(90);
bst.insert(200);

bst.printData();
// bst.delete(6);
// bst.delete(11);
// bst.delete(3);
bst.delete(9); // Deleting root node

bst.printData();
