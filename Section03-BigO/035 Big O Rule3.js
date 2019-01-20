function compressBoxesTwice(boxes){
  boxes.forEach(function(boxes){//O(n)
    console.log(boxes);
  });

  boxes.forEach(function(boxes){//O(n)
    console.log(boxes);
  });
}
//O(n) + O(n) = O(2n) --> O(n)


function compressBoxesTwicePlus(boxes1, boxes2){
  boxes1.forEach(function(boxes){//depedent on size of boxes1 O(a)
    console.log(boxes);
  });

  boxes2.forEach(function(boxes){//depedent on size of boxes2 O(b)
    console.log(boxes);
  });
}
//O(a) + O(b) = O(a+b), these 2 loops are looping through different items
