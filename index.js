const {
  Reversed,
  Printname,
  oddManOut,
  PopOut,
} = require("./lib/arraySorting");

const fs = require("fs");

const calculator = require("./lib/calculator");

const targetAddUp = require("./lib/targetAddUp");
const objPeople = [
  {
    userName: "sam",
    passWord: "happy",
  },
  {
    userName: "matt",
    passWord: "your",
  },
];

const names = ["Alice", "Bob", "Jeremy", "Sam", "Henry", "Sarah", "Ashely"];

console.log("Reverse names: ", Reversed(names));
console.log("Printed Names: ", Printname(names));
console.log("Odd Names: ", oddManOut(names));
console.log("Last name: ", PopOut(names));
console.log("Calculator: ", calculator("8 divide 5"));
console.log("Target Add Up: ", targetAddUp([15, 7, 11, 2], 9));

const userInfo = localStorage.getItem(userName);
fs.writeFile("test.txt", userInfo, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
});
