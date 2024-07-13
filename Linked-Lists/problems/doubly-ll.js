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

    let ll_array1 = [];
    let temp1 = this.tail;
    while (temp1.prev != null) {
      ll_array1.push(temp1.data);
      temp1 = temp1.prev;
    }
    ll_array1.push(temp1.data);
    console.log("ll array - ", ll_array1);
  }

  prepend(data) {
    let newNode = new node(data);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  append(data) {
    let newNode = new node(data);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  delete(data) {
    if (this.head.data == data) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (this.tail.data == data) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let temp = this.head;
      while (temp.next != null) {
        if (temp.data == data) {
          temp.prev.next = temp.next;
          temp.next.prev = temp.prev;
          break;
        }
        temp = temp.next;
      }
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

ll.delete(100);
ll.delete(13);
ll.delete(5);
ll.delete(3);

ll.printLL();
