function countSubstringOccur(input) {
    var keyword = input[0].toLowerCase();
    var text = input[1].toLowerCase();
    var count = 0;

    var i, l;
    for (i = 0, l = text.length; i < l; i+=1) {
        if (text.substr(i, keyword.length) == keyword) {
            count+=1;
        }
    }
    console.log(count);
}

countSubstringOccur(['in', 'We are living in a yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']);
countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);
countSubstringOccur(['but', 'But you were living in another world tryin\' to get your message through.']);