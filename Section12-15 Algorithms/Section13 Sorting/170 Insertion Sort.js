const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//const numbers = [99, 44, 6];

//Use Insertion Sort when you know the list is almost sorted
//and the data set is relevantly small
function insertionSort(array) {
  const length = array.length;
  for(let i=1; i<length; i++){
    //console.log("i: " + i);
    let curr = array[i];

    let placeIndex = i-1;
    while(placeIndex >= 0 && array[placeIndex] >= curr){
      //console.log("placeIndex: " + placeIndex);

      let temp = array[placeIndex];
      array[placeIndex] = array[i];
      array[i] = temp;

      i = placeIndex;

      placeIndex--;
    }
  }

  return array;
}

insertionSort(numbers);
console.log(numbers);
