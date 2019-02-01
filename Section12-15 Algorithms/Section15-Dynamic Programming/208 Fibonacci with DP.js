//Time:  O(2^n)
//Space: O(1)
let count = 0;
function fibonacciRecursive(n) {
  count++;
  if(n < 2){
    return n;
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}
console.log("Regular", fibonacciRecursive(10));
console.log("Count: " + count + " times");

//Time:  O(n)
//SPace: O(n)
let countDP = 0;
function fibonacciDP(){
  let cache = {};
  return function fib(n){
    countDP++;
    if(n in cache){
      return cache[n];
    }else{
      if(n < 2){
        return n;
      }else{
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
      }
    }
  }
}
const memoizedFib = fibonacciDP();
console.log("DP ", memoizedFib(100));
console.log("Count DP: " + countDP + " times");

//Bottom Up Approach
function fibonacciDP2(){
  let answer = [0, 1];
  for(let i=2; i<=n; i++){
    answer.push(answer[i-1] + answer[i-2]);
  }
  return answer[n];
}
console.log("DP2", memoizedFib(100));
