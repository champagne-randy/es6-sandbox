/*
	# Introduction To Iterators

	A familiar concept in many other languages, Iterators have landed as a new
	Javascript feature in the ES6 standard.

	"Iterators are nothing more than objects with a certain interface."[1]

	That interface consists of a single method .next() which returns an object
	with two keys;

	  * `value`: the next item in the Iterator's collection.
	  * `done`: true when the Iterator's collection is exhausted.

	Every time next() is called, the Iterator's collection is advanced one more
	item, and that item is returned as the value.
	Once all the items in the collection are exhausted, value will be the
	Iterator's "return value", and done will be true.
	All subsequent calls to next() will have done set to true.

	This Iterator interface is purposely structured to provide for both simple and
	complex use cases (as we'll learn in later lessons).


	# Resources
		* [1]: http://bit.ly/js-ues6-iterators
		* Iterable Protocol: http://bit.ly/js-iteration-protocol
*/
