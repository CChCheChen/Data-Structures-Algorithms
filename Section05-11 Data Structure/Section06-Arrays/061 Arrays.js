const strings = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4, 5];

// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

//Access: Get element at specific index
//O(1)
string[1]

//Push: Add element at the end of array
//O(1)
strings.push('e'); //strings = [ 'a', 'b', 'c', 'd', 'e']

//Pop: Remove the last element of Array
//O(1)
strings.pop(); //strings = [ 'a', 'b', 'c', 'd']
strings.pop(); //strings = [ 'a', 'b', 'c']

//Unshift: Add element at the beginning of array
//O(n) because indexes will be re-assigned for all original elements
strings.unshift('x') //strings = [ 'x', 'a', 'b', 'c']

//Splice(Starting Index, Delete Count, Added Items):  Add/Remove element at specific iondex of array
//O(n) because indexes will be re-assigned for all original elements after specific index
strings.splice(2, 0, 'CL') //strings = [ 'x', 'a', 'CL', 'b', 'c' ]
strings.splice(2, 1, 'XJB') //strings = [ 'x', 'a', 'XJB', 'b', 'c' ]
strings.splice(2, 2, 'MD') //strings = [ 'x', 'a', 'MD', 'c' ]

console.log(strings)
