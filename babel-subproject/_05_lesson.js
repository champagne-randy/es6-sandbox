/*
  The former exercise explained the module system but there is another way to use export and that is export default.

  Some explanation about the difference: this module uses export like in the former exercise
*/

// Message.js
const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';
export const obj = {
  greeting: greeting,
  name: name,
  version: version
};



/*
  the object that this module exports can be imported using the name as in this example;
*/

// Executable
import {obj} from './Message';
console.log(obj.greeting + ' ' + obj.name + ' ' + obj.version); // Hello Babel v5.0



/*
  You can achieve the same thing by using export default:
*/

// Message.js
const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';
export default {
  greeting: greeting,
  name: name,
  version: version
};



/*
  The import then changes a little
*/

import Message from './Message';
console.log(
  Message.greeting + ' ' + Message.name + ' ' + Message.version
); //Hello Babel v5.0



/*
  The difference should be obvious but lets make it clear: When you use export default you do not need to use the curly braces {...} and you don't need to know the name of the exported method.

  Written in common.js it would look like this:
*/

const greeting = 'Hello';
const name = 'Babel';
const version = 'v5.0';
module.exports = {
  greeting: greeting,
  name: name,
  version: version
};

/*
  So, you can use export default just like you would use module.exports in Node.js.
*/

