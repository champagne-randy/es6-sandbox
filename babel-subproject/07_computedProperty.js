/*
	ES6 code
*/

var arg1 = +process.argv[2];
var arg2 = +process.argv[3];
var sum = arg1 + arg2;

var obj = {
	// "even"|"odd": arg1,
	[arg1%2 === 0 ? "even":"odd"]: arg1,
	// "sum": sum
	[arg2+arg1]: sum
};

console.log(obj);



/*
	ES5 code


var evenOrOdd = +process.argv[2];
var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";

var sum = +process.argv[3] + evenOrOdd;
var obj = {};

obj[evenOrOddKey] = evenOrOdd;

obj[sum] = sum;

console.log(obj);

*/