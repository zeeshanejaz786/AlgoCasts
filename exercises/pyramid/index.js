// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, lvl = "") {
  if (n === row) {
    return;
  }

  if (lvl.length === n * 2 - 1) {
    console.log(lvl);
    return pyramid(n, row + 1);
  }
  const midPoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midPoint - row <= lvl.length && midPoint + row >= lvl.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, lvl + add);
}

module.exports = pyramid;

// function pyramid(n) {
//   const midPoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let col = 0; col < n * 2 - 1; col++) {
//       if (midPoint - row <= col && midPoint + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }
