// create  a stack 
let Stack = function()     // stack  as function 
{
    this.count=0    //variable 1  : count     count how many items are in the stack
  this.storage ={}    //variable 2:storage     storage is an empty object

//add a value onto the end of the  stack 

this.push =function (value)
{
    this.storage[this.count]=value   // given value to count n storage variable
    this.count++                      // count incremented   at all time 
}

//remove and return the value at the end of the satck

this.pop=function()
{
    if(this.count ===0)    // if count is empty then it will return undefined if not decrement the stack 
    {
        return undefined
    }


   this.count--    // count will decerement
    let result =this.storage [this.count]     
    delete this.storage[this.count]
     return result
}



this.size =function()
{
    return this.count   // in count varibale how many items are there
    }


    // return the value at the end of the stack 
    this.peek=function()
{
    return this.storage[this.count-1]    
}
}
let mystack = new Stack()

mystack.push(1)            // stack:    2      last  goes first
mystack.push(2)             //          1       first goes last 
console.log(mystack.peek())   //2
console.log(mystack.pop())    //2
console.log(mystack.peek())    //1

mystack.push("free") 
mystack.push("course")   
mystack.push("of")   
mystack.push("JS")   
console.log(mystack.size())   
console.log(mystack.peek())   
console.log(mystack.pop())   
console.log(mystack.peek())   






