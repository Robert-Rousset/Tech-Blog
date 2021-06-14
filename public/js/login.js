const login = async (event) => {
  event.preventDefault();

  const username = document.querySelector(".usernameLogin").value.trim();
  const password = document.querySelector(".passwordLogin").value.trim();

  if (username && password) {
    const response = await fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

async function signup(event){
  event.preventDefault();

  const username = document.querySelector('.usernameSignup').value.trim();
  const password = document.querySelector(".passwordSignup").value.trim();

  if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
          const error = await response.json()
        alert(error);
      }
    }
}

document
.querySelector('#signupButton')
.addEventListener("click", signup);

document
  .querySelector("#loginButton")
  .addEventListener("click", login);

