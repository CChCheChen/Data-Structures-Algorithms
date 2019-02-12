const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//For each iteration, find the smallest of the remaining array, swap it with the first element of the remaining array before doing next iteration
function selectionSort(array) {
  const length = array.length;
  for(let i=0; i<length; i++){
    let minIndex = i;
    let temp = array[i];

    for(let j=i+1; j<length; j++){
      if(array[j] < array[minIndex]){
        minIndex = j;
      }
    }

    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

selectionSort(numbers);

//[ 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283 ]
console.log(numbers);
