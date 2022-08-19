const objPeople = [
  {
    userName: "sam",
    passWord: "happy",
  },
  {
    userName: "matt",
    passWord: "your",
  },
];

const storeData = () => {
  let userName = document.getElementById("username").value;
  let passWord = document.getElementById("password").value;
  for (i = 0; i < objPeople.length; i++) {
    if (
      userName == objPeople[i].userName &&
      passWord == objPeople[i].passWord
    ) {
      console.log(userName + " is logged in");
      return;
    }
  }
  console.log("Incorrect username and password");

  // if there is nothing in the code start a empty array
  // if (localStorage.getItem(userName) == null) {
  //   localStorage.setItem(userName, passWord);
  // } else alert("user already taken");

  // const userInfo = localStorage.getItem(userName);
  // Object.keys(localStorage).forEach(function (key) {
  //   console.log(localStorage.getItem(key));
  // });
  // console.log(userInfo);
  // // building array to hold data of users (username and password)
  // var obj = {
  //   Users: [],
  // };
  // obj.Users.push({ username: userName, password: passWord });
  // //JSON then stringfy data
  // var json = JSON.stringify(obj);
  // //sending to json file
  // console.log(json);

  // fs.writeFile("password.json", json, "utf8", (err) => {
  //   if (err) console.log(err);
  // });
};
module.exports = storeData;
