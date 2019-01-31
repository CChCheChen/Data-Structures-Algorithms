// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

//O(n)
function fibonacciIterative1(n){
  let pre = 0;
  let curr = 1;

  if(n === 0){
    return 0;
  }

  if(n === 1){
    return 1;
  }

  for(let i=2; i<=n; i++){
    let temp = pre;
    pre = curr;
    curr = curr + temp;
  }

  return curr;
}

// let i = 0;
// while(i <= 10){
//   console.log(fibonacciIterative1(i));
//   i++;
// }

//O(n)
function fibonacciIterative2(n){
  let arr = [0, 1]

  for(let i=2; i<=n; i++){
    arr.push(arr[n-1] + arr[n-2]);
  }

  return arr[n];
}

// let i = 0;
// while(i <= 13){
//   console.log(fibonacciIterative1(i));
//   i++;
// }

//O(2^n)
function fibonacciRecursive(n) {
  if(n < 2){
    return n;
  }

  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

// let i = 0;
// while(i <= 30){
//   console.log(fibonacciRecursive(i));
//   i++;
// }

// fibonacciRecursive(99);
