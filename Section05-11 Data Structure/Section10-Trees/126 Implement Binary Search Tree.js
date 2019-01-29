class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);

    if(!this.root){
      this.root = newNode;
      return this;
    }else{
      let currNode = this.root;
      while(true){//keep looping till somewhere inside the loop terminate this loop
        if(value < currNode.value){//insert into Left half of BST
          if(!currNode.left){
           currNode.left = newNode;
            return this;
          }
          currNode = currNode.left;
        }else{//insert into Left half of BST
          if(!currNode.right){
            currNode.right = newNode;
            return this;
          }
          currNode = currNode.right;
        }
      }
    }
  }

  lookup(value){//Like Binary Search
    if(!this.root){
      return null;
    }

    let currNode = this.root;
    while(currNode){
      if(value < currNode.value){
        currNode = currNode.left;
      }else if(value > currNode.value){
        currNode = currNode.right;
      }else{
        return currNode;
      }
    }
    return null;
  }

  remove(value){
    if(!this.root){
      return null;
    }

    let currNode = this.root;
    let parentNode = null;

    while(currNode){
      if(value < currNode.value){
        parentNode = currNode;
        currNode = currNode.left;
      }else if(value > currNode.value){
        parentNode = currNode;
        currNode = currNode.right;
      }else{
        //we got the node to be removed

        if(currNode.right === null){//Case1: currNode has NO Right Child
          if(parentNode === null){
            this.root = currNode.left;
          }else{
            if(currNode.value < parentNode.value){
              //currNode is on Left branch of parentNode, currNode.left will be the new parentNode.left after currNode is removed
              parentNode.left = currNode.left;
            }else{
              //currNode is on Right branch of parentNode, currNode.left will be the new parentNode.right after currNode is removed
              parentNode.right = currNode.left;
            }
          }

        }else if(currNode.right.left === null){//Case2: currNode has currNode.right, but currNode.right has NO Left Child of its own
          if(parentNode === null){
            this.root = currNode.left;
          }else{
            currNode.right.left = currNode.left;
            if(currNode.value < parentNode.value){
              //currNode is on Left branch of parentNode, currNode.left will be the new parentNode.left after currNode is removed
              parentNode.left = currNode.right;
            }else{
              //currNode is on Right branch of parentNode, currNode.left will be the new parentNode.right after currNode is removed
              parentNode.right = currNode.right;
            }
          }

        }else if(currNode.right.left !== null){//Case1: currNode has currNode.right, and currNode.right has Left Child of its own

          //find currNode.right's most Left Child
          let leftMost = currNode.right.left;
          let leftMostParent = currNode.right;
          while(leftMost.left !== null){
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          leftMostParent.left = leftMost.right//leftMost has NO more Left Child, assign leftMost.right as leftMostParent.left as leftMost will later replace currNode

          //Replace currNode with leftMost
          leftMost.left = currNode.left;
          leftMost.right = currNode.right;

          if(parentNode === null){
            this.root = leftMost;
          }else{
            if(currNode.value < parentNode.value){
              //currNode is on Left branch of parentNode, currNode.left will be the new parentNode.left after currNode is removed
              parentNode.left = leftMost;
            }else{
              //currNode is on Right branch of parentNode, currNode.left will be the new parentNode.right after currNode is removed
              parentNode.right = leftMost;
            }
          }
        }
        return true;
      }
    }
    return null;
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

tree.lookup(9)

tree.remove(20)

JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
