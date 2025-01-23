class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(val){
    const newNode = new Node(val);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;

  }
}

const first = new Queue(1);

console.log(first);
//console.table(first)