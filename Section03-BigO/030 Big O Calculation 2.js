// What is the Big O of the below function?
//(Hint, you may want to go line by line)

function anotherFunChallenge(input) {
  let a = 5;//O(1)
  let b = 10;//O(1)
  let c = 50;//O(1)

  for (let i = 0; i < input; i++) {//O(n)
    let x = i + 1;//O(1)
    let y = i + 2;//O(1)
    let z = i + 3;//O(1)

  }
  for (let j = 0; j < input; j++) {//O(n)
    let p = j * 2;//O(1)
    let q = j * 2;//O(1)
  }
  let whoAmI = "I don't know";//O(1)
}

//Time Complexity
// = O(1) + O(1) + O(1) + O(n)*[O(1) + O(1) + O(1)] + O(n)*[O(1) + O(1)] + O(1)
// = O(4) + O(3n) + O(2n)
// = O(4 + 5n)
// = O(n)
