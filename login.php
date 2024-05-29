<?php
// Establish connection to MySQL database
$servername = "localhost";
$username = "root";
$password = ""; // Default password for XAMPP
$dbname = "login_system";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve username and password from login form
$username = $_POST['username'];
$password = $_POST['password'];

// Protect against SQL injection
$username = mysqli_real_escape_string($conn, $username);
$password = mysqli_real_escape_string($conn, $password);

// Query to check if user exists
$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // User found, verify password
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        echo '<script>';
        echo 'alert("Login successful!");';
        echo 'window.location.href = "baseuye.html";'; // Redirect after success
        echo '</script>';
    } else {
        echo '<script>';
        echo 'alert("Invalid username or password.");';
        echo 'window.history.back();'; // Go back to the login form
        echo '</script>';
    }
} else {
    echo '<script>';
    echo 'alert("Invalid username or password.");';
    echo 'window.history.back();'; // Go back to the login form
    echo '</script>';
}

$conn->close();
?>