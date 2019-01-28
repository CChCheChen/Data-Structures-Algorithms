class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  //Hash Function
  //"_" mean this is a private property, while you can still access it outside of the class
  _hash(key) {//O(1)
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value){//O(1)
    let address = this._hash(key)
    if(!this.data[address]){//avoiding hash collision
      this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
  }

  get(key){//O(1) without NO collosions --> O(n) for worst case
    let address = this._hash(key)
    const currentBucket = this.data[address]
    //console.log(currentBucket)

    if(currentBucket){
      for(let i=0; i<currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }

  keys(){//loop through all keys in Hash Table
    const keys = []
    for(let i=0; i<this.data.length; i++){
      if(this.data[i]){
        keys.push(this.data[i][0][0])
      }
    }
    return keys
  }

}

// const myHashTable = new HashTable(2);
// myHashTable.set('apples', 10000)
// myHashTable.set('grapes', 10000)

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 999)
myHashTable.get('apples')
myHashTable.set('oranges', 888)
myHashTable.set('pears', 777)
myHashTable.set('pineapples', 666)
myHashTable.keys()
