/*
	For this first lesson, let’s review what we already know about asynchronous
	operations in JavaScript.

	Using setTimeout, print the string 'TIMED OUT!' after 300ms.

	# Docs
		http://stackoverflow.com/a/10767807
*/

setTimeout( function() {
	console.log('TIMED OUT!');
}, 300);