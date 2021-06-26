const login = async (event) => {
  event.preventDefault();

  const username = document.querySelector(".usernameLogin").value.trim();
  const password = document.querySelector(".passwordLogin")
  console.log(password)

  if (username && password) {
    const response = await fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      const loginArea = document.querySelector(".incorrectLogin")
      loginArea.removeAttribute("id", "is-white")
      setTimeout(turnOffText, 5000)
      function turnOffText(){
        loginArea.setAttribute("id", "is-white")
      }    
    }
  }
};

async function signup(event) {
  event.preventDefault();

  const username = document.querySelector(".usernameSignup").value.trim();
  const password = document.querySelector(".passwordSignup").value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      // const signupError = document.querySelector(".incorrectSignup")
      // signupError.removeAttribute("id", "is-white")
      // setTimeout(turnOffText, 5000)
      // function turnOffText(){
      //   signupError.setAttribute("id", "is-white")
      // }
      // console.log(response)   
      alert("Failed to sign up.")   
    }
  }
}

const signupButton = document
  .querySelector("#signupButton")
  .addEventListener("click", signup);

const loginButton = document
  .querySelector("#loginButton")
  .addEventListener("click", login);
