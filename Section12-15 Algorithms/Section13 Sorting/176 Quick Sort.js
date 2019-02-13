const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
/*
The most direct competitor of quicksort is heapsort.
Heapsort is typically somewhat slower than quicksort, but the worst-case running time is always Θ(nlogn).
Quicksort is usually faster, though there remains the chance of worst case performance except in the introsort variant,
which switches to heapsort when a bad case is detected. 
If it is known in advance that heapsort is going to be necessary, using it directly will be faster than waiting for introsort to switch to it.
*/

//It is important to pick a proper pivot
function quickSort(array, leftIndex, rightIndex){
  const length = array.length;
  let pivotIndex;
  let partitionIndex;

  if(leftIndex < rightIndex){
    pivotIndex = rightIndex;
    partitionIndex = partition(array, pivotIndex, leftIndex, rightIndex);

    quickSort(array, leftIndex, partitionIndex-1);
    quickSort(array, partitionIndex+1, rightIndex);
  }
  return array;
}

function partition(array, pivotIndex, leftIndex, rightIndex){
  let pivotValue = array[pivotIndex];
  let partitionIndex = leftIndex;

  for(let i=leftIndex; i<rightIndex; i++){
    if(array[i] < pivotValue){
      swap(array, i , partitionIndex);
      partitionIndex++;
    }
  }

  swap(array, rightIndex, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
