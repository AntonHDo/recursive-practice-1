/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []

input: (start, end)
output: arr

***********************************************************************/


// function range(start, end) {
  
//   let array = []
//   if (end < start) {
//     return [];
//   }

//   return range(start + 1, end)

// }

function range(start, end) {
  debugger;
  if (start >= end) {
    return [];
  } else {
    debugger;
    const numbers = range(start + 1, end);
    debugger;
    numbers.unshift(start);
    return numbers;
  }
}
debugger;
console.log(range(1, 5)); // [1, 2, 3, 4]
// console.log(range(3, 4)); // [3]
// console.log(range(7, 6)); // []

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}