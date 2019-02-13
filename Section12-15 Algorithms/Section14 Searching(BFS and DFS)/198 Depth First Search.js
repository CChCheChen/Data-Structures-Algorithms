class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value){
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {

            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }

  BreadthFirstSearch(){
    let currNode = this.root;
    let result = [];
    let queue = [];

    queue.push(currNode);

    while(queue.length > 0){
      currNode = queue.shift();//get and remove the 1st element in queue
      //console.log(currNode.value);
      result.push(currNode.value);

      if(currNode.left){
        queue.push(currNode.left);
      }

      if(currNode.right){
        queue.push(currNode.right);
      }
    }
    return result;
  }

  BreadthFirstSearchRecursive(queue, list){
    if(!queue.length){
      return list;
    }

    const currNode = queue.shift();
    list.push(currNode.value);

    if(currNode.left){
      queue.push(currNode.left);
    }

    if(currNode.right){
      queue.push(currNode.right);
    }
    return this.BreadthFirstSearchRecursive(queue, list);
  }

  DFSInOrder(){
    return InOrderHelper(this.root, []);
  }

  DFSPreOrder(){
    return PreOrderHelper(this.root, []);
  }

  DFSPostOrder(){
    return PostOrderHelper(this.root, []);
  }

}

function InOrderHelper(node, list){
  if(!node){return list;}

  InOrderHelper(node.left, list);
  list.push(node.value);
  InOrderHelper(node.right, list);

  return list;
}

function PreOrderHelper(node, list){
  if(!node){return list;}

  list.push(node.value);
  PreOrderHelper(node.left, list);
  PreOrderHelper(node.right, list);

  return list;
}

function PostOrderHelper(node, list){
  if(!node){return list;}

  PostOrderHelper(node.left, list);
  PostOrderHelper(node.right, list);
  list.push(node.value);

  return list;
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
//     9
//  4     20
//1  6  15  170
console.log("BFS: ", tree.BreadthFirstSearch());
//BFS:  [ 9, 4, 20, 1, 6, 15, 170 ]

console.log("BFS Recursive: ", tree.BreadthFirstSearchRecursive([tree.root], []));
//BFS Recursive:  [ 9, 4, 20, 1, 6, 15, 170 ]

console.log("DFS-In Order: ", tree.DFSInOrder());
//DFS-In Order:  [ 1, 4, 6, 9, 15, 20, 170 ]

console.log("DFS-Pre Order: ", tree.DFSPreOrder());
//DFS-Pre Order:  [ 9, 4, 1, 6, 20, 15, 170 ]

console.log("DFS-Post Order: ", tree.DFSPostOrder());
//DFS-Post Order:  [ 1, 6, 4, 15, 170, 20, 9 ]
