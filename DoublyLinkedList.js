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

}

const first = new DoublyLinkedList(10);
first.push(20);
first.push(30);
first.push(40);
first.push(50);
console.log(first);