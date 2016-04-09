module.exports = (...numbers) => {
	let sum = numbers.reduce( (prev,cur) => prev+cur ,0);
	return sum/numbers.length;
};