const { expect } = require("expect");
const Printname = require("../lib/arraySorting");

const names = ["Alice", "Bob", "Jeremy", "Sam", "Henry", "Sarah", "Ashely"];

test("check to see if the name prints out", () => {
  Printname(names).forEach((name, index) => {
    expect(name).toContain(`Hello my name is ${names[index]}`);
  });
});
