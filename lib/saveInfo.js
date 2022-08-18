import { writeFile } from "node:fs";

const storeData = () => {
  let userName = document.getElementById("username").value;
  let passWord = document.getElementById("password").value;
  console.log(userName);

  //if there is nothing in the code start a empty array
  // if (localStorage.getItem(userName) == null) {
  //   localStorage.setItem(userName, passWord);
  // } else alert("user already taken");

  // const userInfo = localStorage.getItem(userName);
  // console.log(userInfo);
  //building array to hold data of users (username and password)
  var obj = {
    Users: [],
  };
  obj.Users.push({ username: userName, password: passWord });
  //JSON then stringfy data
  var json = JSON.stringify(obj);
  //sending to json file

  writeFile("password.json", json, "utf8", callback);
  console.log(json);
};
