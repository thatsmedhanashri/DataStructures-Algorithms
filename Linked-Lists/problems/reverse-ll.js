class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  head = null;
  tail = null;

  insert(data) {
    let newNode = new node(data);
    let temp = this.head;
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = newNode;
      this.tail = temp.next;
    }
  }

  printLL() {
    let temp = this.head;
    let ll_arr = [];
    while (temp.next != null) {
      ll_arr.push(temp.data);
      temp = temp.next;
    }
    ll_arr.push(temp.data);
    console.log("ll_arr ", ll_arr);
  }

  reverseLL() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current != null) {
      next = current.next;
      current.next = prev;
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
