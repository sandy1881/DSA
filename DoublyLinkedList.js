class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(val){
    const newNode = new Node(val);
    this.head = newNode;
    this.tail = newNode;
  }
  
  push(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  pop(){
    if(!this.head )return undefined;
    let temp = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

}

const first = new DoublyLinkedList(10);
first.push(20);
first.push(30);
first.push(40);
first.push(50);
first.pop()
first.unshift(1);
console.log(first);