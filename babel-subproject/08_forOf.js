const max = +process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    // here belongs the FizzBuzz logic
    // Hint：
    // When it's finished you have to return an object
    // with the property `done: true` but before you
    // have to set `done: false`

    // initial state
    let n=1;

    // iterator object
    return {
      next() {
        // stop condition
        if (n > max) {
          return { done: true };
        } 
        let value = ``;
        // is n divisible by 3
        n%3 === 0 ? value+=`Fizz` : value;
        // is n divisible by 3
        n%5 === 0 ? value+=`Buzz` : value;
        // is n neither
        value===`` ? value=n.toString(10) : value;

        n++;
        return { value: value, done: false};
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}