/*
Until now it hasn't been possible to split up your code into modules in JavaScript.

In node.js/io.js it's common to use commonjs modules but in the browser you had to use other solutions like require.js or browserify or were forced to create your own global namespaces.

From ES6  you will be able to use the export and import keywords that are specially designed for creating modules.

Basically, they look a lot like commonjs modules. With export you can specify the objects to be exported and instead of require you can use import to import the object.
*/


/*
	Using export in ES6 looks like this:
*/

// Message.js
export const message = 'Hello Babel';


/*
	And to import in ES6 that module you can use it like this:
*/

// executable
import {message} from './Message';
console.log(message); // Hello Babel


/*
	Using common.js the same module would be written like this:
*/
// Message.js
exports.message = 'Hello Babel';

// executable
var message = require('./Message').message;
console.log(message); // Hello Babel

