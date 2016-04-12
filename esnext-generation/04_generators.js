/*
	# Your Mission

	Rewrite the function we created in Advanced Iterables to be a generator: It
	must accept the same parameter isEven, and return the set of all even or odd
	numbers. Don't worry about the swap argument this time, we will cover that next.

	Copy this boilerplate to a new file and complete with your solution, then
	execute esnext-generation verify <your-file.js> to verify it.
*/

module.exports = function *generate(isEven) {
	// `yield` either odd or even numbers based on `isEven`
	var num;
	
	isEven ?
		num = 0:
		num = -1;

	while(true)
		yield num +=2;

}

