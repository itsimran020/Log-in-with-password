let viewPass = document.querySelector("#img1");
let pass = document.querySelector("#password");
let logIn = document.querySelector("button");
let container = document.querySelector(".input-box");

viewPass.addEventListener("click", () => {
  if (pass.type == "password") {
    pass.type = "text";
    viewPass.src = "eye-open.png";
  } else {
    pass.type = "password";
    viewPass.src = "eye-close.png";
  }
});

pass.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (pass.value == "20012021") {
      window.location.href ="url(https://www.youtube.com/shorts/bNQd1B88BxU)";
    } else {
      pass.type = "text";
      container.style.border = "2px solid red";
      pass.style.color = "red";
      pass.value = "";
      pass.placeholder = "Password incorect, re-enter please";
      pass.type = "password";
    }
  }
});

logIn.addEventListener("click", () => {
  if (pass.value == "20012021") {
    window.location.href = "index2.html";
  } else {
    pass.type = "text";
    container.style.border = "1px solid red";
    pass.style.color = "red";
    pass.value = "";
    pass.placeholder = "Password incorect, re-enter please";
    pass.type = "password";
  }
});