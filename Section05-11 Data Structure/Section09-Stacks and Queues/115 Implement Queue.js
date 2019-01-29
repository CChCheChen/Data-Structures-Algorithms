class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value){
    const temp = new Node(value);
    if(this.length === 0){
      this.first = temp;
      this.last = temp;
    }else{
      this.last.next = temp;
      this.last = temp;
    }

    this.length++;
    return this;
  }

  dequeue(){
    if(!this.first){
      return null;
    }

    if(this.first === this.last){
      this.last = null;
    }

    this.first = this.first.next;

    this.length--;
    return this;
  }

}

const myQueue = new Queue();

myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');

myQueue.peek();

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
