//Queues

function Queue()
{
    collection =[]   // collect all the items in queue
    this.print=function(){
        console.log(collection)
    }
    this.enqueue =function(element)  // push firstitem onto the queue 
    {
        collection.push(element)
    }
    this.dequeue =function()    // remove firstitem off the queue
    {
        return collection.shift()  // .shift() pull off the firstitem of the queue
    }
    this.front  =function() // return the first item in queue without remove any items from queue
    {
        return collection[0]  // return item at the 0 index of the collectin array/queue
    }
    this.size =function()
    {
        return collection.length  // length of array will be return 
    }
    this.isEmpty =function()
    {
        return (collection.length===0)  // check if it is empty or not 
    }
}

var q=new Queue()
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.print()
q.dequeue()
console.log(q.front())   //b 
q.print()