function fillArray(value, len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr.push(value);
    };
    return arr;
}

function findMaxSeq(array) {
    var count = 0;
    var maxSeq = 0;
    var maxSeqItem;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            count++;
        }
        else {
            count = 0;
        }
        if (count >= maxSeq) {
            maxSeq = count;
            maxSeqItem = array[i];
        }
    }
    console.log(fillArray(maxSeqItem, maxSeq+1));
}

findMaxSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1, 5, 5, 8]);
findMaxSeq(['happy']);
findMaxSeq(['3']);
findMaxSeq([2, 'qwe', 'qwe', 3, 3, '3']);