// linked list 

function LinkedList() { 
    var length = 0; 
    var head = null; 
  
    var Node = function(element){
      this.element = element; 
      this.next = null; 
    }; 
  
    this.size = function(){
      return length;
    };
  
    this.head = function(){
      return head;
    };
  
    this.add = function(element){ // adding tha new node to linkedlist by incrementing the length of linked list 
      var node = new Node(element); 
      if(head === null){    
          head = node;
      } else {
          var currentNode = head;
  
          while(currentNode.next){
              currentNode  = currentNode.next;
          }
  
          currentNode.next = node;
      }
  
      length++;
    }; 
  
    this.remove = function(element){ // remove the node that contain that element 
      var currentNode = head; // passing that element that is to be remove 
      var previousNode; // always start with head and also knowning pervious node  
      if(currentNode.element === element){
          head = currentNode.next;
      } else {
          while(currentNode.element !== element) { // keep finding that node which is to be delete
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
  
          previousNode.next = currentNode.next; // pervious node will point to a node after deleted node
      }
  
      length --;  // decrement ths list 
    };
    
    this.isEmpty = function() {
      return length === 0;
    };
  
    this.indexOf = function(element) {// by passing element finding the indexof that element 
      var currentNode = head;
      var index = -1;
  
      while(currentNode){
          index++;
          if(currentNode.element === element){
              return index;
          }
          currentNode = currentNode.next;
      }
  
      return -1;
    };
  
    this.elementAt = function(index) { // by passing index number going to find that element
      var currentNode = head;
      var count = 0;
      while (count < index){
          count ++;
          currentNode = currentNode.next
      }
      return currentNode.element;
    };
    
    
    this.addAt = function(index, element){ // adding element passing with index 
      var node = new Node(element);
  
      var currentNode = head;
      var previousNode;
      var currentIndex = 0;
  
      if(index > length){
          return false;
      }
  
      if(index === 0){
          node.next = currentNode;
          head = node;
      } else {
          while(currentIndex < index){
              currentIndex++;
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
          node.next = currentNode;
          previousNode.next = node;
      }
      length++;
    }
    
    this.removeAt = function(index) { // passing index  to remove its data 
      var currentNode = head;
      var previousNode;
      var currentIndex = 0;
      if (index < 0 || index >= length){
          return null
      }
      if(index === 0){
          head = currentNode.next;
      } else {
          while(currentIndex < index) {
              currentIndex ++;
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
          previousNode.next = currentNode.next
      }
      length--;
      return currentNode.element;
    }
  
  } 
  
  var conga = new LinkedList();
  conga.add('Kitten');
  conga.add('Puppy');
  conga.add('Dog');
  conga.add('Cat');
  conga.add('Fish');
  console.log(conga.size());  // 5
  console.log(conga.removeAt(3)); // cat is at 3rd position 
  console.log(conga.elementAt(3)); // at 3rd then fish will there after reomving cat 
  console.log(conga.indexOf('Puppy'));// index starts with 0 so puuppy index is 1
  console.log(conga.size());  // by removing one element it will 4