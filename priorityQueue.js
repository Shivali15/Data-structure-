function priorityQueue()
{
    var collection =[]
    this.printcollection =function()
    {
        (console.log(collection))
    }
    this.enqueue =function(element)   // in priority queue enqueue is first going to check
 //  if queue is empty or not , if is empty push element
//   if it is not empty it check priorities to see to put the element 
    {
        if (this.isEmpty())
        {
            collection.push(element)
        }
        else{
            var added=false
            for(let i=0;i<collection.length;i++){ //for loop each elment priorities
                if(element[1]<collection[i][1]){
                collection.splice(i,0,element)
                added=true
                break
            }
        }
        if(!added){
            collection.push(elment)
        }

    }
    }

    this.dequeue=function()
    {
        var value =collection.shift()
        return value[0]
    }
    this.front=function()
    {
     
        return collection[0]
    }
    this.size=function()
    {
        
        return collection.length
    }

    this.isEmpty=function()
    {
        
        return (collection.length ===0)
    }


}

var pq =new priorityQueue()
pq.enqueue(['bella ',2])   // passing the element of array    n then  priority number to it
pq.enqueue(['tom ',3])
pq.enqueue(['snipper ',1])
pq.printcollection()
pq.dequeue()
pq.printcollection()
