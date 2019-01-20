const nemo = ['Nemo'];
const everyone = ['Dory', 'Bruce', 'Marlin', 'Nemo', 'Gill', 'Bloat', 'Nigel', 'Squirt', 'Darla', 'Hank'];
const large = new Array(100000).fill('Nemo');

//Time Complexity: O(n) --> Linear Time
function findNemo(array){
  //const performance = require('perf_hooks').performance;
  //let t0 = performance.now();
  for(let i=0; i<array.length; i++){
    if(array[i] === 'Nemo'){
      console.log("Found Nemo!!!");
    }

  }
  //let t1 = performance.now();
  //console.log("Found Nemo in " + (t1-t0) + " milliseconds.");
}
findNemo(nemo);
findNemo(everyone);
findNemo(large);

//Time Complexity: O(1) --> Constant Time
function findFirst(array){
      console.log(array[0]);
}
findFirst(everyone);

const findNemo1 = array => {
  array.forEach(fish =>{
    if(fish === 'Nemo'){
      console.log("Found Nemo 1!!!");
    }
  })
}
findNemo1(everyone);

const findNemo2 = array => {
  for(let fish of array){
    if(fish === 'Nemo'){
      console.log("Found Nemo 2!!!");
    }
  }
}
findNemo2(everyone);
