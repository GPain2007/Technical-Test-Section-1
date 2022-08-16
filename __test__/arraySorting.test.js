const { expect } = require("expect");
const Printname = require("../lib/arraySorting");

const names = "Alice";

test("check to see if the name prints out", () => {
  expect(Printname()).toContain("Hello my name is Alice");
});
