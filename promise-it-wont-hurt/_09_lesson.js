/*
	# What happens when an error is thrown?

	One of the tremendous strengths of promises is that they handle errors in a
	manner similar to synchronous code.  Unlike in traditional callback-based code,
	you do not need to strictly handle all your errors at every step.

	If an error is thrown inside a function, it can be captured.

	If an error is thrown inside a function, it will be handled by the next
	available "rejection" handler.  This allows you to write code that looks
	remarkably like a try/catch block would in synchronous code.
*/

try {
	doSomethingRisky();
	doAnotherRiskyThing();
} catch (e) {
	console.log(e);
}



/*
	The equivalent "promisified" code might look like:
*/

doSomethingRisky()
.then(doAnotherRiskyThing)
.then(null, console.log);