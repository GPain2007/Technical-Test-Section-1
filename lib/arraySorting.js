const names = ["Alice", "Bob", "Jeremy", "Sam", "Henry", "Sarah", "Ashely"];
// const names = [];

function Printname() {
  names.forEach((name) => {
    console.log("Hello my name is" + " " + name);
    return "Hello may name is" + " " + name;
  });
}

module.exports = Printname;
