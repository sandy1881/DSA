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
enqueue(val){
  const newNode = new Node(val);
  if(this.length === 0){
    this.first = newNode;
    this.last = newNode;
  }else{
    this.last.next = newNode;
    this.last = newNode;
  }
  this.length++;
  return this;
}

dequeue(){
  if(this.length === 0)return undefined;
  let temp = this.first;
  if(this.length=== 1){
    this.first = null;
    this.last = null;
  }else{
    this.first = this.first.next;
    temp.next = null;
  }
  this.length--;
  return temp;
}

}

const first = new Queue(1);
first.enqueue(2);
first.enqueue(3);
first.enqueue(4);
first.enqueue(5);
console.log(first);
console.table(first.dequeue())
console.table(first)
