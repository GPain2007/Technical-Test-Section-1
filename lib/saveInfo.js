function storeData() {
  const newData = document.getElementById(".username").value;

  //if there is nothing in the code start a empty array
  if (localStorage.getItem("data") === null) {
    localStorage.setItem("data", []);
  }
  //combine old and new data
  const oldData = JSON.parse(localStorage.getItem("data"));
  oldData.push(newData);

  //send old and new data to local Storage
  localStorage.setItem("data", JSON.stringify(oldData));
}
