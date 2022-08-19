const calculator = (opr) => {
  const [num1, operation, num2] = opr.split(" ");
  switch (operation) {
    case "add":
      return +num1 + +num2;
    case "+":
      return +num1 + +num2;
    case "subtract":
      return +num1 - +num2;
    case "-":
      return +num1 - +num2;
    case "multiply":
      return +num1 * +num2;
    case "*":
      return +num1 * +num2;
    case "divide":
      return +num1 / +num2;
    case "/":
      return +num1 / +num2;
  }
};
module.exports = calculator;
