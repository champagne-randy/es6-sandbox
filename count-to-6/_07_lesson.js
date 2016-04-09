/*
	In ES6, functions can take default arguments:
*/

function sayHello(greeting = "Hello", name = "CampJS") {
    console.log(`${greeting} ${name}!`);
}


/*
	When you call the function without arguments in those positions, the default ones are applied instead:
*/

sayHello();            // "Hello CampJS!"
sayHello("Hi there");  // "Hi there CampJS!"


/*
	You can also use undefined in any argument position to trigger the default:
*/

sayHello(undefined, undefined); // "Hello CampJS!"
sayHello("Hiya", undefined);    // "Hiya CampJS!"
sayHello(undefined, "JSConf");  // "Hello JSConf!"


/*
	Note that other values will not trigger the defaulting, even falsy values like null, false, "", or 0:
*/

sayHello(null, 0); // "null 0!"