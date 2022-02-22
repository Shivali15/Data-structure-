// binary  search tree 
// here we use classes to create binary  search tree

class Node{    // Node class represent each node innbinary search tree
    constructor(data,left=null,right=null){
        this.data = data   // 3 properties: data,right,left 
        this.left =left     // data is to store the actual data to be store in right and  left
        this.right=right   // that will point right node and left node respectively

    }
}
class BST{
    constructor(){    // here constructor will  going to create root node of BST 
        this.root=null   // root node is top of the tree and it starts as null 
    }
    add(data){          
      const node =this.root // reference to root node
          if(node === null )
          {   // if its null   // set the root to new data that we give in Node
            this.root =new Node(data)
            return
           }  else{
            const searchTree =function(node)
            {
                if(data<node.data){
                    if(node.left === null){
                     node.left = new Node(data)
                    return
                    }else if(node.left !== null)
                    {
                    return searchTree(node.left)
                     }
                }
                 else if(data>node.data)
                {
                    if(node.right === null)
                    {
                        node.right =new Node(data)
                        return 
                    }else if (node.right !== null){
                        return searchTree(node.right)
                    }
                }else{
                    return null
                }
            }
            return searchTree(node)
        }

    }
}  