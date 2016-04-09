/*
	## Challenge

	In fact, let's do that right now. You will be given two arguments to your program: a username, and a comment. Both will potentially contain HTML-unsafe characters (namely ', ", <, >, and &). Your job is to use tagged template strings to log a safely-escaped HTML rendering of the comment.

	For example, if the username is "domenic" and the comment is "<dl> is a fun tag", you should output:

    <b>domenic says</b>: "&lt;dl&gt; is a fun tag"

	As before, you could start doing this using simple ES5 constructs. But the goal is for you to write a function that you can use as a tag in a tagged template string, that will do any escaping automatically.

	
	## Hints

	If you don't remember the corresponding escape sequences, they are:

	    ' | &apos;
	    " | &quot;
	    < | &lt;
	    > | &gt;
	    & | &amp;

	Remember that the best way to do string replacement in JavaScript is with regular expressions, e.g.

    var replacedS = originalS.replace(/a/g, "b");

	The outline of your program should look something like this:
*/


console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html( pieces, ...substitutions ) {
	var result = pieces[0];
	for (var i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + pieces[i + 1];
    }

    return result;
}

function escape(s) {
	return s.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/'/g, "&apos;")
			.replace(/"/g, "&quot;");
}



/*
	If you're not sure where to start, maybe try console.loging the arguments to your html function.

	Finally, feel free to use rest parameters if you think that would make things easier!
*/