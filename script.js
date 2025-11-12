// script.js - general small interactions
document.addEventListener('DOMContentLoaded', () => {
  // show logged in user (if any) in nav by appending a small greeting
  const username = sessionStorage.getItem('loggedInUser');
  var login_details = document.getElementById("login");
  if (username) {
    const nav = document.querySelector('header nav ul');
    if (nav) {
      const li = document.createElement('li');
      li.style.listStyle = 'none';
      li.style.marginLeft = '14px';
      li.innerHTML = `<span style="color:#fff;font-weight:700;">Hi, ${username}</span> <a href="#" id="logoutLink" style="margin-left:8px;color:#fff;text-decoration:underline;">Logout</a>`;
      nav.appendChild(li);
      login_details.classList.add("hide-login");
      

      const logoutLink = document.getElementById('logoutLink');
      logoutLink && logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        sessionStorage.removeItem('loggedInUser');
        alert('You have logged out.');
        window.location.href = 'index.html';
      });
    }
  }
});
