/*
  ES6 code from lesson 5
*/

const PI = 3.141592;

var _sqrt  = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};

var sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};

var square = function(x) {
  return x * x;
};

export default {
	PI: PI,
	sqrt: sqrt,
	square: square
};




/*
  ES6 code from lesson 4


const PI = 3.141592;

var _sqrt  = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};

var sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};

var square = function(x) {
  return x * x;
};

export {PI, sqrt, square};
*/








/*
  ES5 code

exports.PI = 3.141592;

var _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
exports.sqrt = function(s){
  return _sqrt(s, s/2.0, 0.0);
};
exports.square = function(x) {
  return x * x;
};
*/