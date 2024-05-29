<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Kullanıcı Kaydı</title>
    <script src="nasıl.js"></script>
    <script type="text/javascript">
        function showAlert(message) {
            alert(message);
        }
    </script>
</head>
<body>
<?php
// Establish connection to MySQL database
$servername = "localhost";
$username = "root";
$password = ""; // Default password for XAMPP
$dbname = "login_system";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo '<script>';
    echo 'showAlert("Connection failed: ' . addslashes($conn->connect_error) . '");';
    echo 'window.history.back();'; // Go back to the registration form
    echo '</script>';
    exit();
}

// Retrieve username and password from registration form
$username = $_POST['username'];
$password = $_POST['password'];

// Protect against SQL injection
$username = mysqli_real_escape_string($conn, $username);
$password = mysqli_real_escape_string($conn, $password);

// Hash the password for security
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Check if username already exists
$sql_check = "SELECT * FROM users WHERE username='$username'";
$result_check = $conn->query($sql_check);

if ($result_check->num_rows > 0) {
    // Username already exists, show error message
    echo '<script>';
    echo 'showAlert("Bu kullanıcı adı zaten mevcut. Lütfen farklı bir kullanıcı adı seçin.");';
    echo 'window.history.back();'; // Go back to the registration form
    echo '</script>';
    exit();
}

// Insert user data into the database
$sql_insert = "INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')";
if ($conn->query($sql_insert) === TRUE) {
    // Registration successful
    echo '<script>';
    echo 'showAlert("Registration successful!");';
    echo 'window.location.href = "baseuye.html";'; // Redirect after success
    echo '</script>';
} else {
    // Error while inserting data
    echo '<script>';
    echo 'showAlert("Error: ' . addslashes($conn->error) . '");';
    echo 'window.history.back();'; // Go back to the registration form
    echo '</script>';
}

$conn->close();
?>
</body>
</html>