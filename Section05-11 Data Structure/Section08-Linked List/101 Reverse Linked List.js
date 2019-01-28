// add a method reverse() to the linked list that reverses the entire list of nodes
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;//point tail node at current head node
    this.length = 1;//keep track of the length
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;//point the tail node to the newNode for next operation
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value){
    if(index >= this.length){
      return this.append(value);
    }

    const newNode = new Node(value);

    const curr = this.traverseToIndex(index-1);
    newNode.next = curr.next;
    curr.next = newNode;

    this.length++;

    return this;
  }

  remove(index){
    if(index >= this.length){
      return this;
    }

    const pre = this.traverseToIndex(index-1);
    pre.next = pre.next.next;

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

  reverse() {
    if(!this.head.next){
      return this.head;
    }

    let pre = null;//make a pre node pointing to null, as linked list tail node's next is null
    let curr = this.head;

    this.tail = curr;//point tail node to the current head

    while(curr){
      const temp = curr.next;

      curr.next = pre;
      pre = curr;
      curr = temp;
    }

    this.head = pre;//point the head node to which pre is pointing right now, after the while loop

    return this;
  }
}

let myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(0);

myLinkedList.insert(2, 13);
myLinkedList.insert(16, 34);

myLinkedList.remove(1);
myLinkedList.remove(10);

myLinkedList.printList();

myLinkedList.reverse();

myLinkedList.printList();
