"use strict";
const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginResultDiv = document.getElementById("loginResult");

form.addEventListener("submit", sendLogin);

function sendLogin(e) {
  e.preventDefault();
  fetch("http://localhost:4000/loginWithFetch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value,
    }),
  }).then((res) => {
    console.log(res);
    if (res.status === 200) {
      let correctPassword =
        '<span style="color:green;">Login in Successful</span>';
      loginResultDiv.innerHTML = correctPassword;

      // window.location.href = ""; Use this to let it open a new page
    } else if (res.status === 404) {
      let incorrectPassword =
        '<span style= "color:red;">Invalid email or password</span>';
      loginResultDiv.innerHTML = incorrectPassword;
    }
  });
}
