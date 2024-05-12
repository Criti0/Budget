<?php
// Verifică dacă datele de autentificare sunt corecte
if ($_POST["username"] === "Cristi" && $_POST["password"] === "123") {
    // Datele de autentificare sunt corecte, deci redirecționează către index.html
    header("Location: index.html");
    exit; // Oprire pentru a asigura că nu se execută codul de mai jos în cazul unei redirecționări
} else {
    // Datele de autentificare sunt incorecte, afișează un mesaj de eroare
    echo "<h1>Eroare: Nume de utilizator sau parolă incorectă!</h1>";
}
?>
