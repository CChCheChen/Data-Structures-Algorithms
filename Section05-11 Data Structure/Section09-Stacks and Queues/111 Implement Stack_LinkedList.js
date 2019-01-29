class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
      return this.top;
  }

  push(value){
    const temp = new Node(value);
    if(this.length === 0){
      this.top = temp;
      this.bottom = temp;
    }else{
      temp.next = this.top;
      this.top = temp;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.top){
      return null;
    }

    if(this.top === this.bottom){
      this.bottom = null;
    }

    // const temp = this.top;
    // this.top = temp.next;
    this.top = this.top.next

    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Youtube');

myStack.peek();

myStack.pop();
myStack.pop();
