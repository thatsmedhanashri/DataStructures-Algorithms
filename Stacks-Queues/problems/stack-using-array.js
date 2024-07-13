class Stack_ {
  constructor() {
    this.stack_ = [];
  }

  push_(data) {
    this.stack_.push(data);
  }

  pop_() {
    this.stack_.pop();
  }

  peek_() {
    console.log("peek - ", this.stack_[this.stack_.length - 1]);
  }

  pritnt_() {
    for (let i = 0; i < this.stack_.length; i++) {
      console.log(this.stack_[i]);
    }
  }
}

let stack1 = new Stack_();
stack1.push_(2);
stack1.push_(3);
stack1.push_(5);
stack1.push_(7);

stack1.pop_();

stack1.peek_();

stack1.pritnt_();
