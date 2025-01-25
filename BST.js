class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null;
  }

  insert(val){
    const newNode = new Node(val);
    if(this.root === null){
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while(true){
      if(newNode.val === temp.val) return undefined;
      if(newNode.val < temp.val){
        if(temp.left === null){
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      }
      else{
        if(temp.right === null){
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

find(val){
  if(this.root === null){
    return false;
  }
  let temp = this.root;
  while(temp){
    if(val < temp.val){
      temp = temp.left;
    }
    else if(val > temp.val){
      temp = temp.right;
    }
    else{
      if(val === temp.val){
        return true;
      }
      return false;
    }
  }
}

BFS(){
  let currentNode = this.root;
  let queue = [];
  let results = [];
  queue.push(currentNode);
  while(queue.length){
    currentNode = queue.shift()
    results.push(currentNode.val);
    if(currentNode.left) {
      queue.push(currentNode.left);
    }
    if(currentNode.right){
      queue.push(currentNode.right);
    }
  }
  return results;
}
DFSPreOrder(){
  let result = [];
  function traverse(currentNode){
    result.push(currentNode.val);
    if(currentNode.left) traverse(currentNode.left);
    if(currentNode.right) traverse(currentNode.right);
  }
  traverse(this.root);
  return result;
}


DFSPostOrder(){
  let result = [];
  function traverse(currentNode){
    if(currentNode.left) traverse(currentNode.left);
    if(currentNode.right) traverse(currentNode.right);

    result.push(currentNode.val)
  }
  traverse(this.root);
  return result;
}



DFSInOrder(){
  let result = [];
  function traverse(currentNode){
    if(currentNode.left) traverse(currentNode.left);
    result.push(currentNode.val);
    if(currentNode.right) traverse(currentNode.right);
  }
  traverse(this.root);
  return result;
}

}

let first = new BST();
first.insert(100);
first.insert(90);
first.insert(150);
first.insert(80);
first.insert(95);
// console.log(first.find(95));
// console.log(first.find(10000));
// console.log(first);
//console.log(first.BFS())
console.log(first.DFSPreOrder());
console.log(first.DFSPostOrder());
console.log(first.DFSInOrder())