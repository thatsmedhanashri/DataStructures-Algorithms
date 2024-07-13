class Queue_ {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue_(data) {
    let node_ = this.newNode(data);
    if (this.head == null) {
      this.head = node_;
      this.tail = node_;
    } else {
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = node_;
      this.tail = node_;
    }
  }

  dequeue_() {
    if (this.head == null) {
      console.log("data not found");
    } else if (this.head.next == null) {
      console.log("dequeue - ", this.head.data);
      this.head = null;
      this.tail = null;
    } else {
      console.log("dequeue - ", this.head.data);
      this.head = this.head.next;
    }
  }

  peek_() {
    if (this.head == null) {
      console.log("data not found");
    } else {
      console.log("peek - ", this.head.data);
    }
  }

  print_() {
    console.log("head - ", this.head);
    console.log("tail - ", this.tail);
    let Queue_arr = [];
    let temp = this.head;
    while (temp.next != null) {
      Queue_arr.push(temp.data);
      temp = temp.next;
    }
    Queue_arr.push(temp.data);
    console.log("Queue data - ", Queue_arr);
  }

  newNode(data) {
    let obj = {
      data: data,
      next: null,
    };
    return obj;
  }
}

let queue1 = new Queue_();
queue1.enqueue_(2);
queue1.enqueue_(3);
queue1.enqueue_(5);
queue1.enqueue_(7);
queue1.peek_();

queue1.dequeue_();

queue1.peek_();

queue1.print_();
