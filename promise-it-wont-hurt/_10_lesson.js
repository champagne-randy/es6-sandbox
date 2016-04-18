/*
	# There's always a catch… (lol pun)

	Promises are designed to emulate synchronous control flows.
	If any of them throw an exception, the exception will bubble up
	through the stack until it is caught by a catch block or
	hits the global context where it will be thrown.

	In the code below, each expression is evaluated one after the
	other.  If any expression throws an exception, all subsequent
	expressions will not be executed and the catch block
	will catch and handle it.
*/


try {
	doStuff()
	doMoreStuff()
} catch (err) {
	complainAboutJavascript(err);
}


/*
	With promises, we can achieve a very similar control flow as shown
	(assume all functions return promises):
*/

doStuff()
.then(doMoreStuff)
.then(null, complainAboutJavascript);


/*
	Maybe we should combine the last two lines since one is a fulfill
	handler and the other is a rejection handler?  NO!  While this
	might initially seem sensible consider what would happen if
	doMoreStuff threw an error.  Since the promise returned from it
	would be rejected, it would look for the next rejection handler
	to handle it.

	Remember: A promise can never resolve more than once.

	It is, therefore, a best practice to always put a rejection handler
	at the bottom of your promise chain (much like a catch block).

	It is worth pointing out that both the synchronous and asynchronous
	code have the same problem.  If the rejection handler itself throws
	an error you are going to have a bad time.

	Many promise libraries try to ameliorate this problem for you
	by providing a done handler that simply handles any uncaught
	errors.  The rule of thumb is this:

	  > If you are **not** returning a value from your promise to a caller,
	  > then attach a `done` handler to guard against uncaught exceptions.

	An example is shown below:
*/

doStuff()
.then(doMoreStuff)
.then(null, complainAboutJavascript)
.done();




