if (!localStorage.getItem("credentials")) {
  localStorage.setItem("credentials", JSON.stringify([]));
}

const arr = JSON.parse(localStorage.getItem("credentials"));
console.log(arr);

let userName = document.getElementById("username");
let userPassword = document.getElementById("password");

let storeData = () => {
  push({
    username: userName,
    password: userPassword,
  });
  localStorage.setItem("credentials", JSON.stringify(arr));
};
storeData.addEventListener("click", storeData);
