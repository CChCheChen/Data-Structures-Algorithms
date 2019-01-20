const nemo = ['Nemo'];
const everyone = ['Dory', 'Bruce', 'Marlin', 'Nemo', 'Gill', 'Bloat', 'Nigel', 'Squirt', 'Darla', 'Hank'];
const large = new Array(100000).fill('Nemo');

function findNemo(array){
  const performance = require('perf_hooks').performance;
  let t0 = performance.now();
  for(let i=0; i<array.length; i++){
    if(array[i] === 'Nemo'){
      console.log("Found Nemo!!!");
    }
  }
  let t1 = performance.now();
  console.log("Found Nemo in " + (t1-t0) + " milliseconds.");
}

findNemo(nemo);
findNemo(everyone);
findNemo(large);
