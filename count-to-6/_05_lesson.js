/*
	ES6 provides two closely related concepts, rest and spread, for functions with variadic numbers of arguments. In this exercise we'll explore the spread side of things.

	An example of a variadic function would be Math.max, which you can call with any number of arguments: Math.max(1, 2) or Math.max(1, 2, 3) or ...

	In ES6, you can use the ...args syntax to "spread" an array out when calling such a function. For example:
*/

var numbers = [1, 1, 2, 3, 5, 8];
var max = Math.max(...numbers);

/*
	This replaces the need for our old friend, .apply. Good riddance!
*/