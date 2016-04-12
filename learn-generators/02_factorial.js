/*
	Write a generator function factorial that, given an input number, starts at 1 and goes
	up to the number, yielding the factorial of each number along the way.

	Don't use recursion. Use a loop.

	Follow this boilerplate:
*/


function *factorial(n){
  // your code here
  var i = 1;
  var value = 1;
  while( i<=n ){
  	value *= i++;
  	yield value;
  }
}

for (var n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120