const { expect } = require("expect");
const { Printname, Reversed } = require("../lib/arraySorting");

const names = ["Alice", "Bob", "Jeremy", "Sam", "Henry", "Sarah", "Ashely"];

test("check to see if the name prints out", () => {
  Printname(names).forEach((name, index) => {
    expect(name).toContain(`Hello my name is ${names[index]}`);
  });
});

test("check to see if names reverse", () => {
  Reversed(names)
    .reverse()
    .forEach((name, index) => {
      expect(name).toContain(`${names[index]}`);
    });
});
