// What is the Big O of the below function?
//(Hint, you may want to go line by line)

function funChallenge(input) {
  let a = 10;//O(1)
  a = 50 + 3;//O(1)

  for (let i = 0; i < input.length; i++) {//O(n)
    anotherFunction();//O(1): assume this is constant runtime O(1)
                      //if this runs at O(n^2), then the total time Complexity is O(n^3)
    let stranger = true;//O(1)
    a++;//O(1)
  }

  return a;//O(1)
}

//Time Complexity
// = O(1) + O(1) + O(n)*[O(1) + O(1) + O(1)] + O(1)
// = O(3) + O(3n)
// = O(3 + 3n)
// = O(n)
