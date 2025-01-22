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
}

const first = new DoublyLinkedList(10);
console.log(first);