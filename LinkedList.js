class Node{
  constructor(val){
      this.val =val;
      this.next = null
  }
}


class SinglyLinkedList{
  constructor(val){
      const newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
  }
}

let one = new  SinglyLinkedList(10);