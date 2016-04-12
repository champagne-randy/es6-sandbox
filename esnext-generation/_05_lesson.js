/*
	# Passing Args To Yield

	As we saw in Advanced Iterables, another interesting and powerful ability of
	Iterators is passing arguments into .next().

	For a regular Iterable which defines its own Iterator and .next() method, we
	can accept the argument as a regular function parameter:
*/

module.exports = function allIntegers() {
  var num = 0;

  var myIterator = {
    next: function(reset) {

      if (reset) {
        num = 0;
      }

      return {
        value: num++;
      }

    }
  }

  return myIterator;
}



/*
	Here, we pass the reset argument into .next() like so:
*/

var it = allIntegers();
console.log(it.next());     // {value: 1, done: false}
console.log(it.next());     // {value: 2, done: false}
console.log(it.next());     // {value: 3, done: false}
console.log(it.next(true)); // {value: 1, done: false}
console.log(it.next());     // {value: 2, done: false}



/*
	Since generators return an Iterator, arguments can still be passed into the
	.next() as above, but to utilise these arguments within the generator is a
	little bit different. We must listen to the return value of a call to yield:
*/

function *generate() {
  var num = 0,
      reset = false;

  while(true) {
    num += 1;
    reset = yield num;
    if (reset) {
      num = 0;
    }
  }
}



/*
	(Note: This is a slightly modified example from Introduction To Generators)

	There is one important difference between the return value of yield and a
	regular Iterator: a generator's Iterator must have .next() called at least
	once without any parameters.

	Put another way: The expression reset = yield num; is evaluated right-to-left.
	The first call to .next() will execute up to and including yield num;, at
	which point execution of the generator will halt, then the following call to
	.next(<value>) will evaluate reset = ..., capturing the <value> passed in.


	# Resources

	  * Passing Arguments To Iterators: http://bit.ly/js-ues6-passing-args-to-iterators
	  * Generators: http://bit.ly/js-function-asteriks
*/