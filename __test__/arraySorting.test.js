const { expect } = require("expect");
const {
  Printname,
  Reversed,
  PopOut,
  oddManOut,
} = require("../lib/arraySorting");

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

test("check to see if last name appears", () => {
  const name = PopOut(names);
  expect(name).toBe("Ashely");
});
