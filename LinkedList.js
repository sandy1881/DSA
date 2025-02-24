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
    }
      else{
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }
  pop(){
      if(!this.head) return undefined;
      let temp = this.head;
      let pre = this.head;
      while(temp.next){
          pre = temp;
          temp = temp.next
      }
      this.tail = pre;
      this.tail.next=null;
      this.length--;
      if(this.length== 0){
          this.head = null;
          this.tail = null;
      }
      return this;
  }
  unshift(val){
      const newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
  }
  shift(){
      if(this.head == 0) return undefined;
      let temp = this.head;
      this.head = this.head.next;
      temp.next =null;
      this.length--;
      if(this.head==0){
          this.head = null;
          this.tail = null;
      }
      return temp;
  }
  get(index){
      if (index <0 || index>= this.length) return undefined;
      let temp = this.head;
      for(let i=0;i<index;i++){
          temp=temp.next;

      }
      console.log(temp);
      return temp;
      
  }
  set(index,val){
      let temp = this.get(index);
      if(temp){
          temp.val = val;
          return true;
      }
      return false;
  }

insert(index,val){
      if(index===0) return this.unshift(val);
      if(index===this.length) return this.push(val);
      if(index<0 || index > this.length) return false;
      const newNode = new Node(val);
      const temp = this.get(index-1);
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
  }
  remove(index){
    if(index===0)return this.shift();
    if(index === this.length-1)return this.pop();
    if(index<0|| index>=this.length) return undefined;

    let before = this.get(index-1);
    let temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;

    return temp;
  }

  reverse(){
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;
    let prev = null;

    for( let i =0; i<this.length;i++){
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

let one = new  SinglyLinkedList(10);
one.push(20);
one.push(30);
one.push(40);
one.pop();
one.unshift(1);
one.shift();
one.get(2);
one.set(0,100);
one.insert(2,2000)
one.remove(1)
one.reverse()