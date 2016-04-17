/*
	## Task

	Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
	executor after a delay of 300ms, using setTimeout.

	Then, print the contents of the promise after if has been fulfilled by passing
	console.log to then.
*/

'use strict';
//require('es6-promise');


var promise = new Promise(function (resolve, reject) {
	// Your solution here
	setTimeout( resolve('FULFILLED!'), 300);
});

// Your solution here
promise.then(function(message) { console.log(message); });