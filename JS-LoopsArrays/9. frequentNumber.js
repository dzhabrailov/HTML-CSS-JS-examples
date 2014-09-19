function findMostFreqNum(input) {
    var arr = [];
    var maxCount = 0;
    var currChar = '';

    for (var i = 0; i < input.length; i+=1) {
        if (arr[input[i]] == null) {
            arr[input[i]] = 1;
        }
        else {
            arr[input[i]] += 1;
        }
        if (arr[input[i]] > maxCount) {
            maxCount = arr[input[i]];
            currChar = input[i];
        }
    }
    console.log(currChar + ' (' + maxCount + ' times)');
}

findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);