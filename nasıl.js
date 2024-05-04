

function openLoginPopup() {
  document.getElementById('loginPopup').style.display = 'block';
}

function closeLoginPopup() {
  document.getElementById('loginPopup').style.display = 'none';
}

function login() {
	window.location.href = "baseuye.html";
  isLoggedIn = true;
  var username = document.getElementById('username').value;
  

    document.getElementById('userProfile').style.display = 'block';
    document.getElementById('usernameDisplay').textContent = username;
  
  closeLoginPopup();
}
function logout() {
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
