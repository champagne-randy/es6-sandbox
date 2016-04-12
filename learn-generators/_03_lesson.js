/*
    Generators inside generators.

    ## Info

    We can delegate iteration control from our generator to another one.
    yield * expression will do the trick, * means that expression
    is a generator too, so we can send message to it.
*/


function *foo() {
    yield 2;
    yield 3;
}

function *main() {
    yield 1;
    yield *foo(); // delegate foo
}

for (var v of main()) {
    console.log( v );
}
// 1 2 3


/*
    ## Docs

    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*
*/