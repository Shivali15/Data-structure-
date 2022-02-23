// hash tables 
  

//hash function : passing in string and max :is the no. of buckets that weare using in our hash table to stores 
var hash = (string, max) => {   
    var hash = 0;      // firstly hash will be zero 
    for (var i = 0; i < string.length; i++) {    // each character in string 
      hash += string.charCodeAt(i); // each string character has a numerical value associated with it 
    }// adding character codes for each character in string and put into hash 
    return hash % max;   // divide by  no. of buckets and return remainder 
//  if  suppose bucket is of 5 if we divide by 5 remainder will be 0,1,2,3,4 <-this would be index of array

  };
  
  let HashTable = function() {
  
    let storage = [];   // all data will store here
    const storageLimit = 14; // no.of buckets in array limit set for storageof data in bucket
    
    this.print = function() {
      console.log(storage)  //log storage items
    }
  
    this.add = function(key, value) {  // adding info by passing key and value (data to be store )
      var index = hash(key, storageLimit);   // verfiy the index for that data 
      if (storage[index] === undefined) {  // if index is not there then that will undefined 
        storage[index] = [   // will set index 
          [key, value]
        ];
      } else {
        var inserted = false; // if index is there then assign to false 
        for (var i = 0; i < storage[index].length; i++) { // iterate to that index and assign key value to thatindex 
          if (storage[index][i][0] === key) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted === false) {  // if does not exists then insert false
          storage[index].push([key, value]); // push new item //enteries into one bucket 
        }
      }
    };
  
    this.remove = function(key) {  // remove item from hash table 
      var index = hash(key, storageLimit);  // pass key of  which data is to remove 
      if (storage[index].length === 1 && storage[index][0][0] === key) { 
        delete storage[index];
      } else {
        for (var i = 0; i < storage[index].length; i++) { // go through each bucket items 
          if (storage[index][i][0] === key) {  // zero index is the key ,1 index is the value
            delete storage[index][i];
          }
        }
      }
    };
  
    this.lookup = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        return undefined; // item is not in the table return undefined  
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            return storage[index][i][1];
          }
        }
      }
    };
  
  };
  
  
  console.log(hash('quincy', 10)) // 0-9 no. will be all time 
  
  let ht = new HashTable();
  ht.add('beau', 'person');
  ht.add('fido', 'dog');
  ht.add('rex', 'dinosour');
  ht.add('tux', 'penguin')
  console.log(ht.lookup('tux'))
  ht.print();