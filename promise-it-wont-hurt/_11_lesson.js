/*
	# Can you do what Async.js does?

	When doing asynchronous programming you will often want to perform multiple
	operations in parallel. In some cases you may wish to delay further processing
	until a list of async operations have completed.

	In synchronous code this is trivial because our operations are executed in the
	order they are specified:
*/

var thingOne = getThing(1);
var thingTwo = getThing(2);

combine(thingOne, thingTwo);



/*
	We would like to build a function such that we can specify a list of
	asynchronous values we would like to fetch and then use once all are
	available.
*/

getAll(fetch(1), fetch(2))
.then(function (values) {
	console.log(values[0], values[1]);
});
