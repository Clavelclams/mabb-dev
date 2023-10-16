<?php
session_start();

$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "MABB";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    
    if (password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        
        // Redirigez l'utilisateur vers la page d'accueil après la connexion réussie
        header("Location: index.php");
    } else {
        // Gestion de l'erreur de mot de passe
        echo "Invalid password.";
    }
} else {
    // Gestion de l'erreur d'e-mail
    echo "Email not found.";
}

$stmt->close();
$conn->close();
?>
