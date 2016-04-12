/*
	# Advanced Iterables

	A lot of thought went into designing the Iteratabls specification: The .next()
	method was chosen to allow both general usage iteration (as we have seen in the
	previous lessons), but also to enable more advanced techniques.

	The creation of Iterators is an area with a lot of flexibility. In Introduction
	To Iterators, we created an Iterator that iterated a fixed set of numbers.
	What if we wanted to create an Iterator that iterated a dynamic set of numbers,
	or any other data?

	Both the function which creates the Iterator, and the .next() method on the
	Iterator itself can accept any arbitrary parameters - they're only functions
	after all.

	This is where the power of Iterators lies: usage of .next() combined with the
	ability to generate dynamic sets of numbers or data gives us a unified interface
	for defining not only finite number sequences, but also abstract sequences, and
	operations on those abstract sequences.


	# Resources

	  * What Are Iterators?: http://bit.ly/js-ues6-iterators
	  * Iterable Protocol: http://bit.ly/js-iteration-protocol
*/