/*
  In the last exercise you used Iterables to generate loops. But the Iterable object did require a lot of overhead. With the new generator syntax it's possible to do the same thing with less effort.

  Here is an example of the generator syntax:
*/

let fibonacci = function*(){
  let pre = 0, cur = 1;
  while (pre < 1000) {
    // Here we destruct the former state
    [pre, cur] = [cur, pre + cur];
    // and yield (return) each step
    yield pre;
  }
}();

for (var n of fibonacci) {
  console.log(n);
}


/*
  The difference to other ways is the function* notation and that you use yield where you would have used return before.
*/