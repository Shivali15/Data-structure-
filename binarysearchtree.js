

//Binary Search Tree 
// here we use classes to create binary  search tree
//every node has only two branches


class Node {    // Node class represent each node innbinary search tree
    constructor(data, left = null, right = null) {
      this.data = data;// 3 properties: data,right,left 
      this.left = left;   // data is to store the actual data to be store in right and  left
      this.right = right;     // that will point right node and left node respectively

    }
  }
  
  class BST {
    constructor() {  // here constructor will  going to create root node of BST 
      this.root = null;  // root node is top of the tree and it starts as null 
    }
    add(data) {
      const node = this.root;  // reference to root node
      if (node === null) {    // if its null   // set the root to new data that we give in Node
        this.root = new Node(data);  
        return;
      } else {
        const searchTree = function(node) {   //recursion function passing root node to thatfunction
          if (data < node.data) {           // if data less than  node.data that 
            if (node.left === null) {     //that means put the node on left side of tree 
              node.left = new Node(data);  // and if it is null then assign node.left to new node 
              return; 
            } else if (node.left !== null) {// but if not null then return to the search tree continue 
              return searchTree(node.left); // continue searching by (recursion) searchTree() where to put the node
            }
          } else if (data > node.data) {  // if data more than node.data then node put in right side of tree
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {  // if is not null then return to search funtion continue search where to put node
              return searchTree(node.right);  // keep on searching 
            }
          } else { // data is not less /more than node.data then that must be equal then it will not add any think to data  to tree
            return null;  // it onlu return null 
          }
        };
        return searchTree(node);
      }
    }





    findMin() {             //minimum value from binary search tree (minimum value in left side)
      let current = this.root;
      while (current.left !== null) {
        current = current.left;
      }
      return current.data;
    }
    findMax() {     // find maxmimum value from binary search tree
      let current = this.root;
      while (current.right !== null) {  // maxmimum value is in right that why search in rightside
        current = current.right;
      }
      return current.data;
    }
    find(data) {          // it check that data is there or not and return that particular 
      let current = this.root;   // it will find out particular data given in find () from searchtree 
      while (current.data !== data) {
        if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
        if (current === null) {
          return null;
        }
      }
      return current;
    }
    isPresent(data) {  // it check that data is there or not if it is there then return true if not it will return false only 
      let current = this.root; // not return  the node it only return true or false whether the data is the tree 
      while (current) {  // perfrom while condition  upto current is !==null 
        if (data === current.data) {  // if both are equal that means we found then it will return true
          return true;
        }
        if (data < current.data) { // if it is not found  then start searching on leftside of tree
          current = current.left; 
        } else {
          current = current.right;  // if it not in left then will search in rght side of tree 
        }
      }
      return false;// if we never find data in tree it will return false value that means not in the tree 
    }
    remove(data) {
      const removeNode = function(node, data) {
        if (node == null) { // firstly it will check tree is empty or not 
          return null;  // node =null that means tree is empty then it will return null 
        }
        if (data == node.data) {  // finding  the data into the tree 
            //if we find the data we have 3 options
                                       // 1- node has no children 
          if (node.left == null && node.right == null) {
            return null;
          }
                                 // 2- node has no left child 
          if (node.left == null) {
            return node.right;
          }
                                // node has no right child 
          if (node.right == null) {
            return node.left;
          }
                                     // 3- node has two children 
          var tempNode = node.right;
          while (tempNode.left !== null) {
            tempNode = tempNode.left;
          }
          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
        } else if (data < node.data) {  // we going left side of tree 
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
      }
      this.root = removeNode(this.root, data);
    }
}
  
  const bst = new BST();
  
  bst.add(4);
  bst.add(2);
  bst.add(6);
  bst.add(1);
  bst.add(3);
  bst.add(5);
  bst.add(7); // 4 2 6 1 3 5 7
  bst.remove(4) //2 6 1 3 5 7
  console.log(bst.findMin()) //1
  console.log(bst.findMax()) //7
  bst.remove(7) //2 6 1 3 5
  console.log(bst.findMax()) //6
  console.log(bst.isPresent(4)) //false:  not 4 is not  return false 
