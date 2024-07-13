class Stack_ {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push_(data) {
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

  pop_() {
    let temp = this.head;
    if (temp == null) {
      console.log("No data in stack");
      return;
    } else if (temp.next == null) {
      this.head = null;
    } else {
      while (temp.next.next != null) {
        temp = temp.next;
      }
      temp.next = null;
      this.tail = temp;
    }
  }

  peek_() {
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    console.log("peek - ", temp.data);
  }

  print_() {
    console.log("head - ", this.head);
    console.log("tail - ", this.tail);
    let stack_arr = [];
    let temp = this.head;
    while (temp.next != null) {
      stack_arr.push(temp.data);
      temp = temp.next;
    }
    stack_arr.push(temp.data);
    console.log("stack data - ", stack_arr);
  }

  newNode(data) {
    let obj = {
      data: data,
      next: null,
    };
    return obj;
  }
}

let stack1 = new Stack_();
stack1.push_(2);
stack1.push_(3);
stack1.push_(5);
stack1.push_(7);

stack1.pop_();

stack1.peek_();

stack1.print_();
