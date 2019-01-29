// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.

// Example:
// MyQueue queue = new MyQueue();
// queue.push(1);
// queue.push(2);
// queue.peek();  // returns 1
// queue.pop();   // returns 1
// queue.empty(); // returns false
// Notes:

// You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
// You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

class QueueByStack {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const preLength = this.first.length;
    for(let i=0; i<preLength; i++){
      this.last.push(this.first.pop());
    }

    this.first.push(value);

    for(let i=0; i<preLength; i++){
      this.first.push(this.last.pop());
    }
    return this;
  }

  dequeue() {
    this.first.pop();//pop() removes the last element
    return this;
  }

  peek() {
    return this.first[this.first.length - 1];
  }
}

const myQueue = new QueueByStack();

myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');

myQueue.peek();

myQueue.dequeue();
myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
