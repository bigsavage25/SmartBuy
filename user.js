// user.js - handles offline registration & login using localStorage/sessionStorage
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim().toLowerCase();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (!name || !email || !password) {
        alert("Please fill all fields.");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // naive single-user storage (for SIWES demo)
      const users = JSON.parse(localStorage.getItem('smartbuy_users') || '[]');
      if (users.find(u => u.email === email)) {
        alert('An account with that email already exists.');
        return;
      }
      users.push({ name, email, password });
      localStorage.setItem('smartbuy_users', JSON.stringify(users));
      alert('Registration successful. Please login.');
      window.location.href = 'login.html';
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim().toLowerCase();
      const password = document.getElementById("loginPassword").value;

      const users = JSON.parse(localStorage.getItem('smartbuy_users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        sessionStorage.setItem('loggedInUser', user.name);
        alert(`Welcome back, ${user.name}!`);
        window.location.href = 'index.html';
      } else {
        alert('Invalid email or password.');
      }
    });
  }
});
