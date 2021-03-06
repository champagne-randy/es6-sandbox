/*
	Fetch JSON from [http://localhost:1337](http://localhost:1337) and console.log it.

	There are several things you will want to know:

	  * `q-io`'s `http` module has a `read` method which returns a promise for thecontent of a successful (status 200) HTTP request.
	  * Parse the returned JSON and `console.log` it for much win.

	This challenge is a bit tricky but the implementation is relatively
	straightforward.  If you get stuck, refer to the q-io documentation for
	clarification:

	  [https://github.com/kriskowal/q-io](https://github.com/kriskowal/q-io)
*/


'use strict';

var http = require("q-io/http");
var url  = 'http://localhost:1337';

http.read(url)
	.then(function(json) {
		console.log(JSON.parse(json));
	})
	.catch(console.log)
	.done();