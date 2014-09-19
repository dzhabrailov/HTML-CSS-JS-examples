function findMaxSeq(array) {
    var count = 1;
    var maxCount = 1;
    var index = 0;

    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1]) {
            count++;
            if (count > maxCount) {
                maxCount = count;
                index = i - count + 2;
            }
        }
        else {
            count = 1;
        }
    }
    
    if (maxCount === 1) {
        console.log("No");
    }
    else {
        console.log(array.slice(index, index + maxCount));
    }
}

findMaxSeq([3]);
findMaxSeq([1, 1, 3, 4, 5, 6, 2, 1, 4]);
findMaxSeq([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);