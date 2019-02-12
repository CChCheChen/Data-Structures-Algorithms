const letters = ["a", "d", "z", "e", "r", "b"];
const numbers = [2, 65, 34, 2, 1, 7, 8];

letters.sort(); //[ 'a', 'b', 'd', 'e', 'r', 'z' ]

numbers.sort(); //[ 1, 2, 2, 34, 65, 7, 8 ] this is NOT sorted, because JavaScript consider int as String to compare the Char at Index 0

console.log('65'.charCodeAt(0));//65->"65"->Char at Index is 6->return the UniCode as 54
console.log('34'.charCodeAt(0));//34->"34"->Char at Index is 3->return the UniCode as 51, before 54
console.log('7'.charCodeAt(0));//7->"7"->Char at Index is 7->return the UniCode as 55, after 54

numbers.sort(function(a, b){
  return a - b;
});//[ 1, 2, 2, 7, 8, 34, 65 ]

const spanish = ['único', 'árbol', 'cosas', 'fútbol'];
spanish.sort(); //[ 'cosas', 'fútbol', 'árbol', 'único' ]
spanish.sort(function(a, b){
  return a.localeCompare(b);
});//[ 'árbol', 'cosas', 'fútbol', 'único' ]
