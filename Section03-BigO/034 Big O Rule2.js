function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);//O(1)

    var middleIndex = Math.floor(items.length / 2);//O(1)
    var index = 0;//O(1)

    while (index < middleIndex) {//O(n/2)
        console.log(items[index]);//O(1)
        index++;//O(1)
    }

    for (var i = 0; i < 100; i++) {//O(100)
        console.log('hi');//O(1)
    }
}

//Time Complexity
// = O(1) + O(1) + O(1) + O(n/2)*[O(1) + O(1)] + O(100)*O(1)
// = O(3) + O(n/2)*O(2) + O(100)
// = O(103 + n)
// = O(n)
