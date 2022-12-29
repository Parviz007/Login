let login = document.querySelector("#text");
let password = document.querySelector("#password");
let login2 = document.querySelector("#login2");
let link = document.querySelector(".link");

let obj = {
  name: "",
  password: "",
};

login.onchange = (event) => {
  obj.name = event.target.value;
};

password.onchange = (event) => {
  obj.password = event.target.value;
};

link.onclick = (event) => {
    
  localStorage.setItem("userName", obj.name);
  localStorage.setItem("userPassword", obj.password);
};