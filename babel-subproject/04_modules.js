/*
  ES6 code
*/
import {PI, sqrt, square} from './Math';

var arg1 = process.argv[2];
var arg2 = process.argv[3];
console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));









/*
  ES5 code

var arg1 = process.argv[2];
var arg2 = process.argv[3];
var PI = require('./modules/myMath').PI;
var sqrt = require('./modules/myMath').sqrt;
var square = require('./modules/myMath').square;

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));
*/