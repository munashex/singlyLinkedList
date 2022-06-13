class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    
    /*
    With pushing, we need to think about popping, deleting the last element. If there is no node, return undefined,
    else, loop through the list until we reach the tail, set the next property of the second last node to be null,
    make the second last to be the tail, don’t forget to decrement the size of the list.
    */
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    /*
    With pushing, we need to think about popping, deleting the last element.
    If there is no node, return undefined, else, loop through the list until we reach the tail, 
    set the next property of the second last node to be null, make the second last to be the tail, 
    don’t forget to decrement the size of the list.
    */
    pop(){
        if(!this.head) return undefined  

        let current = this.head 
        let newTail = current 

        while(current.next){
        newTail = current
        current = current.next
        }
        this.tail = newTail 
        this.tail.next = null
        this.length--
        return current
    }

    
    /*
    For deleting the first element, shifting, as usual, check if the list is empty.
    First, store the current head in a variable, set the head to be the current head’s next,
    decrement the length.
    */
    shift() {
        if(!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next 
        this.length-- 
        if(this.length === 0){
            this.tail = null
        }
        return currentHead
    }
    
    
    /*
    To insert a node at the beginning of the list, check if the list is empty, 
    if not, we set the current head to be the next attribute of the incoming node, 
    increment the size.
    */
    unshift(val){
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        }else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++ 
        return this
    }
    
    /*
    Even though linked list doesn’t have indexes, we are still able to find the node by given index.
    First make sure the given index is greater than zero and smaller or equal to the length of the list. 
    Than we loop through the list until we reach the index.
    */
    get(index) {
        if(index < 0 || index >= this.length) null 

        let counter = 0 
        let current = this.head 
        while(counter !== index){
         current= current.next,
         counter++
        }
        return current
    }
    
    /*
    What if we want to change a node in our list? We find the node with get(), and set the node with given data.
    */

  set(index, val) {
      let foundNode = this.get(index) 

      if(foundNode) {
          foundNode.val = val 
          return true
      }
      return false
  }
    
   /*
   When we want to insert a new node into the list, first check if the index is greater than 0 and smaller than the length.
   If index is the length, we just use push(), if the index is 0, we use unshift().
   For other indexes, we need to get the node at the index-1, and set the next property of that node to be the new node, 
   and the next property of the new node to be the previous next property, then we increment the length.
 */
    
      insert(index, val){
if(index < 0 || index > this.length) return null 
if(index === this.length) return this.push(val)
if(index === 0) return this.unshift(val)


let newNode = new Node(val) 
let prev = this.get(index - 1)
let temp = prev.next 
prev.next = newNode
newNode.next = temp 
this.length++ 
return true
    }
    
    /*
    Unlike pop and unshift, remove function will remove the node by given index. As usual, check if the index is valid,
    if index equals to length-1 or 0, use pop or shift.
    Otherwise, we get the node at the index-1, set the next property on
    that node to be the next of the next property, after, we decrement the size.
    */

    remove(index) {
        if(index  < 0 || index >= this.length) return null
        if(index === 0) return this.shift() 
        if(index === this.length - 1) return this.pop() 

       var prevNode = this.get(index - 1) 
       var removed = prevNode.next 
       prevNode.next = removed.next 
       this.length--
       return removed
        
    }
    
    
    /*  
    The ultimate reverse question! 
    How do we reverse the list? First, we swap head and tail, declare next and previous, 
    set the previous as null. We loop through the list.
    */
    reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
}



var list = new SinglyLinkedList()
list.unshift("munashe")
list.unshift("madhuna")
console.log(list)
