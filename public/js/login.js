const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('.emailLogin').value.trim();
  const password = document.querySelector('.passwordLogin').value.trim();

  if (email && password) {
    const response = await fetch('/login/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('.usernameSignup').value.trim();
  const password = document.querySelector('.passwordSignup').value.trim();

  if (username && password) {
    const response = await fetch('/login/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },

    },
    console.log("HEYOOOO", response),
    );
    

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
