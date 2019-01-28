let user = {
  age: 24,
  name: 'Kobe',
  magic: true,
  scream: function() {
    console.log('Never!');
  }
};

user.age // O(1)
user.spell = 'LA Lakers'// O(1)
user.scream() // O(1)

user
//{ age: 54,
//   name: 'Kylie',
//   magic: true,
//   scream: [Function],
//   spell: 'abra kadabra' }

/*
Collisions happen to slow down the reading time by O(n/k) --> O(n)
where k is the size of the Hash Table
Solutions: Linked List
*/

//Map --> Gives you some order by inputs
//Set --> No duplicate keys
