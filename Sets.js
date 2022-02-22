function myset()
{
    //the variable store the set 
    var collection =[]
    //this method will check for the persence of an element and return true or false
    this.has=function(element)
    {
        return (collection.indexOf(element)  !== -1)
    }
    //this method will retuen all the values in the set 
    this.values=function(){
        return collection
    }
    //this method  will add an element to the element
    this.add=function(element)
    {
        if(!this.has(element)){
            collection.push(element)
            return true
        }
        return false
    }
    //this method will remove an element from set
    this.remove=function(element)
    {
        if(!this.has(element)){
            index=collection.indexOf(element)
            collection.splice(index,1)  // take out /remove  one (1) element  starting at index of element
            return true
        }
        return false  // if that element is not in collection return false
    }
    //this method will return the size of the collection
    this.size=function()
    {
        return collection.length
    }
    //this method will return the union of two sets 
    this.union=function(otherset){
        var unionset =new myset()     // union means combine two sets
        var firstset =this.values()
        var secondset =otherset.values()
        firstset.forEach(function(e){   // for each value in that set union will perform 
            unionset.add(e)
        })

        secondset.forEach(function(e){
            unionset.add(e)
        })
       return  unionset
    }
    //this  method will return the intersection of two sets as a new set
    this.intersection =function(otherset)
    {
        var intersectionSet =new myset()
        var firstset =this.values()  
        firstset.forEach(function(e){    // for each value in the first we will check that if other set
            if(otherset.has(e)){            // has same value 
                intersectionSet.add(e)      // if it is persent then we will add and return intersection set
            }
        })
        return intersectionSet
    } 
    //this method will return the diiference of two sets as a new set
    this.differnce =function(otherset){      // all the item that are in one set but not in other set
        var differenceSet =new myset()
        var firstset =this.values()
        firstset.forEach(function(e){
            if(!otherset.has(e)){  // if value is not in that set then we will add that to variable differnset 
                differenceSet.add(e)
            }
        })
        return differenceSet
    } 
    //this method will tset if the set is a subset of a different set 
    this.subset=function(otherset){   //check the first set is completely contained within the second set
        var firstset = this.values()
        return firstset.every(function(value){ // every method will test all elements in 
            return otherset.has(value)  // 1st set are they in 2nd set 
             
        })
    }
}

var setA =new myset()
var setB =new myset()
setA.add("a")
setB.add("b")
setB.add("c")
setB.add("a")
setB.add("d")
console.log(setA.subset(setB))     
console.log(setA.intersection(setB).values())

