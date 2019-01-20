//Time Complexity: O(n)
//Space Complexity: O(1), no additional space required
function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log('booooo');
    }
}
boooo(5)

//Time Complexity: O(n)
//Space Complexity: O(n) for new Data Structure new Array
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}
arrayOfHiNTimes(6)
