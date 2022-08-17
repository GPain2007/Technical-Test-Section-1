function Printname(names) {
  // const names = [];

  return names.map((name) => {
    return `Hello my name is ${name}`;
  });
}

function Reversed(names) {
  //added spread operator to not modify orignal array
  return [...names].reverse();
}

function oddManOut(names) {
  const arr = [0, 2, 4, 6];
  let resultArr = arr.map((i) => names[i]);
  return resultArr;
}

function popOut(names) {
  return names.pop();
}

module.exports = { Printname, Reversed, oddManOut, popOut };
