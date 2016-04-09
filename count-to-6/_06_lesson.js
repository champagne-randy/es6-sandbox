/*
	Now that you know how to use the spread operator, we can introduce you to its counterpart, rest parameters.

	Rest parameters are used when you want to write a function that accepts a variadic number of arguments, but acts on them as if they were an array. For example:
*/


function sum(...args) {
    var result = 0;
    args.forEach(function (value) {
        result += value;
    });

    return result;
}

sum(1, 2, 3); // 6


/*
	Note that in the above example, args is a real array, with a forEach method and everything. Just like the spread operator helps us get rid of .apply, rest parameters help us get rid of Array.prototype.slice.call(arguments). In fact, you should never need to use the horrible arguments object again. Yayyyy!
*/