let userName = document.querySelector("#username");
let userPassword = document.querySelector("#sorname");
let Age = document.querySelector("#age");
let Pssword = document.querySelector("#pssword")

function getUser() {
  let name = localStorage.getItem("userName");
  let password = localStorage.getItem("userPassword");

  userName.innerHTML = name;
  userPassword.innerHTML = password;
}

getUser();
