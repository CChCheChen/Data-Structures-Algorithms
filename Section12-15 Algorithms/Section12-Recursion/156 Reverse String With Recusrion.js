//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
  let arrayStr = str.split("");
  let reversedStr = [];

  while(arrayStr.length > 0){
    reversedStr.push(arrayStr.pop());
  }

  return reversedStr.join("");
}

//reverseStringIterative('CHEN LIN')

function reverseStringRecursive(str) {
  if(str === ""){
    return "";
  }else{
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive('WINNI XU')
