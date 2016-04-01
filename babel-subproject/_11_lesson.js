/*
    In ES6 the arrow function declaration has been added. With the arrow declaration it is possible to write shorter declarations for small functions.
*/

setTimeout(function(){
  console.log('Test');
}, 100);



/*
    The very same thing as written above can be written like:
*/

setTimeout(()=>{console.log('Test');}, 100);



/*
    (x) => {} becomes a function

    You would have needed to write like this before: var square = function(x) { return x * x; };
*/

var square = (x) => {
  return x * x;
};
console.log(square(4)); //16



/*
    Without braces it is even possible to ommit the return statement
*/

var square2 = x => x * x;
console.log(square2(4)); //16