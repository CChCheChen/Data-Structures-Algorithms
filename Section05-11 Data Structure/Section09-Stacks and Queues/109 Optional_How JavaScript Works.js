//JS is a Single-Threaded language but can be NON-BLocking

const a = 1;
const b = 10;
const c = 100;
//all the variables created above will fill up the Memory Heap if enough created

console.log('1');//Place into Call Stack first, executed first and return output
console.log('10');//Place into Call Stack second, executed second after previous call is returned and return output
console.log('100');//Place into Call Stack third, executed third after previous call is returned and return output

const one = () =>{
  const two = () =>{
    console.log('LOL');
  }
  two();
}
one();
//The Call Stack:
//1. console.log('LOL');
//2. two();
//3. one();

//Recursion: sometimes create Stack Overflow
function foo(){
  foo();
}
foo();

//Asynchronous
console.log('1');
setTimeout(() => {
  console.log('10');
}, 5000)
console.log('100');
