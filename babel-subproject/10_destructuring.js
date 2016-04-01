/*
  Use destructuring to extract name.family and birth.day from the following JavaScript object:
*/

var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};

// my solution
var [familyName, birthDay] = [json.name.family, json.birth.day];

// oficial solution
// var {name: {family: familyName}, birth: {day: birthDay}} = json;

console.log(familyName);
console.log(birthDay);