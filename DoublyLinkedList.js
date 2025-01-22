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
  shift(){
    if(!this.head) return undefined;
    let temp = this.head;
    if(this.length===1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index){
    if(index <0 || index > this.length-1) return undefined;
    let temp = this.head;
    if(index < this.length/2){
      for(let i =0;i<index;i++){
        temp =temp.next;
      }
    }
    else{
      temp = this.tail;
      for(let i = this.length-1;i>index;i--){
        temp = temp.prev;
      }
    }
    return temp;
  }
  set(index,val){
    let temp = this.get(index);
    if(temp){
      temp.val = val;
    }
  }

  insert(index,val){
    if(index===0)return this.unshift(val);
    if(index=== this.length) return this.push(val);
    const newNode = new Node(val);
    let before = this.get(index-1);
    let after = before.next;
    before.next = newNode;
    newNode.prev = before;
    after.prev = newNode;
    newNode.next = after;
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
first.shift();
first.get(1);
first.set(2,20)
first.insert(2,2000)
console.log(first);