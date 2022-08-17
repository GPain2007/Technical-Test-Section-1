const {
  Reversed,
  Printname,
  oddManOut,
  popOut,
} = require("./lib/arraySorting");

const calculator = require("./lib/calculator");

const targetAddUp = require("./lib/targetAddUp");

const names = ["Alice", "Bob", "Jeremy", "Sam", "Henry", "Sarah", "Ashely"];

console.log("Reverse names: ", Reversed(names));
console.log("Printed Names: ", Printname(names));
console.log("Odd Names: ", oddManOut(names));
console.log("Last name: ", popOut(names));
console.log("Calculator: ", calculator("8 divide 5"));
console.log("Target Add Up: ", targetAddUp([15, 7, 11, 2], 9));
