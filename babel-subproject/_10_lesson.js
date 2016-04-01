/*
    This new syntax is similar to the destructuring in Clojure. It makes it easier to access properties of arrays and objects.

    Let's examine the syntax by using a little example. The most common example is the swapping of the value in two variables:
*/

var foo = 123;
var bar = 456;

// swapping of the value
var tmp = foo;
foo = bar;
bar = tmp;




/*
    With destructuring it becomes easier like this.
*/

var foo = 123;
var bar = 456;

// swapping of the value
[bar, foo] = [foo, bar];



/*
    It is even possible to access elements that are children of the array.
*/

var [a, [b], [c]] = ['hello', [', '], ['world']];

console.log(a + b + c);// hello, world
// the value of a is "hello", b is ", " and c is "world"



/*
    It can also be used to access the properties of objects:
*/

var pt = {x: 123, y: 444};
var {x, y} = pt;
console.log(x, y); // 123 444



