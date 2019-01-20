//Log all pairs of array

const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {//O(n)
    for (let j = 0; j < array.length; j++) {//O(n)
      console.log(array[i], array[j])
    }
  }
}
//O(n) * O(n) = O(n^2) --> Quadratic Time

logAllPairsOfArray(boxes)

function compressBoxesTwicePlus(boxes1, boxes2){
  boxes1.forEach(function(boxes){//depedent on size of boxes1 O(a)
    console.log(boxes);

    boxes2.forEach(function(boxes){//depedent on size of boxes2 O(b)
      console.log(boxes);
    });
    
  });
}
//O(a) * O(b) = O(a*b)
