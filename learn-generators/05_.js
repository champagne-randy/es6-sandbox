/*

  Add error handling to this boilerplate. Teach run to throw an exception and
  catch that in generator. firstFile should be null if it doesn't exist.

  Follow this boilerplate:
*/

var fs = require('fs');

function run (generator) {
  // improve `run` above
}

run(function* (done) {
  // catch exception
  var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
  var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined

  console.log(firstFile);
});

