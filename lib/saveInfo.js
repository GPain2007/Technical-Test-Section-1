function storeData() {
  let newData = document.getElementById("username").value;
  console.log(newData);

  //if there is nothing in the code start a empty array
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", []);
  }
  //combine old and new data
  let oldData = localStorage.getItem("data");
  oldData.push(newData);
  console.log(oldData);
  //send old and new data to local Storage
  localStorage.setItem("data", oldData);
}
