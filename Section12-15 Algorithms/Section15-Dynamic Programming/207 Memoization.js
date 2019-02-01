function addTo80(n){
  console.log("This takes long time!");
  return n + 80;
}
// addTo80(5);
// addTo80(5);
// addTo80(5);

//-----with Cache-----
let cache = {} //It's better to not use global memory for cache storage
function memoizedAddTo80(n){
  if(n in cache){
    return cache[n];
  }else{
    console.log("This takes long time!---Memoization");
    cache[n] = n + 80;
    return cache[n]
  }
}
// console.log('1', memoizedAddTo80(5));
// console.log('2', memoizedAddTo80(5));

function memoizedAddTo80Plus(){
  let cache = {};
  return function(n) {
    if(n in cache){
      return cache[n];
    }else{
      console.log("This takes long time!---Memoization PLUS");
      cache[n] = n + 80;
      return cache[n]
    }
  }
}
const memoized = memoizedAddTo80Plus();
console.log('1', memoized(5));
console.log('2', memoized(5));
