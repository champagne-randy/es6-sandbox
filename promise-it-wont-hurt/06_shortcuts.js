/*
	## Task

	We don’t have any specific task we’d like to assign to you for this lesson.
	Feel free to explore all three functions at your own pace. When you are
	preparing to submit though, make sure you are using at least catch and one
	of Promise.resolve and Promise.reject ☺
*/

'use strict';

var promise;

//promise = Promise.resolve('SECRET VALUE');
//promise.then(console.log);

promise = Promise.reject(new Error('SECRET VALUE'));
promise.catch(
	function(err) {
		console.log(err.message;)
	}
);
