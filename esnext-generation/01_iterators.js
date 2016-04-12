/*
	Create a function, makeCounter(someObj), which turns someObj (a plain old
	Javascript Object) into an Iterator. This Iterator should count the positive
	integers starting at 1, through to and including 10.

	Copy this boilerplate to a new file and complete with your solution, then
	execute esnext-generation verify <your-file.js> to verify it.
*/

module.exports = function makeCounter(someObj) {
	
	var cur = 0;
	var finish = 10;

	someObj.next = function() {
		// complete me
		cur++;
		if (cur<=finish) {
			return {
				value: cur,
				done: false
			};
		} else {
			return {
				done: true
			};
		}
	}

}

