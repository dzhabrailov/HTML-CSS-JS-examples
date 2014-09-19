function findMostFreqNum(str) {
    str = str.toLowerCase().split(" ");
    var temp = [];
    var maxCount = 0;
    var currChar = '';
    for (var i = 0; i < str.length; i+=1) {
        if (temp[str[i]] == null) {
            temp[str[i]] = 1;
        }
        else {
            temp[str[i]] += 1;
        }
        if (temp[str[i]] > maxCount) {
            maxCount = temp[str[i]];
        }
    }
    for (var index in temp) {
        if (temp[index] == maxCount) {
            console.log(index + ' -> ' + maxCount + ' times')
        }
    }
}
findMostFreqNum('in the middle of the night');
findMostFreqNum('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
findMostFreqNum('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
