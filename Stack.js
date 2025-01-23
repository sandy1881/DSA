class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor(val){
    const newNode = new Node(val);
    this.top = newNode;
    this.length = 1;
  }

  push(val){
    const newNode = new Node(val);
    if(this.length=== 0){
      newNode = this.top;
    }
    else{
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
}

let first = new Stack(1);
first.push(2);
first.push(3);
first.push(4);
first.push(5);

console.log(first);