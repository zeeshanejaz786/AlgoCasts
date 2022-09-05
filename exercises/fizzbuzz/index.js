// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  if (n === 0) {
    return console.log(0);
  } else {
      let i = 1
    while (i <= n) {
      if (i % 3 === 0 && i % 5 !== 0) {
          console.log('fizz');
          i++;
      } else if (i % 3 !== 0 && i % 5 === 0) {
          console.log('buzz');
          i++;
      } else if (i % 3 === 0 && i % 5 === 0) {
          console.log('fizzbuzz');
          i++;
      } else {
          console.log(i);
          i++;
      }
    }
  }
}

module.exports = fizzBuzz;
