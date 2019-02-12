const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Each iteration bubbles the largest one to the Right end of the array
function bubbleSort(array) {
  const length = array.length;
  for(let i=0; i<length; i++){
    for(let j=0; j<length; j++){
      if(array[j] > array[j+1]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
}

//Each iteration bubbles the smallest one to the Left end of the array
function bubbleSort2(array) {
  for(let i=0; i<array.length-1; i++){
    for(let j=i+1; j<array.length; j++){
      if(array[i] <= array[j]){
        continue;
      }else{
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}

//bubbleSort(numbers);
bubbleSort2(numbers);

//[ 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283 ]
console.log(numbers);
