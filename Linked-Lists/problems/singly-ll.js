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

  prepend(data) {
    let newNode = new node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  append(data) {
    let newNode = new node(data);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  delete(data) {
    if (this.head.data == data) {
      this.head = this.head.next;
    } else if (this.tail.data == data) {
      let temp = this.head;
      while (temp.next != this.tail) {
        temp = temp.next;
      }
      temp.next = null;
      this.tail = temp;
    } else {
      let temp = this.head;
      while (temp.next.data != data) {
        temp = temp.next;
      }
      temp.next = temp.next.next;
    }
  }
}

ll = new LinkedList();
ll.insert(2);
ll.insert(3);
ll.insert(5);
ll.insert(7);

ll.prepend(1);
ll.prepend(100);

ll.append(11);
ll.append(13);

// ll.delete(100);
// ll.delete(13);
ll.delete(5);
ll.delete(3);

ll.printLL();
