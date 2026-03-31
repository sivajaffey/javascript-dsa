// javascript data structure
class Node { // main class
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// SingleLinkedList 
class SingleLinkedList {
  constructor() { // creating variables
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {  // array push event adds value to the array at last
    var newNode = new Node(val);
    if (!this.head) { //if head value doesn't exist set head and tail value
      this.head = newNode;
      this.tail = newNode;
    } else { // else set new tail value using next newNode and set tail value
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++; // increment length
    return this; 
  }
  pop() { // removes values from array at last
    if (!this.head) {//if head value doesn't exist return undefined
      return undefined
    }
    var current = this.head; // create new variable to return the current value set head value
    var newTail = current; // create new tail variable to set last value;
    while(current.next) { // update current and newtail using while
      newTail = current;
      current = current.next;
    }
    this.tail =newTail; // update newtail to tail
    this.tail.next = null; // set next to null
    this.length--;
    if (this.length ==0 ) { // if length is 0, set head and tail to null as in array there is no value
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() { // removes values from array from first
    if (!this.head) {//if head value doesn't exist return undefined
      return undefined
    }
    var current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index == 0 || index >= this.length){
      return null;
    }
    var counter = 0;
    var current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) { // replaces the index value
    var node = this.get(index);
    if (node) {
      node.val = val;
      return node;
    }
    return false
  }
  insert(index, val) {
      if (index < 0 || index > this.length) {
        return false;
      }
      if (index == this.length) {
        return !!this.push(val) // !! added to return boolean value true  else returns node
      }
      if (index == 0) {
        return !!this.unshift(val) // !! added to return boolean value true else returns node
      }
      var newNode = new Node(val);
      var prevNode = this.get(index-1);
      var restNode = prevNode.next;
      prevNode.next = newNode;
      newNode.next = restNode;
      this.length++;
      return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
        return undefined;
      }
      if (index == 0) {
        return this.shift();
      }
      if (index == this.length-1) {
        return this.pop()
      }
      var prevNode = this.get(index-1);
      var removed = prevNode.next;
      prevNode.next = removed.next;
      this.length--;
      return removed
  }
  reverse() {
    var node = this.head; // creating temp head value 
    // swapping head and tail
    this.head = this.tail; 
    this.tail = node;
    // creating next and tail variables
    var next;
    var prev = null;
    for(let i=0;i<this.length;i++) {
      next = node.next; // stores node.next value in next
      node.next = prev; // stores node.next to prev its null initially
      prev = node // restores prev to node
      node = next // sets the next to node
    }
    return this
  }
  print() { // prints the array values
    let arr = []
    var current = this.head;
    while(current) {
      arr.push(current.val);
      current = current.next
    }
    return arr;
  }
}
let lst = new SingleLinkedList();
console.log(lst.push('1'))
console.log(lst.push('2'))
console.log(lst.push('3'))
console.log(lst.push('4'))
console.log(lst.push('5'))
console.log(lst)
console.log(lst.pop())
console.log(lst.pop())
console.log(lst.pop())
console.log(lst)
console.log(lst.shift())
console.log(lst.shift())
console.log(lst.shift())
console.log(lst)
console.log(lst.unshift('2'))
console.log(lst.unshift('3'))
console.log(lst.unshift('4'))
console.log(lst)
console.log(lst.get(6))
console.log(lst.get(2))
console.log(lst)
console.log(lst.set(2,10))
console.log(lst)
console.log(lst.insert(0,"starts"))
console.log(lst.insert(3,"midd"))
console.log(lst.get(3))
console.log(lst)
console.log(lst.remove(0))
console.log(lst.remove(2))
console.log(lst)
console.log(lst.print())
console.log(lst.reverse())
console.log(lst)
console.log(lst.print())