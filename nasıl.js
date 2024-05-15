

function openLoginPopup() {
  document.getElementById('loginPopup').style.display = 'block';
}
function openSigninPopup() {
	document.getElementById('signinPopup').style.display = 'block';
}

function closeLoginPopup() {
  document.getElementById('loginPopup').style.display = 'none';
}
function closeSigninPopup() {
	document.getElementById('signinPopup').style.display = 'none';
}

function login() {
	window.location.href = "baseuye.html";
  isLoggedIn = true;
  var username = document.getElementById('username').value;
  

    document.getElementById('userProfile').style.display = 'block';
    document.getElementById('usernameDisplay').textContent = username;
  
  closeLoginPopup();
}
function signin() {
	window.location.href = "baseuye.html";
	isLoggedIn = true;
	var newusername = document.getElementById('newusername').value;
	document.getElementById('userProfile').style.display = 'block';
    document.getElementById('usernameDisplay').textContent = username;
	var password = document.getElementById("newpassword").value;
    var email = document.getElementById("newemail").value;

    // Şifre 8 karakterden uzun olmalı
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // E-posta içinde "@" sembolü olmalı
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Diğer gerekli işlemler buraya eklenebilir, örneğin form submit işlemi veya AJAX çağrısı
    alert("Sign in successful!");
	
	closeSigninPopup();
}
function logout() {
	window.location.href = "base.html";
}
function signout() {
	window.location.href = "base.html";
}
window.onload = function() {
    if (isLoggedIn) {
        document.getElementById('userProfile').style.display = 'block';
    }
};
function performLogout() {
    
    window.location.href = "base.html";
}
