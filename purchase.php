<?php
// Establish connection to MySQL database
$servername = "localhost";
$username = "root";
$password = ""; // Default password for XAMPP
$dbname = "car_rental";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$country = $_POST['country'];
$city = $_POST['city'];
$neighborhood = $_POST['neighborhood'];
$phone = $_POST['phone'];
$car = $_POST['car'];
$pickup_date = $_POST['pickup-date'];
$return_date = $_POST['return-date'];
$card_number = $_POST['card-number'];
$expiration_date = $_POST['expiration-date'];
$cvv = $_POST['cvv'];
$cardholder_name = $_POST['cardholder-name'];

// Protect against SQL injection
$name = mysqli_real_escape_string($conn, $name);
$email = mysqli_real_escape_string($conn, $email);
$country = mysqli_real_escape_string($conn, $country);
$city = mysqli_real_escape_string($conn, $city);
$neighborhood = mysqli_real_escape_string($conn, $neighborhood);
$phone = mysqli_real_escape_string($conn, $phone);
$car = mysqli_real_escape_string($conn, $car);
$pickup_date = mysqli_real_escape_string($conn, $pickup_date);
$return_date = mysqli_real_escape_string($conn, $return_date);
$card_number = mysqli_real_escape_string($conn, $card_number);
$expiration_date = mysqli_real_escape_string($conn, $expiration_date);
$cvv = mysqli_real_escape_string($conn, $cvv);
$cardholder_name = mysqli_real_escape_string($conn, $cardholder_name);

// Insert form data into the database
$sql = "INSERT INTO rentals (name, email, country, city, neighborhood, phone, car, pickup_date, return_date, card_number, expiration_date, cvv, cardholder_name)
        VALUES ('$name', '$email', '$country', '$city', '$neighborhood', '$phone', '$car', '$pickup_date', '$return_date', '$card_number', '$expiration_date', '$cvv', '$cardholder_name')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
