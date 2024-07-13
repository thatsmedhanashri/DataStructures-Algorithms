class node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  tail = null;

  insert(data) {
    let newNode = new node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }

      temp.next = newNode;
      newNode.prev = temp;
      this.tail = newNode;
    }
  }

  printLL() {
    let ll_array = [];
    let temp = this.head;
    while (temp.next != null) {
      ll_array.push(temp.data);
      temp = temp.next;
    }
    ll_array.push(temp.data);
    console.log("ll array - ", ll_array);
  }

  reverseLL() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current != null) {
      next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

ll = new LinkedList();
ll.insert(2);
ll.insert(3);
ll.insert(5);
ll.insert(7);
ll.printLL();

ll.reverseLL();
ll.printLL();
