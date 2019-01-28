//10 --> 5 --> 16
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;//point tail node at current head node
    this.length = 1;//keep track of the length
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;//point the tail node to the newNode for next operation

    this.length++;
    return this;
  }

  prepend(value){
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;
    return this;
  }

  insert(index, value){
    if(index >= this.length){
      return this.append(value);
    }

    const newNode = new Node(value);

    const pre = this.traverseToIndex(index-1);
    const post = pre.next;
    newNode.next = post;
    newNode.prev = pre;
    pre.next = newNode;
    post.prev = newNode;

    this.length++;

    return this;
  }

  remove(index){
    if(index >= this.length){
      return this;
    }

    const pre = this.traverseToIndex(index-1);
    const post = pre.next.next;
    pre.next = post;
    post.prev = pre;

    this.length--;

    return this;
  }

  traverseToIndex(index){
    let curr = this.head;
    let currIndex = 0;

    while(currIndex !== index){
      curr = curr.next;
      currIndex++;
    }

    return curr;
  }

  printList(){
    const array = [];
    let curr = this.head;
    while(curr !== null){
      array.push(curr.value);
      curr = curr.next;
    }
    return array;
  }
}

let myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(0);

myLinkedList.insert(2, 13);
myLinkedList.insert(16, 34);

myLinkedList.remove(1);
myLinkedList.remove(10);

myLinkedList.printList();
