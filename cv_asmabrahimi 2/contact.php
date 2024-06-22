<?php

// Récupérer les données du formulaire
$nom = $_POST['nom'];
$email = $_POST['email'];
$message = $_POST['message'];

// Connexion à la base de données
$dsn = 'mysql:dbname=contact;host=localhost:8889';
$user = 'root';
$password = 'root';

$bdd = new PDO($dsn, $user, $password);

$insert = $bdd->prepare("
 INSERT INTO messages_contact (nom, email, message ) VALUES (:nom, :email, :message)");
 $insert->bindParam(':nom', $nom);
 $insert->bindParam(':email', $email);
 $insert->bindParam(':message', $message);

 $insert->execute();

?>

