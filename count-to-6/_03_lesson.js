/*
	Arrow functions are one of the most fun new features of ES6.

	In this exercise, we'll focus on one of the most common usage of arrow functions: shortening very simple functions. In ES6, you can write an arrow function like:
*/

x => x + 1

/*
	and that means the same thing as the ES5 code:
*/

function (x) { return x + 1; }

/*
	Very nice, yes? You can put any expression on the right-hand side of the =>, and it will become the return value. This is especially useful when performing operations like map or filter on arrays.

	Note that if you need multiple arguments, you'll need to wrap them in parentheses, like so:
*/

(x, y) => x + y