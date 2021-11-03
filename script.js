// 1
const letters = ['h', 'e', 'l', 'l', 'o']
const greeting = letters.reduce(join => letters.join(''));
// The below line should console.log: "hello"
console.log(greeting) 

// 2  
const numbers = [ 100, 3, 4, 1, 2];
const total = numbers.reduce((value1, value2) => value1 * value2);
// The below line should console.log: 2400
console.log(total); 

//Bonus - uncomment lines 15 and 17
const arrays = [["how", "now"], ["brown", "cow"]];
const flattenedArray = arrays.reduce(
  function(previousValue, currentValue) {
    return previousValue.concat(currentValue)
  },
  []
)
// The below line should console.log: ["how", "now", "brown", "cow"]
console.log(flattenedArray);
