/*
	In addition to the features you already learned about, template strings can be tagged. This is done by placing a function name, like fn, before the template string. For example:
*/

fn`Hello ${you}! You're looking ${adjective} today!`



/*
	The semantics of a tagged template string are very different from those of a normal one. In essence, they are a special type of function call: the above "desugars" into:
*/

fn(["Hello ", "! You're looking ", " today!"], you, adjective);



/*
	Note how the (n + 1)th argument corresponds to the substitution that takes place between the nth and (n + 1)th entries in the string array. Thus, there is always one more entry in the string array than there are substitutions; in the above, the counts are 3 vs. 2.

	This can be useful for all sorts of things, but one of the most straightforward is automatic escaping of any interpolated variables. For example, you could write an HTML-escaping function, and name it html, such that:
*/

html`<p title="${title}">Hello ${you}!</p>`



/*
	…returns a string with the appropriate variables substituted in, but with all HTML-unsafe characters replaced.
*/