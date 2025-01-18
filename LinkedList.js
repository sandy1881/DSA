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
  push(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;

    }this.length++;
    return this;
  }
}

let one = new  SinglyLinkedList(10);
one.push(20)

console.log(one)