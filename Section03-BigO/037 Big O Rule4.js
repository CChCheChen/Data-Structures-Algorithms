function printAllNumbersThenAllPairSums(numbers) {

  console.log('these are the numbers:');//O(1)

  numbers.forEach(function(number) {//O(n)
    console.log(number);//O(1)
  });

  console.log('and these are their sums:');//O(1)

  numbers.forEach(function(firstNumber) {//O(n)
    numbers.forEach(function(secondNumber) {//O(n)
      console.log(firstNumber + secondNumber);//O(1)
    });
  });
}

//O(1) + O(n)*O(1) + O(1) + O(n)*O(n)*O(1) = O(2) + O(n) + O(n^2) = O(n^2)
//as O(2) and O(n) are Non-Dominants, will be dropped

printAllNumbersThenAllPairSums([1,2,3,4,5])
