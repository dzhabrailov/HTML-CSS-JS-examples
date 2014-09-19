function findCardFreq(cards) {
    cards = cards.split(/\W+/).filter(Boolean);
    var temp = [], maxCount = 0;

    for (var i = 0; i < cards.length; i+=1) {
        if (temp[cards[i]] == null) {
            temp[cards[i]] = 1;
        }
        else {
            temp[cards[i]] += 1;
        }
    }
    for (var index in temp) {
        var output = index + ' -> ' + (temp[index] / cards.length * 100).toFixed(2) + '%';
        console.log(output);
    }
}

findCardFreq('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFreq('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFreq('10♣ 10♥');