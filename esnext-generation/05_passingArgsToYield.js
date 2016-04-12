/*
    # Your Mission

    Write a generator, *multiplier() which yields all the integers from 1 to
    Infinity multiplied by a value passed in to the .next() call.

    That is, your generator should satisfy the following tests:
*/


/*
var it = multiplier();
console.log(it.next().value) // 1
console.log(it.next().value) // 2
console.log(it.next(2).value) // 6 (2 * 3)
console.log(it.next(5).value) // 20 (5 * 4)
console.log(it.next(3).value) // 15 (3 * 5)
// ... etc
*/



/*
    Copy this boilerplate to a new file and complete with your solution, then
    execute esnext-generation verify <your-file.js> to verify it.
*/

module.exports = function *multiplier() {
    // `yield` all integers multiplied by the value passed in via `.next()`
    var num = 0,
        mult = 1;
    
    while(true){
        num++;
        mult = yield num*mult;
        if(!mult) 
            mult = 1;
    }

}