// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

//O(n)
function findFactorialRecursive(number) {
  if(number === 2){
    return 2;
  }

  return number * findFactorialRecursive(number - 1);
}
findFactorialRecursive(5)

//O(n)
function findFactorialIterative(number) {
  if(number === 2){
    return 2;
  }

  let curr = 1;
  let answer = 1;

  while( curr <= number ){
    answer = answer * curr;
    curr++;
  }

  return answer;
}
findFactorialIterative(6)
