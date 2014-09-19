//external JS library for working with big numbers
var bigNumbs = require('./bignumber.min.js');

function sumNumbs(value) {
    var numbOne = bigNumbs(value[0]);
    var numbTwo = bigNumbs(value[1]);

	return numbOne.plus(numbTwo).toString(10);
}

console.log(sumNumbs(['155', '65']));
console.log(sumNumbs(['123456789', '123456789']));
console.log(sumNumbs(['887987345974539', '4582796427862587']));
console.log(sumNumbs(['347135713985789531798031509832579382573195807',
					  '817651358763158761358796358971685973163314321']));