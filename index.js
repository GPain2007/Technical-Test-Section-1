const {
  Reversed,
  Printname,
  oddManOut,
  popOut,
} = require("./lib/arraySorting");

const names = ["Alice", "Bob", "Jeremy", "Sam", "Henry", "Sarah", "Ashely"];

console.log("Reverse names: ", Reversed(names));
console.log("Printed Names: ", Printname(names));
console.log("Odd Names: ", oddManOut(names));
console.log("Last name", popOut(names));
