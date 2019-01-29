class Stack {
  constructor(){
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1]
  }
  push(value){
    this.array.push(value);
    return this;
  }
  pop(){
    this.array.pop();//pop() removes the last element
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
