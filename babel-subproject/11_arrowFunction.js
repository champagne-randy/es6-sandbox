/*
	Process the variables that are passed-in through process.argv and output the first letter of words in a row.
*/

var inputs = process.argv.slice(2);
var result = inputs.map( word=> word[0] )
                   .reduce( (letters, letter)=> letters += letter );
console.log(result);


/*
	For example, in case of ["Hello", "Arrow", "Function"] should result in "HAF". Here is a full example:

	$ babel-node program.js Hi this is yosuke
	HTIY

*/

