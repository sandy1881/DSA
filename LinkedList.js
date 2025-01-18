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
  pop(){
    if(!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while(temp.next){
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if(this.length == 0){
      this.head = 0;
      this.tail = 0
    }
    return this;
  }
  unshift(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

let one = new  SinglyLinkedList(10);
one.push(20);
one.push(30);
one.push(40);
one.pop()
one.unshift(1)

console.log(one)