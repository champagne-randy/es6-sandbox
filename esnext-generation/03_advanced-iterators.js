/*
	# Your Mission

	Write a function to generate iterators, generate(), that returns an infinite
	Iterator. i.e.; an Iterator that never returns done: true[1].

	The Iterator should return all even numbers >= 2 if the first parameter to
	generate() is true, and return all odd numbers >= 1 if the first parameter
	to generate() is false.

	Also add the ability to swap between even <-> odd iterators mid-iteration by
	accepting a bool swap to .next(). For example, if the last call to .next()
	returned 2, calling .next(true) immediately afterward should return 3.

	Copy this boilerplate to a new file and complete with your solution, then
	execute esnext-generation verify <your-file.js> to verify it.
*/

module.exports = function generate(isEven) {
	// return an Iterator for even numbers if isEven is true
	// or, return an Iterator for odd numbers if isEven is false
	// If `.next(swap)` receives `true`, swap between even <-> odd
	var num;
	
	isEven ? 
		num = 0: 
		num = -1;

	return {
		next: function(swap){
			return {
				value: (
					swap ?
						num += 1:
						num += 2
				)
			}
		}
	};
}



/*
	## Notes

	  * [1]: If the key `done` is left off, it is assumed to be `false`.
*/