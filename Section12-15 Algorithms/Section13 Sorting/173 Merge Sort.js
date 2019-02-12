const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const midIndex = array.length/2;
  const left = array.slice(0, midIndex);
  const right = array.slice(midIndex);
  // console.log('left:', left);
  // console.log('right:', right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  // console.log();
  // console.log('left:', left);
  // console.log('right:', right);

  if(null === left){
    return right;
  }

  if(null === right){
    return left;
  }

  let indexLeft = 0;
  let indexRight = 0;
  const newArray = [];

  while(indexLeft<left.length && indexRight<right.length){
    if(left[indexLeft] < right[indexRight]){
      newArray.push(left[indexLeft]);
      indexLeft++;
    }else{
      newArray.push(right[indexRight]);
      indexRight++;
    }
  }
  // console.log("newArray: ", newArray.concat(left.slice(indexLeft)).concat(right.slice(indexRight)));
  return newArray.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}


const answer = mergeSort(numbers);
console.log(answer);
