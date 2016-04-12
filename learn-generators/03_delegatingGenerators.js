/*
	Write generator-function flat that takes nested array inside and flattens it.

	Follow this boilerplate:
*/


function *flat (arr) {
  // your code goes here  
  for (var el of arr) {
  	if (el instanceof Array)	
  		yield* flat(el);
  	else
  		yield el;
  }
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}
// 1 2 3 4 5 6