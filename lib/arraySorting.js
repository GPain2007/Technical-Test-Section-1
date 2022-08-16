const names = ["Alice", "Bob", "Jeremy", "Sam", "Henry", "Sarah", "Ashely"];
// const names = [];

function Printname() {
  return names.map((name) => {
    return `Hello my name is ${name}`;
  });
}

// function

module.exports = Printname;
