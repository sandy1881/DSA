class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor(val){
    const newNode = new Node(val);
    this.top = newNode;
    this.length = 1;
  }

  push(val){
    const newNode = new Node(val);
    if(this.length=== 0){
      newNode = this.top;
    }
    else{
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(this.length === 0)return undefined;
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

let first = new Stack(1);
first.push(2);
first.push(3);
first.push(4);
first.push(5);
first.pop();
console.log(first);